// Creating html to display all products with link to the product details page

export function createProducts(products){
    const productsContainer = document.querySelector(".products-container");

    let productsToRender = products;

    productsContainer.innerHTML = "";

    function renderProducts() {
        productsToRender.forEach(function (product) {

            productsContainer.innerHTML += `<a href="productDetails.html?id=${product.id}" class="product-div">
                                                <img src="${product.imgUrl}" alt="The ${product.name} ${product.category} from Joyaux Jewelry">
                                                <p>${product.name}</p>
                                                <p>${product.category}</p>
                                                <p class="author">Kr. ${product.price},-</p>
                                            </a>`;

        });
    }
    renderProducts();
};
