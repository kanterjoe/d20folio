const router    = require('express').Router();
const db        = require('../models'); //brings in our models
const seeds     = require('../charSeeds.json');

router.route('/characters')
    .get( (req,res,err) => {
        //get all characters here
        res.json(seeds);
    })

router.route('/character')
    .post( (req,res,err) => {
        //make a new character here
        res.json("");
    })

router.route('/character/:id')
    .get( (req,res,err) => {
        //get a single character
        res.json(seeds[0]);

    })
    .put( (req,res,err) => {
        //update a character here
        res.json("");
    })
    .delete( (req,res,err) => {
        //delete a character here
        res.json("");
    })

router.route('/characters/mine')
    .get( (req,res,err) => {
        //get all my characters here
        res.json(seeds);
    })
module.exports = router;