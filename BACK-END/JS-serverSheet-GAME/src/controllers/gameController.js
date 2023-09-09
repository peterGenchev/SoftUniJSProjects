const router = require('express').Router();
const gameManager = require('../managers/gameManager')
const { errorHandler } = require('../utils/errorUtils')

router.get('/catalog', async (req, res) => {

    const card = await gameManager.getAll().lean();
    res.render('games/catalog', { card })
});

router.get('/games/create', (req, res) => {

    res.render('games/create')
});

router.post('/games/create', async (req, res) => {
    const gameData = {
        ...req.body,
        owner: req.user._id
    }
    try {
        await gameManager.create(gameData);

        res.redirect('/catalog')
    } catch (error) {
       // res.render('games/create', { error: getErrorMessage(error) })
    }
});

router.get('/games/:gameId/details', async (req, res) => {
    const gameId = req.params.gameId;
    const game = await gameManager.getOne(gameId).lean();
    const isOwner = req.user?._id == game.owner._id

    res.render('games/details', { game, isOwner })
});

router.get('/games/:gameId/delete', async (req, res) => {
    const gameId = req.params.gameId
    try {
        await gameManager.delete(gameId)

        res.redirect('/catalog')
    } catch (error) {
        res.redirect(`games/${gameId}/details`, { error: 'Unseccessfull' })
    }

});

router.get('/games/:gameId/edit', async (req, res) => {

    const game = await gameManager.getOne(req.params.gameId).lean();

    res.render('games/edit', { game });

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