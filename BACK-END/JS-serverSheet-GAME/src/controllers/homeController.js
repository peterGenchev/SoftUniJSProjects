const router = require('express').Router();
const gameManager = require('../managers/gameManager')

router.get('/', (req, res) => {
    res.render('home') 
 }); 

router.get('/search',async (req, res) => {
    const { search, platform } = req.query;

const games = await gameManager.getAllGames( search, platform);


res.render('search', { games });
console.log(games)
});


module.exports = router;