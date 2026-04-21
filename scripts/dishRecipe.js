import { loadHTML } from "./load.js";

import { loadLocationAndTime } from "../components/header.js";

//To resolve GitHub deployed link
// loadHTML("header", "../components/header.html");
// loadHTML("footer", "../components/footer.html");
loadHTML("header", "/components/header.html");
loadHTML("footer", "/components/footer.html");

setTimeout(() => {
  loadLocationAndTime();
}, 10);

const params = new URLSearchParams(window.location.search);
const dishName = params.get("name")?.trim().toLowerCase();
console.log("dishName: ", dishName);

let recipeInfo = [];

fetch("https://zamzame.github.io/PersianDishes/Data/dishes.json")
  .then(res => res.json())
  .then(galleries => {

    // console.log("recipeInfo: ", recipeInfo);
    const selectedDish = galleries.find(dish=>
      // console.log("dishName: ", dishName);
      dish.name.trim().toLowerCase() === dishName
      // console.log("dish.name.trim().toLowerCase: ", dish.name);
    );
    
    if (selectedDish){

      displayDishGallery(selectedDish)
    }
    else{
      recipePage.innerHTML = 'Recipe Not Found';
    }
    console.log("selectedDish", selectedDish);
    console.log("ingredients", selectedDish.ingredients.name);
  });

const recipePage = document.querySelector(".myDishRecipe");

function displayDishGallery(recipeInfo) {
    recipePage.innerHTML = '';

    const myDishImg = document.createElement("section");
    myDishImg.className = "myDishImg";
    myDishImg.classList.add("myDishImg");
    recipePage.appendChild(myDishImg);

    const imgSrc = document.createElement("img");
    imgSrc.src = "../" + recipeInfo.photo;
    imgSrc.alt = "../" + recipeInfo.alt;
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
    recipe.appendChild(name);

    const recipeDesc = document.createElement("p");
    recipeDesc.textContent = recipeInfo.description;
    recipeDesc.className = "recipeDesc";
    recipe.appendChild(recipeDesc);

    const dishBadge = document.createElement("section");
    dishBadge.className = "dishBadge";
    dishBadge.classList.add("dishBadge");
    recipe.appendChild(dishBadge);
    
    //prepTime
    const prepBadge = document.createElement("section");
    prepBadge.className = "prepBadge";
    prepBadge.classList.add("prepBadge");
    dishBadge.appendChild(prepBadge);

    const emojip = document.createElement("span");
    emojip.textContent = "🕑";
    emojip.className = "emojip";
    prepBadge.appendChild(emojip);

    const lblp = document.createElement("span");
    lblp.textContent = "Prep Time";
    lblp.className = "lblp";
    prepBadge.appendChild(lblp);

    const prepTime = document.createElement("span");
    prepTime.textContent = recipeInfo.preparationTime;
    prepTime.className = "prepTime";
    prepBadge.appendChild(prepTime);

    //cookTime
    const cookBadge = document.createElement("section");
    cookBadge.className = "cookBadge";
    cookBadge.classList.add("cookBadge");
    dishBadge.appendChild(cookBadge);

    const emojic = document.createElement("span");
    emojic.textContent = "👩‍🍳";
    emojic.className = "emojic";
    cookBadge.appendChild(emojic);

    const lblc = document.createElement("span");
    lblc.textContent = "Cook Time";
    lblc.className = "lblc";
    cookBadge.appendChild(lblc);

    const cookTime = document.createElement("span");
    cookTime.textContent = recipeInfo.cookingTime;
    cookTime.className = "cookTime";
    cookBadge.appendChild(cookTime);

    //servTime 
    const servBadge = document.createElement("section");
    servBadge.className = "servBadge";
    servBadge.classList.add("servBadge");
    dishBadge.appendChild(servBadge);

    const emojis = document.createElement("span");
    emojis.textContent = "👥";
    emojis.className = "emojis";
    servBadge.appendChild(emojis);

    const lbls = document.createElement("span");
    lbls.textContent = "Servings";
    lbls.className = "lbls";
    servBadge.appendChild(lbls);

    const serving = document.createElement("span");
    serving.textContent = recipeInfo.serving;
    serving.className = "serving";
    servBadge.appendChild(serving);
    
    //End

    
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

    console.log("recipeInfo: ", recipeInfo );
    recipeInfo.ingredients.forEach(element => {
      const ingrdnItem= document.createElement("li");
      ingrdnItem.textContent = element.value;
      ingrdnItem.className = "ingrdnItem";
      ingrdnList.appendChild(ingrdnItem);      
    });


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

    recipeInfo.instructions.forEach(element=>{
      const instructItem= document.createElement("li");
      instructItem.textContent = element.value;
      instructItem.className = "instructItem";
      instructList.appendChild(instructItem);
    });

    const enjoy = document.createElement("h2");
    enjoy.textContent = "Enjoy your meal!❤️";
    enjoy.className = "enjoy";
    recipe.appendChild(enjoy);

    recipePage.appendChild(recipe);
  
}

