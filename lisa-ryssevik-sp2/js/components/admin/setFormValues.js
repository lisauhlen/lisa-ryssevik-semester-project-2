import { productsUrl } from "../../settings/api.js";
import userMessages from "../commons/userMessages.js";
import deleteButton from "./deleteButton.js";

const productsForm = document.querySelector("#select-products-form");
const productsDropdown = document.querySelector(".products-dropdown");

const messageContainer = document.querySelector(".edit-message-container");
const form = document.querySelector("#edit-product");
const productName = document.querySelector("#edit-name");
const category = document.querySelector("#edit-category");
const price = document.querySelector("#edit-price");
const description = document.querySelector("#edit-description");
const imageUrl = document.querySelector("#edit-image");
const featured = document.querySelector("#edit-featured");
const idInput = document.querySelector("#edit-id");

// Make a selection dropdown with all products 

export async function getSelectProducts() {

    try {
        const response = await fetch(productsUrl);

        const result = await response.json();

        selectProducts(result);

    } catch (error) {
        userMessages("error", "Unfortunately, we couldn't load products. Please try again later.", ".edit-message-container");
    }

}


function selectProducts(products) {

    productsDropdown.innerHTML = "";

    products.forEach(function (product) {
    
        productsDropdown.innerHTML += `<option value="${product.id}">${product.name}</option>`;
        });
};


// Get product id

productsForm.addEventListener("submit", getProductId);
    
function getProductId(event) {
    event.preventDefault();

    const id = productsDropdown.value;

    messageContainer.innerHTML = "";

    populateForm(id);
}

// Populating the form

async function populateForm(id) {

    const editUrl = productsUrl + "/" + id;

    try {
        const response = await fetch(editUrl);
        const result = await response.json();

        productName.value = result.name;
        category.value = result.category;
        price.value = result.price;
        description.value = result.description;
        imageUrl.value = result.imgUrl;
        featured.value = result.featured;
        idInput.value = result.id;

        deleteButton(result.id);

    } catch(error) {
        userMessages("error", "Unfortunately, we couldn't get the product. Please try again later.", ".edit-message-container");
    } finally {
        form.style.display = "block";
    }
};