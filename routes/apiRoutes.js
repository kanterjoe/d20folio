const router = require('express').Router();
const db = require('../models'); //brings in our models
const seeds = require('../charSeeds.json');
const SECRET_KEY = '7zAXlb78vKSm6JSUVKHW3rvoHGjEAQ3N'; //don't forget to hide this

const expressJwt = require('express-jwt');
const jwtProtect = expressJwt({secret: SECRET_KEY})

// router.use(jwtConfig);

router.route('/characters')
    .get((req, res, err) => {
        //get all characters here
        //res.json(seeds);
        console.log(req.headers)
        db.Character.find({})
            .sort({ _id: -1 }) // new stuff is on top
            .then(characters => { console.log("Got Characters: ", characters); return characters; })
            .then(characters => res.json(characters))
            .catch(error => res.json(500, error))
    })

router.route( '/character')
    .post(jwtProtect, (req, res, err) => {
        //make a new character here
        // res.json("");
        //return res.json({good: true, user: req.user})
        const newChar = req.body;
        const userId = req.user.data._id;
        let createdChar;
        db.Character.create(newChar) 
            .then( character => {createdChar = character; return character})
            .then(() => db.User.findOne({_id: userId}))
            .then(dbUser => dbUser.update({$push:{characters: createdChar._id}}) )
            .then(result => res.json(createdChar))
            .catch(error => res.json(500, error))
    })

router.route('/character/:id')
    .get((req, res, err) => {
        //get a single character
        db.Character.findOne({ _id: req.params.id })
            .then(character => { console.log("Got Character: ", character); return character; })
            .then(character => res.json(character))
            .catch(error => res.json(500, error))
    })
    .put((req, res, err) => {
        //update a character here
        const newChar = req.body;
        const id = req.params.id || newChar._id;

        db.Character.put({ _id: id, character: newChar })
            .then(() => res.json(""))
            .catch(error => res.json(500, error))
    })
    .delete((req, res, err) => {
        //delete a character here
        db.Character.deleteOne({ _id: req.params.id })
            .then(() => res.json(""))
            .catch(error => res.json(500, error))
    })

router.route( '/characters/mine')
    // sprinkle some es6 async/await syntax sugar
    .get(jwtProtect, async (req, res, err) => {
        try { let myCharacters = await db.User.findOne({_id: req.user.data._id})
                    .populate("characters")
                    // .sort({ _id: -1 }); 
            res.json(myCharacters.characters) }
        catch (err) { res.json(500, err) }
    })


module.exports = router;