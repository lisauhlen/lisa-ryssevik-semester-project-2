import { trashCanHtml } from "./components/createHtml/trashCan.js";
import { calculateTotalPrice } from "./components/createHtml/totalPrice.js"
import { checkCartContent } from "./components/checkCartContent.js";
import { saveProduct } from "./components/commons/localStorage.js";
import { displayCartIcon } from "./components/createHtml/cartIcon.js";

displayCartIcon();

const cartContainer = document.querySelector(".cart-container");

let productQuantity = {id: 0};


// Checking if the cart has content
checkCartContent();


// Creating html from the cart content
export function createCartHtml(product) {

    function productHtml(product) {
        cartContainer.innerHTML = "";

        let defaultPrice = [];

        product.forEach(function (product) {

            let productPrice = product.price * product.quantity;

            cartContainer.innerHTML += `<div>
                                            <a href="productDetails.html?id=${product.id}">
                                                <img src="${product.imgUrl}" alt="${product.name} ${product.category}">
                                                <p>${product.name}</p>
                                            </a>
                                            <div>
                                                <img src="images/arrow-down.svg" alt="arrow down" class="arrow-down" data-item="${product.id}">
                                                    <span>${product.quantity}</span>
                                                <img src="images/arrow-up.svg" alt="arrow up" class="arrow-up" data-item="${product.id}">
                                            </div>
                                            <p class="price-field">${productPrice}</p>
                                            <button type="button" class="trash-can" data-item="${product.id}">Remove</button>
                                        </div>
                                        `;

            // Displaying trash can icons, applying click function to arrows, and updating total price
            trashCanHtml();
            changeQuantity();

            defaultPrice.push(productPrice);
            calculateTotalPrice(defaultPrice);
        });
    // saveProduct(product);
    }
    productHtml(product);


    
// Allowing user to change the quantity of each product in the cart

    function changeQuantity() {
        
        const arrowUp = document.querySelectorAll(".arrow-up");
        const arrowDown = document.querySelectorAll(".arrow-down");

        arrowUp.forEach(function(arrow) {
            arrow.addEventListener("click", quantityUp);   
        })

        arrowDown.forEach(function(arrow) {
            arrow.addEventListener("click", quantityDown);   
        })
    }
        
    function quantityUp(event) {
        
        productQuantity.id = parseInt(event.target.dataset.item);

        for (let i = 0; i < product.length; i++) {

            if(product[i].id === productQuantity.id) {
                product[i].quantity = parseInt(product[i].quantity) + 1;
                saveProduct(product);
            }
        }
        productHtml(product);
    }

    function quantityDown(event) {

        productQuantity.id = parseInt(event.target.dataset.item);
        
        for (let i = 0; i < product.length; i++) {

            if(product[i].id === productQuantity.id) {
                product[i].quantity = parseInt(product[i].quantity) - 1;
                saveProduct(product);                
            }

            if(product[i].quantity < 1) {
                const newProductList = product.filter(function(item) {
                    if(product[i].id !== item.id) {
                        return true;
                    }
                })

                saveProduct(newProductList);
                return checkCartContent();

            }
        }
        
        productHtml(product);
    }

};
