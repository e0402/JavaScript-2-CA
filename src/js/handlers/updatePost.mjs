import { getPost, updatePost } from "../api/posts/index.mjs";

/**
 * This export function listens for a form and if present is then "hydrated" with info from post being created earlier. Like the create post form - title, body, tags and media can be updated. The function then listens for a submit event from form button and PUT request from posts/update.mjs is completed.
 */

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      updatePost(post);
    });
  }
}
