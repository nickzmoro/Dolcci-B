// abrir modal cart

// fechar modal cart
btnCloseModalCart.addEventListener("click", () => {
    modalCartContainer.style.visibility = "hidden";
    modalCartContainer.style.opacity = 0;
    mask.style.visibility = "hidden";
})

btnOrder.forEach((button) => {
    button.addEventListener("click", () => {
        modalCartContainer.style.visibility = "visible";
        modalCartContainer.style.opacity = 1;
        mask.style.visibility = "visible";
    });
});