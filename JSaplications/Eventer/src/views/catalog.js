import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (items) => html`
         <h2>Current Events</h2>
        <section id="dashboard">
        
        ${items.length == 0 ? html`<h4>No Events yet.</h4>`
           : items.map(itemCardTemplate)}

        </section>
        `

const itemCardTemplate = (item) => html`
             <div class="event">
            <img src=${item.imageUrl} alt="example1" />
            <p class="title">
            ${item.name}
            </p>
            <p class="date">${item.date}</p>
            <a class="details-btn" href="/catalog/${item._id}">Details</a>
          </div>`


export async function showCatalog(ctx) {

    const items = await getAll()
    ctx.render(catalogTemplate(items))
    
}