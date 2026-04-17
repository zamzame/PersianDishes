export function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}


// loadHTML("header", "components/header.html");
// loadHTML("footer", "components/footer.html");


