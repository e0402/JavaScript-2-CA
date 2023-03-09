import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "delete";

/**
 * This export function deletes a users own posts and throws an error if a number ID is missing. It checks if the URL contains an ID parameter, throwing an error if a number ID is missing. If present, the ID is used to send a DELETE request (with token in header) to the API, deleting the post.
 * @param {number} id A users number ID.
 * @returns Returns JWT.
 */

export async function removePost(id = 0) {
  if (!id) {
    throw new Error("Post id is required when deleting a post");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await fetchWithToken(updatePostURL, {
    method,
  });

  return await response.json();
}
