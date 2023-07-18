let tasks = [];
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');


function addTask() {
    let taskContent = taskInput.value.trim();
  if (taskContent === '') {
    alert("No task given!");
  } else {
    tasks.push({
      id: Date.now(),
      name: taskContent,
      isCompleted: false
    });
    taskInput.value = '';
    renderTasks();
  }
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
}

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    const taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.checked = task.isCompleted;

    taskCheckBox.addEventListener('click', () => {
      task.isCompleted = !task.isCompleted;
      renderTasks();
    });

    const taskText = document.createElement('span');
    taskText.textContent = task.name;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTask(task.id);
    });

    taskItem.appendChild(taskCheckBox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  });
}

addTaskBtn.addEventListener('click', addTask);

renderTasks();
