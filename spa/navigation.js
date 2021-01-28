import { navigators } from "./navigator.js";

export default class Navigation {
  static currentLocation = "";
  static anchors = null;
  static rootElement = document.getElementById("root");

  constructor() {
    this._getAnchorsInRenderedPage();
  }

  _replaceComponent(aPath) {
    const navigator = navigators.find((navigator) => navigator.path === aPath);
    Navigation.rootElement.innerHTML = navigator.component();
  }

  _getAnchorsInRenderedPage() {
    const anchors = document.querySelectorAll("a");
    this.anchors = anchors;
  }

  _addClickEventToAnchors() {
    Navigation.anchors.forEach((anchor) => {
      anchor.addEventListeners("click", (event) => {
        const href = event.currentTarget.href;
        this.navigateTo(href);
      });
    });
  }

  navigateTo(aPath) {
    if (Navigation.currentLocation === aPath) {
      console.log("return");
      return;
    }

    Navigation.currentLocation = aPath;
    history.pushState(null, null, aPath);

    this._replaceComponent(aPath);
    this._getAnchorsInRenderedPage();
  }
}
