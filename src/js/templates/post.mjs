import { removePost } from "../api/posts/index.mjs";

/**
 * This export function is an HTML posts template with dynamic values inserted to retrieve individual post info from each post author. The function also listens for a click event from delete button, which then reloads page again, before posts is returned.
 *
 * @param {object} postData Function parameter.
 * @returns Posts is returned.
 */

export function postsTemplateA(postData) {
  const posts = document.createElement("div");
  posts.innerHTML += `
  <!-- Card-1 -->
  <section class="container d-flex align-items-center justify-content-center mb-5" style="margin-top: 100px">
    <div class="card" style="width: 42rem">
      <div class="card-body">
        <!-- Data -->
        <div>
        <div>
        <button class="btn float-end me-1 delete-button" data-id="${postData.id}"><i class="fa-regular fa-trash-can" style="margin-top: -52px"></i></button>
        <a href="../post/edit/?id=${postData.id}" class="btn float-end me-1"><i class="fa-regular fa-pen-to-square" style="margin-top: -52px"></i></a>
        <a href="../post/?id=${postData.id}" class="btn float-end me-1"><i class="fa-regular fa-eye" style="margin-top: -52px"></i></a>
        </div>
          <div class="d-flex mb-3">
            <a href="">
              <img src="${postData.author.avatar}" class="border rounded-circle me-2"
                alt="N/A" style="height: 40px; width: 40px" />
            </a>
            <div>
              <a href="" class="text-dark mb-0">
                <a href="../profile/?name=${postData.author.name}"><strong>${postData.author.name}</strong></a>
                <p class="me-3"style="font-size: 0.68em;">${postData.created}</p>
              </a>
              <a href="" class="text-muted d-block" style="margin-top: -6px">
              </a>
            </div>
          </div>
        </div>
        <!-- Description -->
        <div>
          <h3>${postData.title}</h3>
          <p>${postData.body}</p>
        </div>
      </div>
      <!-- Media -->
      <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
        <img src="${postData.media}" alt="" class="w-100"  style="margin-bottom: 5px" />
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
        </a>
        <div class="mx-4 mt-3 mb-3">
            <ul class="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
                <li><i class="far fa-comment"><span class="small ps-2">${postData._count.comments}</span></i></li>
                <li><i class="fas fa-retweet"></i><span class="small ps-2">${postData._count.reactions}</span></li>
                <li><i class="far fa-heart"></i><span class="small ps-2">${postData._count.reactions}</span></li>
                <li><i class="far fa-share-square"></i></li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</section>`;

  const deleteButton = posts.querySelector(".delete-button");

  deleteButton.addEventListener("click", () => {
    removePost(postData.id);

    setTimeout(() => {
      location.reload();
    }, 200);
  });

  return posts;
}

/**
 * Export template function for rendering all posts as HTML using .map.
 * @param {Array} postDataList Function parameter indicating list of posts.
 * @param {object} parent Function parameter.
 */

export function renderPostsTemplate(postDataList, parent) {
  parent.append(...postDataList.map(postsTemplateA));
}

/**
 * Export template function for rendering single post as HTML using .map.
 * @param {object} postData Function parameter indicating single post.
 * @param {object} parent Function parameter.
 */

export function renderPostTemplate(postData, parent) {
  parent.append(postsTemplateA(postData));
}
