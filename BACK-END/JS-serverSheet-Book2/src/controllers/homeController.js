const router = require('express').Router();
const petManager = require('../managers/petManager')

router.get('/', (req, res) => {
    res.render('home') 
 });   

module.exports = router;