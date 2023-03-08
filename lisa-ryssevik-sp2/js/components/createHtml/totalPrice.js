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

    priceContainer.innerHTML += `<div class="totalprice-details">
                                    <p>Products:</p> 
                                    <p>Kr. ${totalPrice},-</p>
                                </div>
                                <div class="totalprice-details">
                                    <p>Shipping:</p> 
                                    <p>Kr. ${shippingPrice},-</p>
                                </div>
                                <div class="totalprice-details fw-bold">
                                    <p>Total:</p>
                                    <p>Kr. ${totalPrice + shippingPrice},-</p>
                                </div>
                                <button type="button" class="btn btn-primary btn-wide">To Checkout</button>`;

};