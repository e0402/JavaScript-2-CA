import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";
import { setupSearch } from "../filters/search.mjs";
import { filterPosts } from "../filters/filtering.mjs";

/**
 * This export function renders all posts using posttemplate from templates/post.mjs. The setupSearch and filterPosts functions are also called here.
 */

export async function readPosts() {
  const posts = await postMethods.getPosts();
  const postsContainer = document.querySelector("#posts");

  setupSearch(posts);
  filterPosts(posts);

  templates.renderPostsTemplate(posts, postsContainer);
}
