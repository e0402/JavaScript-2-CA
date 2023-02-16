import { setFormRegistrationListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setFormLoginListener();
} else if (path === "/profile/register/") {
  setFormRegistrationListener();
}

// post.createPost();
// post.updatePost();
// post.removePost(3025).then(console.log);
// post.getPost(3025).then(console.log);
// post.getPosts().then(console.log);
