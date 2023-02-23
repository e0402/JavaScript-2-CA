import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
  console.log(profileData);

  if (!profileData.id) {
    throw new Error("Post id is required when updating a post");
  }
  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.id}/media`;

  //   const tagsArray = postData.tags.split(",");

  const response = await fetchWithToken(updateProfileURL, {
    method,
    body: JSON.stringify({
      name: profileData.name,
      email: profileData.email,
      banner: profileData.media,
      avatar: profileData.avatar,
    }),
  });

  return await response.json();
}
