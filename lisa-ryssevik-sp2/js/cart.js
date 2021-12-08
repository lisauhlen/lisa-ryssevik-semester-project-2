import { getCartList } from "./components/commons/localStorage.js";
import { imageBaseUrl } from "./settings/api.js";
import { calculateTotal } from "./components/commons/calculateTotal.js";
import { shippingPrice } from "./settings/settings.js";

const cartContent = getCartList();

const cartContainer = document.querySelector(".cart-container");

console.log(cartContent.length);

if(cartContent.length === 0) {
    cartContainer.innerHTML = "You have no products in your cart.";
} else {

    createCartHtml(cartContent);

    function createCartHtml(product) {
        const priceContainer = document.querySelector(".price-container");

        let defaultPrice = [];

        cartContainer.innerHTML = "";

        product.forEach(function (product) {

            cartContainer.innerHTML += `<img src="${imageBaseUrl}${product.name}.jpg" alt="${product.name} ${product.category}">
                                        <p>${product.name}</p>
                                        <p>${product.price}</p>
                                        `;

            defaultPrice.push(product.price);
            
        });

        const totalPrice = defaultPrice.reduce(calculateTotal);

        priceContainer.innerHTML += `<p>Products: Kr. ${totalPrice},-</p>
                                    <p>Shipping: Kr. ${shippingPrice},-</p>
                                    <p>Total: Kr. ${totalPrice + shippingPrice},-</p>`;
    };

}

