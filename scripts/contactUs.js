// contactUs.js
// import { loadHTML } from "./load.js";
// import { loadHTML } from "../scripts/load.js";


// import { loadLocationAndTime } from "../components/header.js";

// To resolve GitHub deployed link
// loadHTML("header", "../components/header.html");
// loadHTML("footer", "../components/footer.html");
// loadHTML("header", "/components/header.html");
// loadHTML("footer", "/components/footer.html");

setTimeout(() => {
  loadLocationAndTime();
}, 10);

let city = "";
let country = "";
let timezone = "";

export async function loadLocationAndTime() {
  const locationEl = document.querySelector(".current-location");
  const timeEl = document.querySelector(".current-time");

  try {
    const res = await fetch("https://geoapi.info/api/geo");
    const data = await res.json();

    const city = data.location.city || "";
    const country = data.location.country || "";
    const timezone = data.location.timezone;

    if (locationEl) {
      locationEl.textContent = city || country
        ? `📍${city}, ${country}`
        : "📍Location unavailable";
    }

    if (!timezone) throw new Error("No timezone");

    const timeRes = await fetch(
      `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`
    );
    const timeData = await timeRes.json();

    let currentTime = new Date(
      timeData.year,
      timeData.month - 1,
      timeData.day,
      timeData.hour,
      timeData.minute,
      timeData.seconds
    );

    setInterval(() => {
      currentTime.setSeconds(currentTime.getSeconds() + 1);

      let hour = currentTime.getHours();
      const minute = String(currentTime.getMinutes()).padStart(2, "0");
      const second = String(currentTime.getSeconds()).padStart(2, "0");

      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12 || 12;

      if (timeEl) {
        timeEl.textContent = `🕑${String(hour).padStart(2, "0")}:${minute}:${second} ${ampm}`;
      }
    }, 1000);

  } catch (err) {
    if (locationEl) locationEl.textContent = "📍Location unavailable";
    if (timeEl) timeEl.textContent = "🕑--:--:--";
  }
}


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