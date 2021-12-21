import { calculateTotal } from "../commons/calculateTotal.js";
import { shippingPrice } from "../../settings/settings.js";


// Calculating the total price of all products in cart

export function calculateTotalPrice(defaultPrice) {

    const priceContainer = document.querySelector(".price-container");

    if(defaultPrice.length === 0) {
        return priceContainer.innerHTML = "";
    }

    const totalPrice = defaultPrice.reduce(calculateTotal);

    displayTotalPrice(priceContainer, totalPrice);
}


// Displaying the total price of all products in cart

function displayTotalPrice(priceContainer, totalPrice) {  

    priceContainer.innerHTML = "";

    priceContainer.innerHTML += `<p>Products: Kr. ${totalPrice},-</p>
                                <p>Shipping: Kr. ${shippingPrice},-</p>
                                <p>Total: Kr. ${totalPrice + shippingPrice},-</p>`;

};