const router = require('express').Router();

const userManager = require('../managers/userManager');
const { TOKEN_KEY } = require('../config/config');


router.get('/login', (req, res) => {
    res.render('users/login')
});

//modify login and register ACTIONS! 
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const token = await userManager.login(email, password);
    res.cookie(TOKEN_KEY, token)
    res.redirect('/')
   

});

router.get('/register', (req, res) => {
    res.render('users/register')
});

router.post('/register', async (req, res) => {
    const { email, password, rePassword } = req.body;

    
        const token = await userManager.register({ email, password, rePassword });
        // res.cookie(TOKEN_KEY, token);
        // res.redirect('/users/login');


    res.redirect('/users/login')

});

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/')
});


module.exports = router; 