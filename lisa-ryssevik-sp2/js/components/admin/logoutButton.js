import { removeItemFromStorage } from "../commons/localStorage.js";
import { tokenKey, userKey } from "../../settings/settings.js";

const button = document.querySelector("#logout");

button.onclick = function() {
    const doLogout = confirm("Are you sure you want to logout?");

    if(doLogout) {
        removeItemFromStorage(tokenKey);
        removeItemFromStorage(userKey);

        location.href = "index.html";

    }
}