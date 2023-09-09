import {page, render} from './lib.js';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';
import { getUserData } from './util.js';
import { showDetails } from './views/details.js'; 
import { showEdit } from './views/edit.js';
import { showCreate } from './views/create.js';


const main = document.querySelector('main');

page(decorateContext)
page('/', showHome)
page('/catalog', showCatalog)
page('/login', showLogin)
page('/register', showRegister)
page('/catalog/:id', showDetails)
page('/edit/:id', showEdit)
page('/create', showCreate)


updateNav();
page.start();

function decorateContext(ctx, next){
    ctx.updateNav= updateNav
    ctx.render = renderMain;
 
    const user = getUserData();
    if (user){
        ctx.user = user;
    }

    next();
}

function renderMain(content){
    render (content,main)
}