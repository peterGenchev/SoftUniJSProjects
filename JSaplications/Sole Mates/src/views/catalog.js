import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (shoes) => html`
        <section id="dashboard">

          <h2>Collectibles</h2>
          <ul class="card-wrapper">
           ${shoes.length == 0 ? html`<h2>There are no items added yet.</h2>`
           : shoes.map(bootsCardTemplate)}
          </ul>

        </section>`

const bootsCardTemplate = (shoes) => html`
            <li class="card">
              <img src=${shoes.imageUrl} alt="eminem" />
              <p>
                <strong>Brand: </strong><span class="brand">${shoes.brand}</span>
              </p>
              <p>
                <strong>Model: </strong
                ><span class="model">${shoes.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${shoes.value}</span>$</p>
              <a class="details-btn" href="/catalog/${shoes._id}">Details</a>
            </li>`


export async function showCatalog(ctx) {

    const shoes = await getAll()
    ctx.render(catalogTemplate(shoes))

}