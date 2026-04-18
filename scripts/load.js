export function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// loadHTML("header", "components/header.html");
// loadHTML("footer", "components/footer.html");

// export function formatTime(data) {
//   let hour = data.hour;
//   const minute = data.minute.toString().padStart(2, "0");
//   const second = data.seconds.toString().padStart(2, "0");

//   const ampm = hour >= 12 ? "PM" : "AM";

//   hour = hour % 12;
//   hour = hour === 0 ? 12 : hour; // handle 0 → 12

//   return `${hour.toString().padStart(2, "0")}:${minute}:${second} ${ampm}`;
// }