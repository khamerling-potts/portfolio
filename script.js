const readmore1 = document.getElementById('readmore1');
readmore1.addEventListener("click", function(){
    const project1 = document.getElementsByClassName('project1')[0];
    const description = document.createElement('p');
    description.innerHTML = "<a class='projectLink' href=https://khamerling-potts.github.io/08-todo-javascript/>Open 'To Do List' app</a> <br><br>This project utilizes Javascript to create an interactive to do list. The user can add items, delete items, and mark items as complete. This project was also a great exercise in interactive CSS styling."
    project1.appendChild(description);
    readmore1.style.display = "none";
});

