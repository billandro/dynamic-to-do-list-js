document.addEventListener("DOMContentLoaded", function() {
    // Retreive the add button, task input and task list
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input").value.trim();
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        // Retreive the task input value
        const taskText = document.getElementById("task-input").value.trim();
        
        if (taskText == "") {
            alert("Please enter a task please:");
        } else {
            const listElement = document.createElement("li");
            listElement.textContent = taskText;

            const buttonElement = document.createElement("button");
            buttonElement.textContent = "Remove";
            buttonElement.classList.add("remove-btn");

            // Remove list element from list onlclick
            buttonElement.onclick = function(event) {
                const parent = event.target.parentElement;
                const unoderedL = parent.parentElement;

                // Remove specific li element from ul element
                unoderedL.removeChild(parent);
            };

            // Append button element to the li element
            listElement.appendChild(buttonElement);
            // Append the li element to the ul element
            taskList.appendChild(listElement);

            // Clear task input field
            taskInput.value = "";
        }
    }

    // When the add task button is clicked add task
    addButton.addEventListener('click', addTask);

    // When enter key is pressed add task
    taskInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    document.addEventListener("DOMContentLoaded", addTask);
});