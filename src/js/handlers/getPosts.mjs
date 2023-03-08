import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";
import { setupSearch } from "../filters/search.mjs";
import { filterPosts } from "../filters/filtering.mjs";

export async function readPosts() {
  const posts = await postMethods.getPosts();
  const postsContainer = document.querySelector("#posts");

  setupSearch(posts);
  filterPosts(posts);

  templates.renderPostsTemplate(posts, postsContainer);
}
