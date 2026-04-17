import { loadHTML } from "./load.js";

loadHTML("header", "../components/header.html");
loadHTML("footer", "../components/footer.html");

let recipeInfo = [];

fetch("https://zamzame.github.io/PersianDishes/Data/dishes.json")
  .then(res => res.json())
  .then(galleries => {
    recipeInfo = galleries;
    displayDishGalleries(galleries);
  });

const recipePage = document.querySelector(".myDishRecipe");

function displayDishGalleries(galleries) {
//   recipePage.innerHTML = '';

  recipeInfo.forEach((gallery) => {
    const myDishImg = document.createElement("section");
    myDishImg.className = "myDishImg";
    myDishImg.classList.add("myDishImg");
    myDishRecipe.appendChild(myDishImg);

    const imgSrc = document.createElement("img");
    imgSrc.src = recipeInfo.photo;
    imgSrc.alt = recipeInfo.alt;
    imgSrc.loading = "lazy";
    myDishImg.appendChild(imgSrc);

    const recipe = document.createElement("section");
    recipe.className = "recipe";
    recipe.classList.add("recipe");

    const dishType = document.createElement("span");
    dishType.className = "dishType";
    dishType.textContent = recipeInfo.type;
    recipe.appendChild(dishType);

    const name = document.createElement("h2");
    name.textContent = recipeInfo.name;
    name.className = "recipeTitle";
    recipe.appendChild(recipeTitle);

    const recipeDesc = document.createElement("p");
    recipeDesc.textContent = recipeInfo.description;
    recipeDesc.className = "recipeDesc";
    recipe.appendChild(recipeDesc);

    const badge = document.createElement("section");
    badge.className = "badge";
    badge.classList.add("badge");
    recipe.appendChild(badge);

    const prepTimeBadge = document.createElement("span");
    prepTimeBadge.textContent = "🕑" + recipeInfo.preparationTime;
    prepTimeBadge.className = "prepTimeBadge";
    badge.appendChild(prepTimeBadge);

    const cookTimeBadge = document.createElement("span");
    cookTimeBadge.textContent = "🕑" + recipeInfo.cookingTime;
    cookTimeBadge.className = "cookTimeBadge";
    badge.appendChild(cookTimeBadge);

    const servingBadge = document.createElement("span");
    servingBadge.textContent = "👥" + recipeInfo.serving;
    servingBadge.className = "servingBadge";
    badge.appendChild(servingBadge);
    
    const ingrdn = document.createElement("section");
    ingrdn.className = "ingrdn";
    ingrdn.classList.add("ingrdn");
    recipe.appendChild(ingrdn);

    const ingrdnTitle = document.createElement("h2");
    ingrdnTitle.textContent = "Ingredients";
    ingrdnTitle.className = "ingrdnTitle";
    ingrdnTitle.classList.add("ingrdnTitle");
    ingrdn.appendChild(ingrdnTitle);

    const ingrdnList = document.createElement("ul");
    ingrdnList.className = "ingrdnList";
    ingrdnList.classList.add("ingrdnList");
    ingrdn.appendChild(ingrdnList);

    const ingrdnItem= document.createElement("li");
    ingrdnItem.textContent = recipeInfo.ingredients;
    ingrdnItem.className = "ingrdnItem";
    ingrdnList.appendChild(ingrdnItem);

    const instruct = document.createElement("section");
    instruct.className = "instruct";
    instruct.classList.add("instruct");
    recipe.appendChild(instruct);

    const instructTitle = document.createElement("h2");
    instructTitle.textContent = "Instructions";
    instructTitle.className = "instructTitle";
    instructTitle.classList.add("instructTitle");
    instruct.appendChild(instructTitle);

    const instructList = document.createElement("ul");
    instructList.className = "instructList";
    instructList.classList.add("instructList");
    instruct.appendChild(instructList);

    const instructItem= document.createElement("li");
    instructItem.textContent = recipeInfo.instructions;
    instructItem.className = "instructItem";
    instructList.appendChild(instructItem);

    const enjoy = document.createElement("h2");
    enjoy.textContent = "Enjoy your meal!";
    enjoy.className = "enjoy";
    recipe.appendChild(enjoy);

    recipe.appendChild(dishCard);
  });
}

