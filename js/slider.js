(function() {
    const sliders = [...document.querySelectorAll(".testimony__body")];
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before")
    let value;

    buttonNext.addEventListener("click", () => {
        changePosition(1);
    });

    buttonBefore.addEventListener("click", () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector(".testimony__body--show").dataset.id;
        value = Number(currentTestimony);
        value+= add;
        sliders[Number(currentTestimony)-1].classList.remove("testimony__body--show");
        let totalSliders = sliders.length;
        if(value == totalSliders+1 || value == 0) {
            value = value == 0 ? totalSliders : 1;
        }

        sliders[value-1].classList.add("testimony__body--show");
    }
})();