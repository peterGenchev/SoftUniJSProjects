const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const petController = require('./controllers/PetController');

router.use(homeController);
router.use(petController);
router.use('/users', userController);

module.exports = router;