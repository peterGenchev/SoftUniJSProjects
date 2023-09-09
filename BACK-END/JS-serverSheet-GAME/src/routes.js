const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');

router.use(homeController);
router.use(gameController);
router.use('/users', userController);

module.exports = router;