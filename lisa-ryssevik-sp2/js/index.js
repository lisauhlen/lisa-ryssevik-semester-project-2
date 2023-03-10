import { productsUrl } from "./settings/api.js";
import { featuredProducts } from "./components/createHtml/featuredProducts.js";
import userMessages from "./components/commons/userMessages.js";
import { displayCartIcon } from "./components/createHtml/cartIcon.js";

// Displaying the cart icon 

displayCartIcon();


// Getting all products from the API

(async function() {

    try {
        const response = await fetch(productsUrl);

        const result = await response.json();

        featuredProducts(result);

    } catch (error) {
        userMessages("error", "Unfortunately, we couldn't load products. Please try again later.", ".products-container");
    }

})();