import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTempalte = (offer, hasUser, isOwner, onDelete) => html`
                <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${offer.imageUrl} alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
              Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span
                  >${offer.requirements}</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span
                  >${offer.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">1</strong></p>

            ${isOwner ? html`<div id="action-buttons">
              <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : nothing}

            </div>
          </div>
        </section>`

export async function showDetails(ctx) {
    
    const id = ctx.params.id;
    const offer = await getById(id);

    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && ctx.user._id == offer._ownerId;
    ctx.render(detailsTempalte(offer, hasUser,isOwner, onDelete));


async function onDelete() {
    const choice = confirm('Are you sure?');

    if (choice) {
        
        await deleteById(id);
        ctx.page.redirect('/catalog')

    }
}
}