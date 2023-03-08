import { productsUrl } from "./../../settings/api.js";
import userMessages from "../commons/userMessages.js";
import { getToken, getImgURL } from "../commons/localStorage.js";
import { getSelectProducts } from "./setFormValues.js";
import { validateAdminForm } from "./validateAdminForms.js";
import { editImgKey } from "../../settings/settings.js";

const messageContainer = document.querySelector(".edit-message-container");
const form = document.querySelector("#edit-product");
const productName = document.querySelector("#edit-name");
const category = document.querySelector("#edit-category");
const price = document.querySelector("#edit-price");
const description = document.querySelector("#edit-description");
const imageUrl = document.querySelector("#edit-image");
const featured = document.querySelector("#edit-featured");
const idInput = document.querySelector("#edit-id");

// Form is populated with product details and the upload image form is activated in setFormValues.js


// Activating the form's submit function

export function activateEditForm() {
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
    let imageUrlValue = imageUrl.value.trim();
    const featuredValue = featured.value;
    const idValue = idInput.value;

    if(getImgURL(editImgKey)) {
        imageUrlValue = getImgURL(editImgKey);
    }

    const validate = validateAdminForm(messageContainer.className, productNameValue, categoryValue, priceValue, descriptionValue, imageUrlValue, featuredValue);

    if(validate) {
        updateProduct(productNameValue, categoryValue, priceValue, descriptionValue, imageUrlValue, featuredValue, idValue);
    }

};


// Updating product with PUT request to API

async function updateProduct(name, category, price, description, imgUrl, featured, id) {

    const editUrl = productsUrl + "/" + id;

    const data = JSON.stringify({name: name, category: category, price: price, description: description, imgUrl: imgUrl, featured: featured});

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
            userMessages("success", `Product was successfully updated. <a href="products.html">Visit the products page.</a>`, ".edit-message-container");
            getSelectProducts();
            localStorage.removeItem(editImgKey);
        }

        if(result.error) {
            userMessages("error", "Unfortunately, we couldn't update product. Please try again later.", ".edit-message-container");
        }

    } catch(error) {
        userMessages("error", "Unfortunately, an error occurred. Please try again later.", ".edit-message-container");
    }

}