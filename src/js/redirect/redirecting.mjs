//Changes page to posts feed on button click

export function redirecting() {
  const changePageBtn = document.querySelector(".changePagetoPostFeed");

  changePageBtn.addEventListener("click", () => {
    window.location.href = "../../posts/";

    setTimeout(() => {
      location.reload();
    }, 500);
  });
}
