import { checkCartContent } from "../checkCartContent.js";
import { saveProduct, getCartList } from "../commons/localStorage.js"


// Selecting all the trash can icons and adding click functions

export function trashCanHtml() {

    const removeButton = document.querySelectorAll(".trash-can");

    removeButton.forEach(function(button) {
        button.addEventListener("click", removeFromCart);
    })
}


// Removing chosen item from cart, updating local storage and html

function removeFromCart(event) {

    const cartContent = getCartList();
    const removeThisProduct = parseInt(event.target.dataset.item)

    const newCartList = cartContent.filter(function(item) {
        if(removeThisProduct !== item.id) {
            return true;
        }
    })

    saveProduct(newCartList);
    checkCartContent();
}

