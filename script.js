const readButtons = document.querySelectorAll('.readmore');
readButtons.forEach((button) => {
    button.addEventListener("click", showDescription);
});

function showDescription(event){
    const elementClicked = event.target;
    const project = document.getElementById(elementClicked.id.replace("readmore", "project"));
    const description = document.createElement('p');

    if (project.id === "project0"){
        description.innerHTML = "<a class='projectLink' href=https://khamerling-potts.github.io/10-weather-app/>Open Weather app</a> <br><br>This website is an interactive “weather app” that fetches current weather data from an API based on the user’s chosen location. The user can enter a city name, zip code, or use their current location to receive weather info. If the user selects their current location, another API is used to get their IP address and city before weather information is requested. Users are also able to refresh and delete individual locations that are displayed on the page.<br>*Please note there is a 50 call/day limit for the weather API. The app will not work if this amount is exceeded."
    }
    else if (project.id === "project1"){
        description.innerHTML = "<a class='projectLink' href=https://khamerling-potts.github.io/08-todo-javascript/>Open To Do List app</a> <br><br>This project utilizes JavaScript to create an interactive to do list. The user can add items, delete items, and mark items as complete. This project was also a great exercise in interactive CSS styling."
    }
    else if (project.id === "project2"){
        description.innerHTML = "<a class='projectLink' href=https://khamerling-potts.github.io/06-brand-redesign/>Open Craigslist Redesign page</a> <br><br>This page is a non-interactive mock-up of a potential new design for the Craigslist website, intended to be more visually appealing and intuitive."
    }
    else if (project.id === "project3"){
        description.innerHTML = "<a class='projectLink' href=https://khamerling-potts.github.io/07-image-gallery/>Open Image Gallery app</a> <br><br>This interactive image gallery allows users to expand images and navigate through the gallery one image at a time. This was another exercise to practice JavaScript, HTML and CSS."
    }
    else if (project.id === "project4"){
        description.innerHTML = "<a class='projectLink' href=https://khamerling-potts.github.io/05-instagram-clone/>Open Instagram Clone page</a> <br><br>This project uses HTML and CSS to create a visual 'clone' of the Instagram website."
    }
    
    project.appendChild(description);
    elementClicked.style.display = "none";
}

