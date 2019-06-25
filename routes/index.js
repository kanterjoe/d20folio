const router = require('express').Router();


router.use('/util', require('./utilRoutes'));
router.use('/api', require('./apiRoutes'));


module.exports = router;