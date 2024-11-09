let itemList = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  const container = document.getElementById("task-list");
  container.innerHTML = ""; 

  itemList.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = "flex justify-between items-center p-3 border-b font-bold";

    const taskContent = document.createElement("span");
    taskContent.textContent = task.text;

    if (task.completed) taskContent.classList.add("line-through", "text-red-900");

    const buttonGroup = document.createElement("div");
    buttonGroup.innerHTML = `
       <button class="bg-green-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-green-600 focus:outline-none" onclick="toggleComplete(${index})">✔️</button>
      <button class="bg-yellow-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-yellow-600 focus:outline-none" onclick="editTask(${index})">✏️</button>
      <button class="bg-red-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none" onclick="deleteTask(${index})">🗑️</button>
    `;

    listItem.appendChild(taskContent);
    listItem.appendChild(buttonGroup);
    container.appendChild(listItem);
  });
  localStorage.setItem("tasks", JSON.stringify(itemList));
}

function addTask() {
  const taskInputField = document.getElementById("new-task");
  const taskInputText = taskInputField.value.trim();

  if (taskInputText !== "") {
    itemList.push({ text: taskInputText, completed: false });
    taskInputField.value = "";
    displayTasks();
  }
}

function toggleComplete(index) {
  itemList[index].completed = !itemList[index].completed;
  displayTasks(); 
}

function editTask(index) {
  const editedText = prompt("Edit task:", itemList[index].text);
  if (editedText !== null && editedText.trim() !== "") {
    itemList[index].text = editedText.trim();
    displayTasks();
  }
}

function deleteTask(index) {
  itemList.splice(index, 1);
  displayTasks();
}

window.onload = displayTasks;
