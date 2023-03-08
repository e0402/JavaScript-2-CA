import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "post";

/**
 * This export function enables a logged in user to create a new post by sending a POST request (with token in header) to the API with object data from the create post form.
 * @param {object} postData Object data from create post form.
 * @returns Returns JWT.
 */

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const tagsArray = postData.tags.split(",");

  const response = await fetchWithToken(createPostURL, {
    method,
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      media: postData.media,
      tags: tagsArray,
    }),
  });

  return await response.json();
}
