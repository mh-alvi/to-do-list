const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const taskInputValue = taskInput.value.trim();

  if (taskInputValue !== "") {
    const taskListUl = document.getElementById("taskList");
    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox">
        ${taskInputValue}
        <button class="delete-button" onclick="deleteTask(this)">Delete</button><br><br>
      `;

    taskListUl.appendChild(li);
    taskInput.value = ""; // Clear the input after adding the task
  } else {
    alert("Please add a task");
  }
};

// Function to delete a task
const deleteTask = (button) => {
  const li = button.parentElement;
  li.remove();
};

const checkTaskDeleted = () => {
  const taskList = document.getElementById("taskList");
  const CheckBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  CheckBoxes.forEach((checkbox) => {
    const li = checkbox.parentElement;
    li.remove();
  });
};
