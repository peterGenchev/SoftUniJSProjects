const router = require('express').Router();
const animalManager = require('../managers/animalManager')

router.get('/', async (req, res) => {

    const cardTwo = await animalManager.getAll().lean();
    
    res.render('home', {cardTwo}) 
 });  

router.get('/animals/search',async (req, res) => {

    const { search } = req.query;

    const animals = await animalManager.getAllAnimals( search );

 
res.render('animals/search', { animals });
console.log(animals)
});


module.exports = router;