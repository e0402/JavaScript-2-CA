import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";

/**
 * This export function enables a logged in user to retrieve all posts created by other users or themselves from the API by sending a GET request (with token in header).
 * @returns Returns JWT.
 */
export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${action}?_author=true&_comments=true&_reactions=true`;

  const response = await fetchWithToken(updatePostURL);

  return await response.json();
}

/**
 * This export function retrieves enables a logged in user to retrive all posts from the API by sending a GET request (with token in header).
 * @param {number} id A users number ID.
 * @returns Returns JWT.
 */

export async function getPost(id) {
  if (!id) {
    throw new Error("Post id is required for getting post");
  }
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true&_comments=true&_reactions=true`;

  const response = await fetchWithToken(getPostURL);

  return await response.json();
}
