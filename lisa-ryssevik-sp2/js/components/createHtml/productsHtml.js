import { imageBaseUrl } from "../../settings/api.js";

export function createProducts(products){
    const productsContainer = document.querySelector(".products-container");

    productsContainer.innerHTML = "";

    products.forEach(function (product) {
    
        productsContainer.innerHTML += `<a href="productDetails.html?id=${product.id}" class="product-div">
                                            <img src="${imageBaseUrl}${product.name}.jpg">
                                            <p>${product.name}</p>
                                            <p>${product.category}</p>
                                            <p class="author">Kr. ${product.price},-</p>
                                        </a>`;
        
        
        
        });

};