const markBtn = document.querySelector(".notifications__header a");

markBtn.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  const notifications = document.querySelectorAll(".notification.unread");
  notifications.forEach((element) => {
    element.classList.remove("unread");
  });
}
