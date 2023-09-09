const router = require('express').Router();
const cryptoManager = require('../managers/cryptoManager')
const { errorHandler } = require('../utils/errorUtils')

router.get('/catalog', async (req, res) => {

    const card = await cryptoManager.getAll().lean();
    res.render('cryptos/catalog', { card })
});

router.get('/cryptos/create', (req, res) => {

    res.render('cryptos/create')
}); 

router.post('/cryptos/create', async (req, res) => {
    const cryptoData = {
        ...req.body,
        owner: req.user._id
    }
    try {
        await cryptoManager.create(cryptoData);

        res.redirect('/catalog')
    } catch (error) {
       // res.render('games/create', { error: getErrorMessage(error) })
    }
});

router.get('/cryptos/:cryptoId/details', async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const crypto = await cryptoManager.getOne(cryptoId).lean();
    const isOwner = req.user?._id == crypto.owner._id;
    const isBuyer = crypto.buyers?.some(id => id == req.user?._id)

    res.render('cryptos/details', { crypto, isOwner, isBuyer })
});

router.get('/cryptos/:cryptoId/buy', async (req, res) => {
    await cryptoManager.buy(req.user._id, req.params.cryptoId);

    res.redirect(`/cryptos/${req.params.cryptoId}/details`)
})

router.get('/cryptos/:cryptoId/delete', async (req, res) => {
    const cryptoId = req.params.cryptoId
    try {
        await cryptoManager.delete(cryptoId)

        res.redirect('/catalog')
    } catch (error) {
        res.redirect(`cryptos/${cryptoId}/details`, { error: 'Unseccessfull' })
    }

});

router.get('/cryptos/:cryptoId/edit', async (req, res) => {

    const crypto = await cryptoManager.getOne(req.params.cryptoId).lean();

    res.render('cryptos/edit', { crypto });

});

router.post('/cryptos/:cryptoId/edit', async (req, res) => {

    const cryptoData = req.body;
    try {

        await cryptoManager.edit(req.params.cryptoId, cryptoData);

        res.redirect('/catalog')

    } catch (error) {

        res.render('cryptoId/edit', {error: 'Unable to update cryptoId', ...cryptoData})
    }

})

module.exports = router