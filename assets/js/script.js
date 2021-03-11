


// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")



//event listeners
if( document.readyState !== 'loading' ) {
    getTodos();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        getTodos();
    });
}


todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


//functions
function addTodo(event) {
    event.preventDefault(); //prevent form from submitting
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create list

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // add todo to local storage

    saveLocalTodos(todoInput.value);

    //check  button

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash button

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append list

    todoList.appendChild(todoDiv);

    //clear to do input value

    todoInput.value =" ";
}

function deleteCheck(e) {
    const item = e.target;

    //delete the todo

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;

        //animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitioned", function () {
            todo.remove()

        });

    }

    //check if the todo is completed

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";

                } else {
                    todo.style.display = "none";
                }
                break;
            case "to-be-completed":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";

                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}


//local storage
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// get back the items from local storage
function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo) {
        // todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //create list
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        //check  button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //append list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
 
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoindex = todo.children[0].innerText;
    todo.splice(todos.indexOf(todoindex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}


let getQuote = function() {
    let quoteAPI = `https://quote-garden.herokuapp.com/api/v3/quotes`;


    fetch(quoteAPI)
        .then(function (response) {
            return response.json()}).then(function (data) {
                console.log(data)
                let index = Math.floor(Math.random() * data.data.length);
                document.getElementById("quote").textContent = data.data[index].quoteText;
                document.getElementById("author").textContent = data.data[index].quoteAuthor

            });
}
getQuote()

let triviaAPI= function (){

    let triviaAPI ='https://uselessfacts.jsph.pl/random.json?language=en';
    fetch(triviaAPI)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

     document.getElementById('trivia').textContent = data.text;

      })
    }
    triviaAPI()
