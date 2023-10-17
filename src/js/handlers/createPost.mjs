import { createPost } from "../api/posts/index.mjs";

/**
 * Listens for a submit event from form button and calls the createPost function from posts/create.mjs file. Formdata is sent to the API.
 */

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createPost(post);
    });
  }
}
