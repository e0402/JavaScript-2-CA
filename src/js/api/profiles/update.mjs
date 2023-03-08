import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
  console.log(profileData);

  if (!profileData.name) {
    throw new Error("Name is required when updating a post");
  }
  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  //   const tagsArray = postData.tags.split(",");

  const response = await fetchWithToken(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  return await response.json();
}
