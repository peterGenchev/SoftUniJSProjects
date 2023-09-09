const router = require('express').Router();
const animalManager = require('../managers/animalManager')


router.get('/animals/dashboard', async (req, res) => {

    const card = await animalManager.getAll().lean();
    res.render('animals/dashboard', { card })
});

router.get('/animals/create', (req, res) => {

    res.render('animals/create')
}); 

router.post('/animals/create', async (req, res) => {
    const animaltoData = {
        ...req.body,
        owner: req.user._id
    }
    try {
        await animalManager.create(animaltoData);

        res.redirect('/animals/dashboard')
    } catch (error) {
       // res.render('games/create', { error: getErrorMessage(error) })
    }
});

router.get('/animals/:animalId/details', async (req, res) => {
    const animalId = req.params.animalId;
    const animal = await animalManager.getOne(animalId).lean();
    const isOwner = req.user?._id == animal.owner._id;
    const isDonation = animal.donation?.some(id => id == req.user?._id)

    res.render('animals/details', { animal , isOwner, isDonation})
});

router.get('/animals/:animalId/buy', async (req, res) => {
    await animalManager.buy(req.user._id, req.params.animalId);

    res.redirect(`/animals/${req.params.animalId}/details`)
})

router.get('/animals/:animalId/delete', async (req, res) => {
    const animalId = req.params.animalId
    try {
        await animalManager.delete(animalId)

        res.redirect('/animals/dashboard')
    } catch (error) {
        res.redirect(`animals/${animalId}/details`, { error: 'Unseccessfull' })
    }

});

router.get('/animals/:animalId/edit', async (req, res) => {

    const animal = await animalManager.getOne(req.params.animalId).lean();

    res.render('animals/edit', { animal });

});

router.post('/animals/:animalId/edit', async (req, res) => {

    const animalData = req.body;
    try {

        await animalManager.edit(req.params.animalId, animalData);

        res.redirect('/animals/dashboard')

    } catch (error) {

        res.render('animalId/edit', {error: 'Unable to update cryptoId', ...animalData})
    }

})

module.exports = router