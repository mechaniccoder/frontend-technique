import Home from "./Home.js";
import Profile from "./Profile.js";
import Setting from "./Setting.js";

const anchors = document.querySelectorAll("a");

document.getElementById("root").innerHTML = Home();

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target.href;
    const params = target.split("/");
    const param = `${params[params.length - 1]}`;

    history.pushState(null, null, param);
    replaceComponent(param);
  });
});

function replaceComponent(param) {
  const rootElement = document.getElementById("root");
  // rootElement.innerHTML = null;

  if (param === "home" || !param) {
    return (rootElement.innerHTML = Home());
  }

  if (param === "profile") {
    return (rootElement.innerHTML = Profile());
  }

  if (param === "setting") {
    return (rootElement.innerHTML = Setting());
  }
}

window.addEventListener("popstate", (event) => {
  const param = location.pathname.split("/")[
    location.pathname.split("/").length - 1
  ];
  replaceComponent(param);
});
