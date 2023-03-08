// Creating html to display all products with link to the product details page

export function createProducts(products){
    const productsContainer = document.querySelector(".products-container");

    let productsToRender = products;

    productsContainer.innerHTML = "";

    function renderProducts() {
        productsToRender.forEach(function (product) {

            productsContainer.innerHTML += `<a href="productDetails.html?id=${product.id}" class="product-div">
                                                <div class="card bg-dark text-white" style="background-image: url(${product.imgUrl})">
                                                    <div class="card-img-overlay">
                                                        <h3 class="card-title">${product.name}</h3>
                                                        <p class="card-text">${product.category}</p>
                                                        <p class="price card-text">Kr. ${product.price},-</p>
                                                    </div>
                                                </div>
                                            </a>`;

        });
    }
    renderProducts();
};
