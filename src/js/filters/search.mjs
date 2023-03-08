import { postsTemplateA } from "../templates/post.mjs";

const postsContainer = document.querySelector("#posts");

//Search function
export function setupSearch(posts) {
  const searchForm = document.querySelector("form#search");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.term.value;
    const term = searchTerm.toLowerCase();

    const filteredPosts = posts.filter((post) => {
      const title = post.title.toLowerCase();
      const body = post.body.toLowerCase();
      const author = post.author.name.toLowerCase();

      const tagsMatch = Boolean(
        post.tags
          .map((tag) => tag.toLowerCase())
          .filter((tag) => tag.includes(term)).length
      );

      return (
        title.includes(term) ||
        body.includes(term) ||
        author.includes(term) ||
        tagsMatch
      );
    });

    //Rendering search result as HTML

    function renderPostSearchTemplate(filteredPosts, postsContainer) {
      postsContainer.innerHTML = "";

      postsContainer.append(...filteredPosts.map(postsTemplateA));
    }

    renderPostSearchTemplate(filteredPosts, postsContainer);
  });
}

// if (!posts.length) {
//   postsContainer.innerHTML = `<div>There were 0 matches for that specific search term</div>`;
// }
