import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

export async function readPost() {
  const post = await postMethods.getPost(id);
  const postContainer = document.querySelector("#post");
  templates.renderPostTemplate(post, postContainer);
}
