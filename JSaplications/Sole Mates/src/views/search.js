import { html } from '../lib.js';

const searchTemplate = () => html `
                <section id="search">
          <h2>Search by Brand</h2>

          <form class="search-wrapper cf">
            <input
              id="#search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required
            />
            <button type="submit">Search</button>
          </form>

          <h3>Results:</h3>

          <div id="search-container">
            <ul class="card-wrapper">
              <!-- Display a li with information about every post (if any)-->
              
            </ul>

            <!-- Display an h2 if there are no posts -->
            <!-- <h2>There are no results found.</h2> -->
          </div>
        </section>`

export function showSearch(ctx) {
    ctx.render(searchTemplate());
}
