// import { loadHTML } from "./load.js";
import { loadHTML } from "../scripts/load.js";


import { loadLocationAndTime } from "../components/header.js";

// To resolve GitHub deployed link
loadHTML("header", "../components/header.html");
loadHTML("footer", "../components/footer.html");
// loadHTML("header", "/components/header.html");
// loadHTML("footer", "/components/footer.html");

setTimeout(() => {
  loadLocationAndTime();
}, 10);

const contactForm = document.querySelector(".contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.querySelector(".name");
    const email = document.querySelector(".email");
    const message = document.querySelector(".message");

    // Input validation handling
    if (!name.value) {
        alert("Name is required");
        name.focus();
        return;
    } else if (!email.value) {
        alert("Email is required");
        email.focus();
        return;
    } else if (!message) {
        alert("Message is required");    
        message.focus();    
        return;
    }

    //Store input to the Local Storage
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("message: ", message);
    const formData = {
        nName:    name.value.trim().toLowerCase(),
        nEmail:   email.value.trim().toLowerCase(),
        nMessage: message.value.trim().toLowerCase()
    };

    
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    contactForm.reset();

    alert("Message saved successfully! We will review your message and let you know!");
    
    // contactForm.submit();
});