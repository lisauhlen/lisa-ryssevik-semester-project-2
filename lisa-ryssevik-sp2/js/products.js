import { createProducts } from "./components/createHtml/productsHtml.js";
import { productsUrl } from "./settings/api.js";
import userMessages from "./components/commons/userMessages.js";
import { searchProducts } from "./components/commons/searchProducts.js"
import { displayCartIcon } from "./components/createHtml/cartIcon.js";

displayCartIcon();

(async function() {

    try {
        const response = await fetch(productsUrl);

        const result = await response.json();

        createProducts(result);
        searchProducts(result);

    } catch (error) {
        userMessages("error", "Unfortunately, we couldn't load products. Please try again later.", ".products-container");
    }

})();