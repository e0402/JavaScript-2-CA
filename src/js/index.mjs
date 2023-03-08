import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as profileMethods from "./api/profiles/index.mjs";
import { redirecting } from "./redirect/redirecting.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setFormLoginListener();
} else if (path === "/profile/register/") {
  listeners.setFormRegistrationListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostFormListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostListener();
} else if (path === "/profile/edit/") {
  listeners.setUpdateProfileListener();
} else if (path === "/posts/") {
  listeners.readPosts();
} else if (path === "/post/") {
  listeners.readPost();
} else if (path === "/profile/") {
  listeners.readProfile();
}

redirecting();
