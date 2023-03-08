import { removeItemFromStorage } from "../commons/localStorage.js";
import { tokenKey, userKey } from "../../settings/settings.js";


// Button to log out from Admin Panel and remove login info from local storage

const button = document.querySelector("#logout");

button.onclick = function() {
    const doLogout = confirm("Are you sure you want to logout?");

    if(doLogout) {
        removeItemFromStorage(tokenKey);
        removeItemFromStorage(userKey);

        location.href = "index.html";

    }
}