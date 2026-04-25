// main.js
// import { loadHTML } from "./load.js";
import { loadHTML } from "../scripts/load.js";

import { loadLocationAndTime } from "../components/header.js";

//To resolve GitHub deployed link
loadHTML("header", "../components/header.html");
loadHTML("footer", "../components/footer.html");
// loadHTML("header", "components/header.html");
// loadHTML("footer", "components/footer.html");

setTimeout(() => {
  loadLocationAndTime();
}, 10);

let myGalleries = [];

// export let mySelectedDish;

fetch("https://zamzame.github.io/PersianDishes/Data/dishes.json")
// fetch("../Data/dishes.json")
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

    dishCard.addEventListener("click", () => {
      const name = encodeURIComponent(gallery.name);
      window.location.href = `pages/dishRecipe.html?name=${name}`;
      // window.location.href = `../pages/dishRecipe.html?name=${name}`;      
    });
   
    const dishImg = document.createElement("figure");
    dishImg.className = "dishImg";
    dishImg.classList.add("dishImg");
    dishCard.appendChild(dishImg);
 
    const imgSrc = document.createElement("img");
    imgSrc.src = gallery.photo;    
    // imgSrc.src = "../"+ gallery.photo;
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

    const dishDesc = document.createElement("p");
    dishDesc.textContent = gallery.description;
    dishDesc.className = "desc";
    dishDetails.appendChild(dishDesc);

    const badge = document.createElement("section");
    badge.className = "badge";
    badge.classList.add("badge");
    dishDetails.appendChild(badge);

    const timeBadge = document.createElement("span");
    timeBadge.textContent = "🕑" + gallery.time;
    timeBadge.className = "timeBadge";
    badge.appendChild(timeBadge);

    const servingBadge = document.createElement("span");
    servingBadge.textContent = "👥" + gallery.serving + " servings";
    servingBadge.className = "servingBadge";
    badge.appendChild(servingBadge);

    dishesGallery.appendChild(dishCard);
  });
}      

//Search handling
  
const searchInput=document.querySelector(".inputSearch");

searchInput.addEventListener("input", ()=> {

  const searchValue=searchInput.value.trim().toLowerCase();

  if(searchValue){
    const filteredDishes=myGalleries.filter(gallery=>
      gallery.name.toLowerCase().includes(searchValue) ||
      gallery.type.toLowerCase().includes(searchValue) 
    );
    console.log("filteredDishes01:", filteredDishes);
    console.log("searchValue:", searchValue);

    displayDishGalleries(filteredDishes);

    if(filteredDishes.length===0){

      const notFoundMsg= document.createElement("h4");
      notFoundMsg.textContent="No dishes found matching your search."; 
      notFoundMsg.className= "notFoundMsg";
      dishesGallery.appendChild(notFoundMsg);

      console.log("notFoundMsg:", notFoundMsg);
      console.log("filteredDishes:", filteredDishes);

      console.log("filteredDishes01.length:", filteredDishes.length);      
      console.log("filteredDishes02.length:", filteredDishes.length);
      // notFoundMsg.textContent="No dishes found matching your search."; 
    }

    // displayDishGalleries(filteredDishes);
  }
  else{
    displayDishGalleries(myGalleries)
  }

});

function CreateNotFoundMsg(){
  const dishCard = document.createElement("article");
  dishCard.className = "dishCard";
  dishCard.classList.add("dishCard");
  
  const notFoundMsg = document.createElement("h4");
  notFoundMsg.className = "notFoundMsg";
  notFoundMsg.classList.add("notFoundMsg");
  dishCard.appendChild(notFoundMsg);
}
