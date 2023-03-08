import { saveProduct, getCartList } from "../commons/localStorage.js";
import { cartQuantity } from "./cartIcon.js";

// Getting the cart list from local storage

const cartList = getCartList();


// Creating html for the product details page 

export function createProductDetails(product){

    document.title = product.name + " | Joyaux Jewelry";
    document.querySelector(".breadcrumb-item.active").innerHTML = product.name;

    const detailsContainer = document.querySelector(".details-container");
    
    detailsContainer.innerHTML = "";

    detailsContainer.innerHTML += `<div class="row product-details">
                                      <div  class="col-sm-6">
                                        <img src="${product.imgUrl}" class="img-fluid" alt="The ${product.name} ${product.category} from Joyaux Jewelry">
                                      </div>
                                      <div class="col-sm-6 product-text">
                                        <h1>${product.name}</h1>
                                        <p class="product-category">${product.category}</p>
                                        <p>${product.description}</p>
                                        <p class="price">Kr. ${product.price},-</p>
                                        <div class="cart-message-container">
                                          <button type="button" class="btn btn-primary cart-button">Add to Cart</button>
                                        </div>
                                      </div>
                                    </div>`;
  
    
    // Adding click function to Add to cart button, updating the cart icon, and displaying success message
    const cartMessage = document.querySelector(".cart-message-container");
    const cartButton = document.querySelector(".cart-button");

    cartButton.addEventListener("click", function() {
        addToCart(product);
        cartQuantity();
        cartMessage.innerHTML = `<div class="cart-message">
                                  <p>Product was successfully added to <a href="cart.html">cart</a>.</p> 
                                  <a href="products.html">Continue shopping</a>
                                </div>`;
      });

};


// Checking if product is already in cart - if not, adding it to cart

function addToCart(product) {
  
    const productId = product.id;
  
    const itemInCart = cartList.reduce((inCart, item) => {
      if (item.id === productId) {
        inCart = true;
      }
      return inCart;
    }, false);
  
    if (!itemInCart) {
      cartList.push(product);
      saveProduct(cartList);
    }
  }

