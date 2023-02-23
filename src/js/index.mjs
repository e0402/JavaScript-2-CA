import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setFormLoginListener();
} else if (path === "/profile/register/") {
  listeners.setFormRegistrationListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostFormListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostListener();
}

async function testTemplates() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplates();
