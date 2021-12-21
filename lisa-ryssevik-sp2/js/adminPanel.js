import { displayCartIcon } from "./components/createHtml/cartIcon.js";
import { getToken } from "./components/commons/localStorage.js";
import { activateAddForm } from "./components/admin/adminAddProduct.js";
import { getSelectProducts } from "./components/admin/setFormValues.js";
import { activateEditForm } from "./components/admin/adminEditProduct.js";

displayCartIcon();


// Checking if the user has logged in, redirecting to login page if not

const token = getToken();

if(token.length === 0) {
    location.href = "adminLogin.html";
} 

// Displaying the "Add Products" form 
activateAddForm();


// Displaying the product selection dropdown
getSelectProducts();


// Displaying the submit button to load the "Edit Products" form
activateEditForm();