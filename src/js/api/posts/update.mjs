import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "put";

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
