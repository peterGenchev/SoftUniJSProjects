const router = require('express').Router();
const cryptoManager = require('../managers/cryptoManager')

router.get('/', (req, res) => {
    
    res.render('home') 
 }); 

router.get('/cryptos/search',async (req, res) => {

    const { search, payment } = req.query;

    const cryptos = await cryptoManager.getAllCryptos( search, payment);


res.render('cryptos/search', { cryptos });
console.log(cryptos)
});


module.exports = router;