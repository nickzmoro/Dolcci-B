// veja mais (bombom) | fechar
btnSeeMoreBombom.addEventListener("click", () => {
  detailsBombom.style.visibility = "visible";
  detailsBombom.style.opacity = 1;
  mask.style.visibility = "visible";
});

btnCloseBombom.addEventListener("click", () => {
  detailsBombom.style.visibility = "hidden";
  detailsBombom.style.opacity = 0;
  mask.style.visibility = "hidden";
});

// veja mais (enroladinho) | fechar
btnSeeMoreEnrolado.addEventListener("click", () => {
  detailsEnrolado.style.visibility = "visible";
  detailsEnrolado.style.opacity = 1;
  mask.style.visibility = "visible";
});

btnCloseEnrolado.addEventListener("click", () => {
  detailsEnrolado.style.visibility = "hidden";
  detailsEnrolado.style.opacity = 0;
  mask.style.visibility = "hidden";
});

// veja mais (bolacha) | fechar
btnSeeMoreBolacha.addEventListener("click", () => {
  detailsBolacha.style.visibility = "visible";
  detailsBolacha.style.opacity = 1;
  mask.style.visibility = "visible";
});

btnCloseBolacha.addEventListener("click", () => {
  detailsBolacha.style.visibility = "hidden";
  detailsBolacha.style.opacity = 0;
  mask.style.visibility = "hidden";
});

// função para fechar toast special
const closeToast = () => {
  toastSpecial.style.display = "none";
};
