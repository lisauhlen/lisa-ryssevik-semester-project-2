import { createProducts } from "./productsHtml.js";

const featuredItems = [];

// Getting all the featured products and displaying them on the home page

export function featuredProducts(products){

    products.forEach(function(product) {

        if(product.featured === true) {

            const featuredList = product;
    
            featuredItems.push(featuredList);
        }

    });

    createProducts(featuredItems);

};