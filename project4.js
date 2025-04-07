const btnEl = document.querySelector(".btn")
btnEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setproperty("--xPos", x + "px");
    btnEl.style.setproperty("--yPos", y + "px");
});