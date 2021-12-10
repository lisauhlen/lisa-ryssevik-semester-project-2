import { createProducts } from "../createHtml/productsHtml.js";

export function searchProducts(products) {

    const search = document.querySelector(".search-products");

    search.onkeyup = function(event) {

        let productsToFilter = products;

        const searchValue = event.target.value.trim().toLowerCase();
    
        const filteredProducts = productsToFilter.filter(function(product) {
            
            if(product.name.toLowerCase().startsWith(searchValue) || product.category.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        })
        createProducts(filteredProducts);
    }


}

