import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "put";

/**
 * This export function enables a logged in user to update a post created by themselves. It checks if the URL contains an ID parameter, throwing an error if a number ID is missing. If present, the ID is used to send a PUT request (with token in header) to the API, updating the post.
 * @param {object} postData
 * @returns Returns JWT.
 */

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Post id is required when updating a post");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const tagsArray = postData.tags.split(",");

  const response = await fetchWithToken(updatePostURL, {
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
