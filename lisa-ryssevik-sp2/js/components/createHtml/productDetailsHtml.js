import { imageBaseUrl } from "../../settings/api.js";
import { saveProduct, getCartList } from "../commons/localStorage.js";

const cartList = getCartList();

export function createProductDetails(product){

    document.title = product.name + " | Joyaux Jewelry";
    document.querySelector("h1").innerHTML = product.name;

    const detailsContainer = document.querySelector(".details-container");
    const cartButton = document.querySelector(".cart-button");
    const cartLink = document.querySelector(".cart-link");
    
    detailsContainer.innerHTML = "";

    detailsContainer.innerHTML += `<div>
                                        <img src="${imageBaseUrl}${product.name}.jpg">
                                        <p>${product.name}</p>
                                        <p>${product.category}</p>
                                        <p>${product.description}</p>
                                        <p class="author">Kr. ${product.price},-</p>
                                    </div>`;
    
    cartButton.addEventListener("click", function() {
        addToCart(product)
        cartButton.innerHTML = "Successfully Added to Cart!";
        cartLink.style.display = "block";
      });

};

function addToCart(product) {
    // const cartLink = document.querySelector('.cart-link');
  
    const currentProductId = product.id;
  
    // This reduces values down to one result, being the 'isFound' parameter
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
  
    // cartButton.innerHTML = 'Successfully Added to Cart!';
    // cartLink.style.display = 'block';
  }


  
// function addToCart(product) {

//     for(let i = 0; i < cartList.length; i++) {
//         console.log(cartList[i].id);

//         if(product.id === cartList[i].id) {
//             console.log("Ids are the same");
//         } else {
//             cartList.push(product);
//             saveToStorage(cartList);
//         }

//     }
    
// }