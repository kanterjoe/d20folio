const router    = require('express').Router();
const db        = require('../models'); //brings in our models
const seeds     = require('../charSeeds.json');

router.route('/characters')
    .get( (req,res,err) => {
        //get all characters here
        //res.json(seeds);
        db.Character.find({})
            .sort({_id: -1}) // new stuff is on top
            .then(characters => {console.log("Got Characters: ", characters); return characters;})
            .then(characters => res.json(characters))
            .catch(error => res.json(500, error))
    })

router.route('/character')
    .post( (req,res,err) => {
        //make a new character here
        // res.json("");
        const newChar = req.body;

        db.Character.create(newChar)
            .then(character => res.json(character))
            .catch(error => res.json(500, error))
    })

router.route('/character/:id')
    .get( (req,res,err) => {
        //get a single character
        db.Character.findOne({id: req.params.id})
        .then(character => {console.log("Got Character: ", character); return character;})
        .then(character => res.json(character))
        .catch(error => res.json(500, error))
    })
    .put( (req,res,err) => {
        //update a character here
        const newChar = req.body;
        const id = newChar._id;

        db.Character.put(id, newChar)
            .then( () => res.json(""))
            .catch(error => res.json(500, error))
    })
    .delete( (req,res,err) => {
        //delete a character here
        db.Character.deleteOne(req.params.id)
            .then( () => res.json(""))
            .catch(error => res.json(500, error))
    })

router.route('/characters/mine')
    .get( (req,res,err) => {
        //get all my characters here
        res.json(seeds);
    })
module.exports = router;