// botões
const btnSeeMoreBombom = document.querySelector(".btn-see-more-bombom");
const btnSeeMoreEnrolado = document.querySelector(".btn-see-more-enrolado");
const btnSeeMoreBolacha = document.querySelector(".btn-see-more-bolacha");

const btnCloseBombom = document.querySelector("#btn-close-bombom");
const btnCloseEnrolado = document.querySelector("#btn-close-enrolado");
const btnCloseBolacha = document.querySelector("#btn-close-bolacha");

const btnCloseModalCart = document.querySelector("#btn-close-modal-cart");
const btnOrder = document.querySelectorAll(".btn-order");

// toast special
const toastSpecial = document.querySelector(".news-container");

// detalhes --sabores--
const detailsBombom = document.querySelector(".details-bombom");
const detailsEnrolado = document.querySelector(".details-enrolados");
const detailsBolacha = document.querySelector(".details-bolacha");

const detailsAll = document.getElementsByClassName("details-flavors");

// carrinho (escolha seu doce)
const modalCartContainer = document.querySelector(".modal-cart-content");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

// máscara
const mask = document.querySelector(".mask");

// calcular automaticamente o ano para copyright
const copyrightText = document.querySelector("#copyright");

const getDate = new Date();
copyrightText.textContent = `Copyright© ${getDate.getFullYear()} | Todos os direitos reservados.`;
