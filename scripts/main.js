import { loadHTML } from "./load.js";


loadHTML("header", "components/header.html");
loadHTML("footer", "components/footer.html");

let myGalleries = [];

fetch("https://zamzame.github.io/PersianDishes/Data/dishes.json")
  .then(res => res.json())
  .then(galleries => {
    myGalleries = galleries;
    displayDishGalleries(myGalleries);
  });

const dishesGallery = document.querySelector(".dishes");

function displayDishGalleries(myGalleries) {
  dishesGallery.innerHTML = '';

  myGalleries.forEach((gallery) => {

    const dishCard = document.createElement("article");
    dishCard.className = "dishCard";
    dishCard.classList.add("dishCard");

    const dishImg = document.createElement("figure");
    dishImg.className = "dishImg";
    dishImg.classList.add("dishImg");
    dishCard.appendChild(dishImg);
 
    const imgSrc = document.createElement("img");
    imgSrc.src = gallery.photo;
    imgSrc.alt = gallery.alt;
    imgSrc.loading = "lazy";
    dishImg.appendChild(imgSrc);

    const dishDetails = document.createElement("section");
    dishDetails.className = "dishDetails";
    dishDetails.classList.add("dishDetails");
    dishCard.appendChild(dishDetails);

    const dishTitle = document.createElement("section");
    dishTitle.className = "dishTitle";
    dishTitle.classList.add("dishTitle");
    dishDetails.appendChild(dishTitle);

    const name = document.createElement("h3");
    name.textContent = gallery.name;
    name.className = "name";
    dishTitle.appendChild(name);

    const type = document.createElement("span");
    type.className = "dishType";
    type.textContent = gallery.type;
    dishTitle.appendChild(type);

    const desc = document.createElement("p");
    desc.textContent = gallery.description;
    desc.className = "desc";
    dishDetails.appendChild(desc);

    const badge = document.createElement("section");
    badge.className = "badge";
    badge.classList.add("badge");
    dishDetails.appendChild(badge);

    const timeBadge = document.createElement("span");
    timeBadge.textContent = "🕑" + gallery.time;
    timeBadge.className = "timeBadge";
    badge.appendChild(timeBadge);

    const servingBadge = document.createElement("span");
    servingBadge.textContent = "👥" + gallery.serving;
    servingBadge.className = "servingBadge";
    badge.appendChild(servingBadge);

    // const btn = document.createElement("button");
    // btn.type = "button";
    // btn.className = "cardBtn";
    // btn.textContent = "See Recipe";
    // dishCard.appendChild(btn);

    dishesGallery.appendChild(dishCard);
  });
}