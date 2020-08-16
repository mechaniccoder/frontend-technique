const slider = document.querySelector(".slider");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    slider.style.transform = "translate(-20%)";
});

slider.addEventListener("transitionend", () => {
    slider.appendChild(slider.firstElementChild);
    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(() => {
        slider.style.transition = "all 0.5s";
    });
});
