const router = require('express').Router();
const db = require('../models'); //brings in our models
const SECRET_KEY = '7zAXlb78vKSm6JSUVKHW3rvoHGjEAQ3N'; //don't forget to hide this

// const expressJwt = require('express-jwt');
// const jwtConfig = expressJwt({secret: 'aldsfjaklsdfjaskldfjklasdfjklsadjfklsdaf'})
//                     .unless({path: ['/signup']});

// router.use(jwtConfig);


var jwt = require('jsonwebtoken');


router.route('/login')
    .post( (req,res,err) => {
        db.User.findOne({username: req.body.username})
            .then(dbUser => !!dbUser? dbUser : Promise.reject("Incorrect Username") ) //check that the user exists

            .then(dbUser => dbUser.password === req.body.password? dbUser : Promise.reject("Incorrect Password")) //check that the password is correct

            .then(dbUser => {
                const token = jwt.sign({data:dbUser}, SECRET_KEY); //create token
                res.json({success: true, token: token});    //send token to user
            })

            .catch( error => res.json( 401, error )); 
    })
router.route('/signup')
    .post( (req,res,err) => {
        db.User.create({
            username: req.body.username,
            password: req.body.password
        })
        .then( newUser => res.json( newUser ))
    })

module.exports = router;