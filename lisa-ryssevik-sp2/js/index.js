import { productsUrl } from "./settings/api.js";
import { featuredProducts } from "./components/createHtml/featuredProducts.js";
import userMessages from "./components/commons/userMessages.js";

(async function() {

    try {
        const response = await fetch(productsUrl);

        const result = await response.json();

        featuredProducts(result);

    } catch (error) {
        console.log(error);
        userMessages("error", "Unfortunately, we couldn't load products. Please try again later.", ".products-container");
    }

})();