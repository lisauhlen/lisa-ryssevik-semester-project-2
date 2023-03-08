import userMessages from "../commons/userMessages.js";
import { productsUrl } from "../../settings/api.js";
import { getToken, getImgURL } from "../commons/localStorage.js";
import { getSelectProducts } from "./setFormValues.js";
import { validateAdminForm } from "./validateAdminForms.js";
import { imgKey } from "../../settings/settings.js";

const form = document.querySelector("#add-product");
const uploadForm = document.querySelector("#upload-form");
const imageContainer = document.querySelector("#add-image-container");
const productName = document.querySelector("#add-name");
const category = document.querySelector("#add-category");
const price = document.querySelector("#add-price");
const description = document.querySelector("#add-description");
const featured = document.querySelector("#add-featured");
const messageContainer = document.querySelector(".add-message-container");


// Activating the form's submit function

export function activateAddForm() {
    form.addEventListener("submit", submitForm);
}


// Getting and validating all the form values

function submitForm(event) {
    event.preventDefault();

    messageContainer.innerHTML = "";

    const productNameValue = productName.value.trim();
    const categoryValue = category.value;
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imgURL = getImgURL(imgKey);
    const featuredValue = featured.value;

    const validate = validateAdminForm(messageContainer.className, productNameValue, categoryValue, priceValue, descriptionValue, imgURL, featuredValue);

    if(validate) {
        addproduct(productNameValue, categoryValue, priceValue, descriptionValue, imgURL, featuredValue);
    }
    
}


// Sending the new product with POST request to API

async function addproduct(name, category, price, description, imgURL, featured) {

    const data = JSON.stringify({name: name, category: category, price: price, description: description, imgUrl: imgURL, featured: featured});

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(productsUrl, options);
        
        const result = await response.json();

        if(result.created_at) {
            userMessages("success", `Product was successfully added to store. <a href="products.html">Visit the products page.</a>`, ".add-message-container");
            form.reset();
            uploadForm.reset();
            imageContainer.innerHTML = "";
            getSelectProducts();
            localStorage.removeItem(imgKey);
        }

        if(result.error) {
            userMessages("error", "Couldn't add product to store. Please try again later.", ".add-message-container");
        }
        
    } catch(error) {
        userMessages("error", "An error occurred, please try again later.", ".add-message-container");
    }
}