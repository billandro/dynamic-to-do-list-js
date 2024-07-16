document.addEventListener("DOMContentLoaded", function() {
   // Select the add button, task input and task list
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Check if local storage is not empty
    function loadTasks() {
        // Retreive data from local storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || "[]");
        
        // Log retieved tasks to the console
        console.log(storedTasks);

        // Loop through stored tasks and add each to the webpage
        storedTasks.forEach(function(taskText) {
            addTask(taskText, false);
        });
    }

    // Function to add a task
    function addTask(taskText = null, save = true) {
        // if taskText is not ptrovided, retrieve task input value
        if (taskText === null) {
            taskText = taskInput.value.trim();
        }
        
        if (taskText === "") {
            alert("Please enter a task");
            return;
        } else {
            const listElement = document.createElement("li");
            listElement.textContent = taskText;

            const buttonElement = document.createElement("button");
            buttonElement.textContent = "Remove";
            buttonElement.classList.add("remove-btn");

            // Remove list element from list on click
            buttonElement.onclick = function(event) {
                const taskCard = event.target.parentNode;
                const unoderedL = taskCard.parentNode;

                // Remove specific li element from ul element
                unoderedL.removeChild(taskCard);

                // Remove task from local storage
                let storedTasks = JSON.parse(localStorage.getItem("tasks"));
                storedTasks = storedTasks.filter(storedTask => storedTask !== taskText);
                console.log(storedTasks);
                localStorage.setItem("tasks", JSON.stringify(storedTasks));
            };

            // Append button element to the li element
            listElement.appendChild(buttonElement);

            // Append the li element to the ul element
            taskList.appendChild(listElement);

            // Clear task input field
            taskInput.value = "";
        }

        if (save) {
            let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // When the add task button is clicked add task
    addButton.addEventListener('click', () => addTask());

    // When enter key is pressed add task
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    document.addEventListener("DOMContentLoaded", addTask);

    loadTasks();
});