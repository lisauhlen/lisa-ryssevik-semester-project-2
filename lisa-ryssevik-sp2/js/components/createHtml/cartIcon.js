import { getCartList } from "../commons/localStorage.js";

const cartContainer = document.querySelector(".cart-icon-container");


// Displaying the cart icon

export function displayCartIcon() {
    cartContainer.innerHTML = `<a href="cart.html">
                                    <img src="images/cart.svg" alt="Cart icon" class="cart-icon">
                                    <div class="quantity-container"></div>
                                </a>`;

    cartQuantity();
}


// Displaying the number of items the cart contains

export function cartQuantity() {

    const quantityContainer = document.querySelector(".quantity-container");

    const cartContent = getCartList();

    quantityContainer.innerHTML = cartContent.length;

}
