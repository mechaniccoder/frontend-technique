const boxes = document.querySelectorAll(".box");
const dragImg = document.querySelector("img");

boxes.forEach((box) => {
  box.addEventListener("dragenter", (e) => {
    console.log("drag enter");
    box.classList.add("hovered");
    // dragImg.classList.remove("invisible");
  });

  box.addEventListener("dragleave", () => {
    console.log("drag leave");
    box.classList.remove("hovered");
  });

  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("drag over");
  });

  box.addEventListener("drop", () => {
    console.log("drop");
    box.append(dragImg);
    box.classList.remove("hovered");
  });
});

dragImg.addEventListener(
  "dragstart",
  () => {
    dragImg.classList.add("hold");
    setTimeout(() => {
      dragImg.classList.add("invisible");
    }, 0);
  },
  false
);

dragImg.addEventListener(
  "dragend",
  (e) => {
    console.log("drag end");
    dragImg.classList.remove("invisible");
  },
  false
);

dragImg.addEventListener("drop", () => {
  console.log("img drop");
});
