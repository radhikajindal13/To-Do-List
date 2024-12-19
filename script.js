function addTask(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page

    // Get the task input value
    const taskInput = document.getElementById("item");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const addedPlace = document.querySelector(".added-task");

        // Create the task div
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        // Add the task text inside the task div
        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
        taskDiv.appendChild(taskContent);

        // Create a container for buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        // Create and set up the Edit button
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.type = "button";  // Set the type to button to prevent form submission
        editButton.classList.add("edit-btn");  // Use class for styling
        editButton.onclick = function () {
            taskInput.value = taskText; // Populate the input field with the task text to edit it
            taskDiv.remove(); // Remove the task (can be replaced by editing logic)
        };

        // Create and set up the Delete button
        const dltButton = document.createElement("button");
        dltButton.innerText = "Delete";
        dltButton.type = "button";  // Set the type to button to prevent form submission
        dltButton.classList.add("delete-btn");  // Use class for styling
        dltButton.onclick = function () {
            taskDiv.remove();  // Remove the task when clicked
        };

        // Append the Edit and Delete buttons to the button container
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(dltButton);

        // Append the button container to the task div
        taskDiv.appendChild(buttonContainer);

        // Append the task div (with buttons) to the added-task section
        addedPlace.appendChild(taskDiv);

        // Clear the input field after adding the task
        taskInput.value = "";
    }
}
