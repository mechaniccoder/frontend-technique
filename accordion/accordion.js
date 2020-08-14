const textButton = document.querySelectorAll("main button");

for (var i = 0; i < textButton.length; i++) {
    textButton[i].addEventListener("click", showMeText);

    function showMeText() {
        this.classList.toggle("active");
        const textDiv = this.nextElementSibling;
        if (textDiv.style.maxHeight) {
            textDiv.style.maxHeight = null;
        } else {
            textDiv.style.maxHeight = textDiv.scrollHeight + "px";
        }
    }
}
