import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "post";

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
