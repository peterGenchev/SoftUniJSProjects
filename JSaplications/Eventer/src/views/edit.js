import { getById } from "../api/data.js";
import { html } from '../lib.js';
import { createSubmitHandler } from "../util.js";
import { editItem } from "../api/data.js";

const editTemplate = (item, onEdit) => html`
    <section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form @submit = ${onEdit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
                .value=${item.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
                .value=${item.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                .value=${item.category}
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
                .value=${item.description}
              ></textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
              .value=${item.date}
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`

export async function showEdit(ctx) {

    const id = ctx.params.id;
    const item = await getById(id);

    ctx.render(editTemplate(item, createSubmitHandler(onEdit)));

    async function onEdit({ name, imageUrl, category, description, date }, form) {
        if ([name, imageUrl, category, description, date].some(e => e == '')) {
            return alert('All fields are required!');
        }
       
        await editItem(id,{
            name,
            imageUrl,
            category,
            description,
            date
          } )
        
        ctx.page.redirect('/catalog/' + id)
    }
}