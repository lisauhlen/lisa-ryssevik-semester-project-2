import { getCartList } from "./commons/localStorage.js";
import { createCartHtml } from "../cart.js";
import { calculateTotalPrice } from "./createHtml/totalPrice.js";

export function checkCartContent() {

    const cartContainer = document.querySelector(".cart-container");

    const cartContent = getCartList();

    if(cartContent.length === 0) {
        cartContainer.innerHTML = `<p>You have no products in your cart.</p><a href="products.html">Find your new favourite pieces here!</a>`;
        calculateTotalPrice([]);
    } else {
        createCartHtml(cartContent);
    }
}