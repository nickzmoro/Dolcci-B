// fechar modal cart
btnCloseModalCart.addEventListener("click", () => {
    modalCartContainer.style.visibility = "hidden";
    modalCartContainer.style.opacity = 0;
    mask.style.visibility = "hidden";
})

// abrir modal cart
btnOrder.forEach((button) => {
    button.addEventListener("click", () => {
        modalCartContainer.style.visibility = "visible";
        modalCartContainer.style.opacity = 1;
        mask.style.visibility = "visible";
    });
});
//

let cart = [];

//
modalCartContainer.addEventListener("click", (event) => {
    let parentButton = event.target.closest(".add-to-cart-btn")

    if (parentButton) {
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        // adicionar no carrinho
        addCart(name, price)
    }
})

// função para adicionar ao carrinho
function addCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if(existingItem){
        // se o item já existe, aumenta apenas a quantidade (+1)
        existingItem.quantity += 1;
    } else {
       cart.push({
        name,
        price,
        quantity: 1
       })
    }

    updateCart()
}

// função para apenas atualizar o carrinho
function updateCart() {
    cartItemsContainer.innerHTML = `
        <div>
            <strong>Resumo do pedido:</strong>
        </div>
    `
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");

        cartItemElement.innerHTML = `
            <div class="resume-info">
                <div>
                    <p>${item.quantity}x ${item.name}</p>
                </div>
                <button class="remove-from-cart-btn" data-name="${item.name}">
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </div>
        `

        total += item.price * item.quantity;

        cartItemsContainer.appendChild(cartItemElement);
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// função para remover o item do carrinho
cartItemsContainer.addEventListener("click", (event) => {
    let parentButtonRemove = event.target.closest(".remove-from-cart-btn")

    if(parentButtonRemove){
        const name = parentButtonRemove.getAttribute("data-name")

        removeItemCart(name);
    }
})

function removeItemCart(name) {
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        const item = cart[index];

        if(item.quantity > 1){
            item.quantity -= 1;
            updateCart()
            return;
        }

        cart.splice(index, 1);
        updateCart()
    }
}

// finalizar pedido (enviar pedido via API do Whatsapp)
checkoutBtn.addEventListener("click", () => {

    const cartItems = cart.map(item => {
        return (
            `${item.quantity}x ${item.name} (R$ ${(item.price).toFixed(2)}) || `
        )
    }).join("")

    const message = encodeURIComponent(cartItems)
    const phone = "14988057026"

    window.open(`https://wa.me/${phone}?text=Olá, segue meu pedido: ${message} Valor Total: ${cartTotal.textContent}`, "_blank")

})