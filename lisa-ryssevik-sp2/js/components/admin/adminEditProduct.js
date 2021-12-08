import { productsUrl } from "./../../settings/api.js";
import userMessages from "../commons/userMessages.js";
import { getToken } from "../commons/localStorage.js";
import { getSelectProducts } from "./editDeleteSection.js";

const messageContainer = document.querySelector(".edit-message-container");
const form = document.querySelector("#edit-product");
const productName = document.querySelector("#edit-name");
const category = document.querySelector("#edit-category");
const price = document.querySelector("#edit-price");
const description = document.querySelector("#edit-description");
const featured = document.querySelector("#edit-featured");
const idInput = document.querySelector("#edit-id");

getSelectProducts();



// Getting and validating all the form values

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    messageContainer.innerHTML = "";

    const productNameValue = productName.value.trim();
    const categoryValue = category.value;
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const featuredValue = featured.value;
    const idValue = idInput.value;

    if(productNameValue.length === 0 || !categoryValue || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || !featuredValue || idValue.length === 0) {
        return userMessages("error", "Please provide correct information.", ".edit-message-container");
    }

    updateProduct(productNameValue, categoryValue, priceValue, descriptionValue, featuredValue, idValue);
};

// Updating product 

async function updateProduct(name, category, price, description, featured, id) {

    const editUrl = productsUrl + "/" + id;

    const data = JSON.stringify({name: name, category: category, price: price, description: description, featured: featured});

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(editUrl, options);
        const result = await response.json();

        if(result.updated_at) {
            userMessages("success", "Product was successfully updated.", ".edit-message-container");
            getSelectProducts();
        }

        if(result.error) {
            userMessages("error", "Unfortunately, we couldn't update product. Please try again later.", ".edit-message-container");
        }

    } catch(error) {
        userMessages("error", "Unfortunately, an error occurred. Please try again later.", ".edit-message-container");
    }

}