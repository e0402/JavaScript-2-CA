import { postsTemplateA } from "../templates/post.mjs";

const postsContainer = document.querySelector("#posts");

const select = document.querySelector("#filterList");

/**
 *This export function filters an array of posts by first listening for a change event, and then returns posts based on filter criteria set. The user can filter posts based on posts from the whole year, posts containing media content, posts with likes and posts with comments
 * @param {Array} posts An array of objects (posts).
 */

export function filterPosts(posts) {
  select.addEventListener("change", () => {
    const filterValue = select.value;

    const postsFilteredByDate = posts.filter((post) => {
      if (post.created.includes(filterValue)) {
        return post;
      } else if (filterValue === "media") {
        return post.media;
      } else if (
        post.title.includes(filterValue) ||
        post.body.includes(filterValue) ||
        post.tags.includes(filterValue)
      ) {
        return post;
      } else if (filterValue === "likes") {
        return post._count.reactions > 0;
      } else if (filterValue === "comments") {
        return post._count.comments > 0;
      }
    });

    /**
     * This function renders the filtered post result as HTML.
     * @param {Array} postsFilteredByDate An array of filtered objects (posts).
     * @param {Element} postsContainer An empty div container.
     */
    function renderPostFilterTemplate(postsFilteredByDate, postsContainer) {
      postsContainer.innerHTML = "";

      postsContainer.append(...postsFilteredByDate.map(postsTemplateA));
    }

    renderPostFilterTemplate(postsFilteredByDate, postsContainer);
  });
}
