import { uploadUrl, uploadPreset } from "../../settings/settings.js";
import { saveImgURL } from "../commons/localStorage.js";
import { editImgKey } from "../../settings/settings.js";
import userMessages from "../commons/userMessages.js";

const form = document.querySelector("#edit-upload-form");
const image = document.querySelector("#edit-upload-image");
const button = document.querySelector("#edit-upload-button");
const imageContainer = document.querySelector("#edit-image-container");


// Activating the image upload form

export function activateEditImageUpload() {
    form.addEventListener("submit", editUploadedImage);
}


// Uploading files to Cloudinary and saving the image url in local storage

function editUploadedImage(event) {
    event.preventDefault();

    const file = image.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    fetch(uploadUrl, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json()) 
        .then((data) => {
        if (data.secure_url !== '') {
            const uploadedFileUrl = data.secure_url;
            saveImgURL(editImgKey, uploadedFileUrl);

            if (data.url) {
                button.classList.add("btn-success");
                button.innerHTML = "Uploaded!";
                imageContainer.innerHTML = `<img src="${uploadedFileUrl}" class="img-fluid" alt="Preview of the uploaded image">
                                            <p>Image successfully uploaded!</p>`;
            }
        }
        
        })
        .catch(err => userMessages("error", `Couldn't upload photo: ${err}`, "#edit-image-container"));

}