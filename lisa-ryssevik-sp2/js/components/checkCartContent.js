import { getCartList } from "./commons/localStorage.js";
import { createCartHtml } from "../cart.js";
import { calculateTotalPrice } from "./createHtml/totalPrice.js";


// Displaying message if cart is empty, or calling create html function if the cart's got content

export function checkCartContent() {

    const cartContainer = document.querySelector(".cart-container");
    const emptyCartContainer = document.querySelector(".empty-cart-container");

    const cartContent = getCartList();

    if(cartContent.length === 0) {

        cartContainer.innerHTML = "";

        emptyCartContainer.innerHTML = `<div class="empty-cart-message">
                                        <p>You have no products in your cart.</p>
                                        <a href="products.html" class="btn btn-primary">To the Store</a>
                                    </div>`;
        calculateTotalPrice([]);
    } else {
        createCartHtml(cartContent);
    }
}