import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("Post id is required when deleting a post");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await fetchWithToken(updatePostURL, {
    method,
  });

  return await response.json();
}
