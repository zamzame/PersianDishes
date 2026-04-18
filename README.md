# PersianDishes

This web application is useful for people who love Persian dishes and want a simple way to cook and enjoy them.
It provides recipes for popular Persian dishes.

                                             🔷 Steps (Issues) 🔷   
🔶 Setup Initial
    🔹creating repo
    🔹sketching the page structure

🔶 Setup Data
    🔹Creating the data requirement for the web page
    🔹Preparing the required images

🔶 Setup Code
    🔹file structures
    🔹link html and css files to js 
     🐞While deploying this step commits on GitHub, I encountered an Issue.
        It built successfully, but for the deloped link, it said that there is submodule under the current repo.
        I resolved the submodule repo by updating the files from local. Deplyment done, but refered to 404.
        the reason was in loading code for the extra "/". I changed it to
        loadHTML("header", "/components/header.html");' to 'loadHTML("header", "components/header.html");

🔶 Create Main Page
    🔹Header: Name, Current time, Current Location, Navigation bar (Home, Contact Us)
    🔹Footer: Page Description, About Us, Contact Us
    🔹Search Bar
    🔹Dishes Gallery
    🔹Ensure the design being responsive

🔶 Create Recipe Page 
    🔹The same header & Footer
    🔹Dish's Photo
    🔹Ingredients
    🔹Instructions
    🔹Ensure the design being responsive

🔶 UI Dishes' Gallery
    🔹Map dishes' data to an array and render cards to DOM

🔶 Logic Search
    🔹Create an event listener for real-time searching

🔶 Create Contact Page
    🔹The same header & footer
    🔹Receive users name, email, message
    🔹Show the page's contact information: email, phone, location
    🔹Handling input validation
    🔹Ensure the design being responsive

🔶 Integration
    🔹Fetch data from an external API: Current Time and Location
    🔹Display in Widget

🔶 Documentation
    🔹Complete ReadMe with "Challenges and Solutions"
    🔹Connect commits with GitHub Issues

                                            🔷 Challenges and Solutions 🔷 

🐞 Make a card clickable                => using click event and encodeURIComponent                              
🐞 Pass a parameter to the next page 
🐞 

