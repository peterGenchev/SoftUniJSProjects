import {page, render} from './lib.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { updateNav } from './views/nav.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';
import { showEdit } from './views/edit.js';
import { showSearch } from './views/search.js';

const main = document.querySelector('main');

page(decorateContext)

page('/', showHome)
page('/login', showLogin)
page('/register', showRegister)
page('/catalog', showCatalog)
page('/catalog/:id', showDetails)
page('/create', showCreate)
page('/edit/:id', showEdit)
page('/search', showSearch)

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