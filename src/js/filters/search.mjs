import { postsTemplateA } from "../templates/post.mjs";

const postsContainer = document.querySelector("#posts");

/**
 * This export search function filters an array of posts by first listening for a submit event, and then returns posts based on filter criteria set. The user can search based on title, author name, body content and tag names for the posts.
 * @param {Array} posts An array of objects(posts).
 */

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

    /**
     * This function renders the filtered post/search results as HTML.
     * @param {Array} filteredPosts An array of filtered objects (posts).
     * @param {*} postsContainer An empty div container.
     */

    function renderPostSearchTemplate(filteredPosts, postsContainer) {
      postsContainer.innerHTML = "";

      postsContainer.append(...filteredPosts.map(postsTemplateA));
    }

    renderPostSearchTemplate(filteredPosts, postsContainer);
  });
}
