import { productsUrl } from "../../settings/api.js";
import userMessages from "../commons/userMessages.js";
import deleteButton from "./deleteButton.js";
import { activateEditImageUpload } from "./editUploadedImage.js";

const productsForm = document.querySelector("#select-products-form");
const productsDropdown = document.querySelector(".products-dropdown");

const messageContainer = document.querySelector(".edit-message-container");
const productHeading = document.querySelector("#edit-heading");
const form = document.querySelector(".edit-section");
const productName = document.querySelector("#edit-name");
const category = document.querySelector("#edit-category");
const price = document.querySelector("#edit-price");
const description = document.querySelector("#edit-description");
const imageUrl = document.querySelector("#edit-image");
const featured = document.querySelector("#edit-featured");
const idInput = document.querySelector("#edit-id");


// Getting all products from the API

export async function getSelectProducts() {
    try {
        const response = await fetch(productsUrl);

        const result = await response.json();

        selectProducts(result);

    } catch (error) {
        userMessages("error", "Unfortunately, we couldn't load products. Please try again later.", ".edit-message-container");
    }
}


// Making a selection dropdown containing all products 

function selectProducts(products) {

    productsDropdown.innerHTML = "";

    products.forEach(function (product) {
    
        productsDropdown.innerHTML += `<option value="${product.id}">${product.name}</option>`;
        });
};


// Get the chosen product's id

productsForm.addEventListener("submit", getProductId);
    
function getProductId(event) {
    event.preventDefault();

    const id = productsDropdown.value;

    messageContainer.innerHTML = "";

    populateForm(id);
}


// Filling the form with the chosen product's info and activating the image upload form

async function populateForm(id) {

    const editUrl = productsUrl + "/" + id;

    try {
        const response = await fetch(editUrl);
        const result = await response.json();

        productHeading.innerHTML = result.name;

        productName.value = result.name;
        category.value = result.category;
        price.value = result.price;
        description.value = result.description;
        imageUrl.value = result.imgUrl;
        featured.value = result.featured;
        idInput.value = result.id;

        activateEditImageUpload();

        deleteButton(result.id);

    } catch(error) {
        userMessages("error", "Unfortunately, we couldn't get the product. Please try again later.", ".edit-message-container");
    } finally {
        form.style.display = "block";
    }
};