const router = require('express').Router();
const petManager = require('../managers/petManager')
const { errorHandler } = require('../utils/errorUtils')

router.get('/catalog', async (req, res) => {

    const card = await petManager.getAll().lean();
    res.render('pets/catalog', { card })
});

router.get('/pets/create', (req, res) => {

    res.render('pets/create')
});

router.post('/pets/create', async (req, res) => {
    const petData = {
        ...req.body,
        owner: req.user._id
    }
    console.log(petData)
    await petManager.create(petData);
    res.redirect('/catalog')
    // try {

    // } catch (error) {
    //    // res.render('pets/create', { error: getErrorMessage(error) })
    // }
});

router.get('/pets/:petsId/details', async (req, res) => {
    const petId = req.params.petId;
    const pet = await petManager.getOne(petId).lean();
    const isOwner = req.user?._id == pet.owner._id

    res.render('pets/details', { pet, isOwner })
});

router.get('/pets/:gameId/delete', async (req, res) => {
    const gameId = req.params.gameId
    try {
        await gameManager.delete(gameId)

        res.redirect('/catalog')
    } catch (error) {
        res.redirect(`pets/${gameId}/details`, { error: 'Unseccessfull' })
    }

});

router.get('/pets/:gameId/edit', async (req, res) => {

    const pet = await gameManager.getOne(req.params.petId).lean();

    res.render('pets/edit', { pet });

});

router.post('/games/:gameId/edit', async (req, res) => {

    const gameData = req.body;
    try {

        await gameManager.edit(req.params.gameId, gameData);

        res.redirect('/catalog')

    } catch (error) {

        res.render('games/edit', {error: 'Unable to update game', ...gameData})
    }

})



module.exports = router