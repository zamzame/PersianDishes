import { loadHTML } from "./load.js";

import { loadLocationAndTime } from "../components/header.js";

loadHTML("header", "../components/header.html");
loadHTML("footer", "../components/footer.html");

setTimeout(() => {
  loadLocationAndTime();
}, 300);

let myGalleries = [];

// export let mySelectedDish;

fetch("https://zamzame.github.io/PersianDishes/Data/dishes.json")
  .then(res => res.json())
  .then(galleries => {
    myGalleries = galleries;
    displayDishGalleries(myGalleries);
  });
//Prev fetching
// fetch("https://zamzame.github.io/PersianDishes/Data/dishes.json")
//   .then(res => res.json())
//   .then(galleries => {
//     myGalleries = galleries;

//     displayDishGalleries(myGalleries);
//   }); 

//Omitted
// export const selectedDishCard = document.querySelector(".dishLink");
// console.log("selectedDishCard(Dish Link):", selectedDishCard)
// selectedDishCard.addEventListener("click", ()=>{
//     const dishName=selectedDishCard.name.value;
//     mySelectedDish = galleries.find(dish=>{
//       return dish.name.toLowerCase()===dishName.toLowerCase();
//     });
// });

// const dishCard = document.createElement("article");
// dishCard.addEventListener("click", () => {
//   const name = encodeURIComponent(gallery.name);
//   window.location.href = `pages/dishRecipe.html?name=${name}`;
// });

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
    });
   

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
    servingBadge.textContent = "👥" + gallery.serving;
    servingBadge.className = "servingBadge";
    badge.appendChild(servingBadge);

    dishesGallery.appendChild(dishCard);
  });
}      

//Search handling
  
const searchInput=document.querySelector("#inputSearch");

searchInput.addEventListener("input", ()=> {

  const searchValue=searchInput.value.trim().toLowerCase();
  if(searchValue.length!=0){
    const filteredGalleries=myGalleries.filter(gallery=>
      gallery.name.toLowerCase().includes(searchValue) ||
      gallery.type.toLowerCase().includes(searchValue) 
    );

    const notFound=document.querySelector(".not-found-message");

    if(filteredGalleries.length===0){
      notFound.textContent="No dishes found matching your search.";
    }
    else{
      notFound.textContent="";
      displayDishGalleries(filteredGalleries);
    }

  }
  else{
    displayDishGalleries(myGalleries)
  }
  });
