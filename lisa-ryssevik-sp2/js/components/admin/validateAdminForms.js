import { validateLength, validateURL } from "../commons/validateForm.js";
import userMessages from "../commons/userMessages.js";


// Validating the admin forms' values

export function validateAdminForm(messageContainer, productNameValue, categoryValue, priceValue, descriptionValue, imageUrlValue, featuredValue) {

    if(!validateLength(productNameValue, 2)) {
        return userMessages("error", "Product name must have at least two characters.", `.${messageContainer}`);
    }

    if(!categoryValue) {
        return userMessages("error", "Please choose a product category.", `.${messageContainer}`);
    }

    if(!priceValue || isNaN(priceValue)) {
        return userMessages("error", "Please enter the product price. Product price must be a number.", `.${messageContainer}`);
    }

    if(!validateLength(descriptionValue, 10)) {
        return userMessages("error", "Product description must have at least 10 characters.", `.${messageContainer}`);
    }

    if(!validateURL(imageUrlValue)) {
        return userMessages("error", "Please enter a valid image URL.", `.${messageContainer}`);
    }

    if(!featuredValue) {
        return userMessages("error", "Please mark if the product should be featured or not.", `.${messageContainer}`);
    }

    return true;

}

