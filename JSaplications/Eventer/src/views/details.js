import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';


debugger

const detailsTempalte = (item, hasUser, isOwner, onDelete ) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.name}</p>
            <p id="details-category">
              Category: <span id="categories">${item.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${item.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${item.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">0</span> times.</h3>

            ${hasUser ? html`<div id="action-buttons">
            ${isOwner ? html`
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : html`
            <a onclick="hidden=true" href="#" id="go-btn">Going</a>`}
            ` : nothing}

            </div>
        
            </div>
          </div>
        </section>`
      

export async function showDetails(ctx) {

  const id = ctx.params.id;
  const item = await getById(id);

  const hasUser = Boolean(ctx.user);
  const isOwner = hasUser && ctx.user._id == item._ownerId;
  ctx.render(detailsTempalte(item, hasUser, isOwner, onDelete ));


  async function onDelete() {
    const choice = confirm('Are you sure?');

    if (choice) {

      await deleteById(id);
      ctx.page.redirect('/catalog')

    }
  }


}