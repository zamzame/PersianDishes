# PersianDishes

🔶Purpose of the App🔶

This web application is designed to help users explore and cook traditional Persian dishes in a simple and accessible way. 
It provides structured recipes with clear ingredients, step-by-step instructions, and preparation details, 
making it easy for users to discover new meals or recreate authentic flavors at home.

🔶Target Audience🔶

The app is intended for anyone interested in Persian cuisine, including beginners who want simple guidance, home cooks 
looking for authentic recipes, and food enthusiasts exploring new cultural dishes. 
It is especially useful for users who prefer a clean, organized, and easy-to-navigate recipe experience.

🔶Data Mapping🔶

🔹name              –-> Name of the dish
🔹description       –-> Short summary of the dish
🔹type              –-> Category (e.g., Stew, Rice, Kebab, Soup)
🔹serving           –-> Number of servings
🔹photo             –-> Image photo for the dish
🔹alt               –-> Alternative text for accessibility
🔹ingredients       –-> Array of ingredient objects
🔹ingredients.value –-> Ingredient description
🔹instructions      –-> Array of instruction steps
🔹instructions.value–-> Step description
🔹preparationTime   –-> Time needed for preparation
🔹cookingTime       –-> Cooking duration
🔹time              –-> Total time
🔹region            –-> Origin of the dish


                                            🔷 Challenges and Solutions 🔷 

🐞 Make a card clickable                                            
    => using click event and encodeURIComponent                              
🐞 Pass a parameter to the next page  
    => using encodeURIComponent() and URLSearchParams(window.location.search)                              

🐞 GitHub deployment bug      
    => I think handle it. I should push and deploy it to see the result.                                       
        🔹Still persist, should be for the path in header and footer
            => It hasn't been resolved yet. I recoverd it for now.  
        It resolved: I refactored the structure by using fixed header and footer instead of the dynamic one.
        So, I handled the path based on the page.
    
🐞 Search bar filtering display bug (just for some single result)                                
    => I handled it by css modification
🐞 Scrolling only in one column (both of them in one section)in ContactUs page                                 
    => Not yet

