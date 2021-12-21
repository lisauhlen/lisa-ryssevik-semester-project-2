import { displayCartIcon } from "./components/createHtml/cartIcon.js";
import { getToken } from "./components/commons/localStorage.js";
import { activateAddForm } from "./components/admin/adminAddProduct.js";
import { getSelectProducts } from "./components/admin/setFormValues.js";
import { activateEditForm } from "./components/admin/adminEditProduct.js";

displayCartIcon();

const token = getToken();

if(token.length === 0) {
    location.href = "adminLogin.html";
} 

activateAddForm();

getSelectProducts();

activateEditForm();