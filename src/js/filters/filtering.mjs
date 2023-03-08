import { postsTemplateA } from "../templates/post.mjs";

const postsContainer = document.querySelector("#posts");

//Filter posts
const select = document.querySelector("#filterList");

/**
 *
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

    //Rendering filtered posts result as HTML
    function renderPostFilterTemplate(postsFilteredByDate, postsContainer) {
      postsContainer.innerHTML = "";

      postsContainer.append(...postsFilteredByDate.map(postsTemplateA));
    }

    renderPostFilterTemplate(postsFilteredByDate, postsContainer);
  });
}
