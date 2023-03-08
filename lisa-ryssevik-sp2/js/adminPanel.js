import { getToken, getUsername } from "./components/commons/localStorage.js";
import { activateImageUpload } from "./components/admin/uploadImage.js";
import { activateAddForm } from "./components/admin/adminAddProduct.js";
import { getSelectProducts } from "./components/admin/setFormValues.js";
import { activateEditForm } from "./components/admin/adminEditProduct.js";


// Checking if the user has logged in, redirecting to login page if not

const token = getToken();

if(token.length === 0) {
    location.href = "adminLogin.html";
} 


// Welcoming the user by username

const username = document.querySelector(".username");

username.innerHTML = "Welcome, " + getUsername() + "!";


// Activating the Image Upload form 
activateImageUpload();


// Displaying the "Add Products" form 
activateAddForm();


// Displaying the product selection dropdown
getSelectProducts();


// Displaying the submit button to load the "Edit Products" form
activateEditForm();