import { createProductDetails } from "./components/createHtml/productDetailsHtml.js";
import { productsUrl } from "./settings/api.js";
import userMessages from "./components/commons/userMessages.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const detailsUrl = productsUrl + "/" + id;

(async function() {

    try {
        const response = await fetch(detailsUrl);

        const result = await response.json();

        createProductDetails(result);

    } catch (error) {
        userMessages("error", "Unfortunately, we couldn't load products. Please try again later.", ".products-container");
    }

})();