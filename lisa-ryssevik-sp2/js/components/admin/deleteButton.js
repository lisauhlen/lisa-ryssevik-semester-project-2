import { productsUrl } from "../../settings/api.js";
import { getToken } from "../commons/localStorage.js";
import { getSelectProducts } from "./setFormValues.js";
import userMessages from "../commons/userMessages.js";

const form = document.querySelector("#edit-product");

// Deleting product from API with DELETE request

export default function deleteButton(id) {
    const deleteContainer = document.querySelector(".delete-button-container");

    deleteContainer.innerHTML = `<button type="button" class="delete-button">Delete Product from Store</button>`;

    const button = document.querySelector(".delete-button");

    button.onclick = async function() {
        const confirmDeletion = confirm("Are you sure you want to delete this product from the store?");

        if(confirmDeletion) {
            const deletUrl = productsUrl + "/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            };

            try {
                const response = await fetch(deletUrl, options);
                const result = await response.json();

                if(result.updated_at) {
                    userMessages("success", "Product was deleted from store.", ".edit-message-container");
                }

                if(result.error) {
                    userMessages("error", "Unfortunately, we couldn't delete product. Please try again later.", ".edit-message-container");
                }

            } catch(error) {
                userMessages("error", "Unfortunately, an error occurred. Please try again later.", ".edit-message-container");
            } 
            finally {
                form.style.display = "none";
                getSelectProducts();
            }
        }
    }
}