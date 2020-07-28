function ConnectedToNetwork(online) {
  const elem = document.querySelector(".status");

  if (online) {
    elem.classList.remove("offline");
    elem.classList.add("online");
    elem.innerText = "Online";
  } else {
    elem.classList.remove("online");
    elem.classList.add("offline");
    elem.innerText = "Offline";
  }
}

window.addEventListener("load", () => {
  ConnectedToNetwork(navigator.onLine);

  window.addEventListener("online", () => {
    ConnectedToNetwork(true);
  });

  window.addEventListener("offline", () => {
    ConnectedToNetwork(false);
  });
});
