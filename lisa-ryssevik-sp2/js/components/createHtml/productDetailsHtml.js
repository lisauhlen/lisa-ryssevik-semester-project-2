import { saveProduct, getCartList } from "../commons/localStorage.js";
import { cartQuantity } from "./cartIcon.js";

// Getting the cart list from local storage

const cartList = getCartList();


// Creating html for the product details page 

export function createProductDetails(product){

    document.title = product.name + " | Joyaux Jewelry";
    document.querySelector("h1").innerHTML = product.name;

    const detailsContainer = document.querySelector(".details-container");
    const cartButton = document.querySelector(".cart-button");
    const cartLink = document.querySelector(".cart-link");
    
    detailsContainer.innerHTML = "";

    detailsContainer.innerHTML += `<div>
                                        <img src="${product.imgUrl}" alt="The ${product.name} ${product.category} from Joyaux Jewelry">
                                        <p>${product.name}</p>
                                        <p>${product.category}</p>
                                        <p>${product.description}</p>
                                        <p class="author">Kr. ${product.price},-</p>
                                    </div>`;
    
    
    // Adding click function to Add to cart button, updating the cart icon, and displaying success message
    cartButton.addEventListener("click", function() {
        addToCart(product);
        cartQuantity();
        cartButton.innerHTML = "Successfully Added to Cart!";
        cartLink.style.display = "block";
      });

};


// Checking if product is already in cart - if not, adding it to cart

function addToCart(product) {
  
    const currentProductId = product.id;
  
    const itemInCart = cartList.reduce((isFound, item) => {
      if (item.id === currentProductId) {
        isFound = true;
      }
      return isFound;
    }, false);
    console.log('itemInCart', itemInCart);
  
    if (!itemInCart) {
      console.log('PRODUCT NOT IN CART, ADD IT');
      cartList.push(product);
      saveProduct(cartList);
    }
  }

