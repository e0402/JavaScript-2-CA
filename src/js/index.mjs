import { setFormRegistrationListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";
import { createPost } from "./api/posts/create.mjs";

// import * as posts from "./api/posts/index.mjs"

const path = location.pathname;

if (path === "/profile/login/") {
  setFormLoginListener();
} else if (path === "/profile/register/") {
  setFormRegistrationListener();
}

createPost({
  title: "Example Post",
  body: "Also example",
});
