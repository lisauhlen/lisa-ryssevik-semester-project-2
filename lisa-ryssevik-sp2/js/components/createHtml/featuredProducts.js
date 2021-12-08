import { createProducts } from "./productsHtml.js";

const featuredItems = [];

export function featuredProducts(products){

    products.forEach(function(product) {

        if(product.featured === true) {

            const featuredList = product;
    
            featuredItems.push(featuredList);
        }

    });

    createProducts(featuredItems);

};