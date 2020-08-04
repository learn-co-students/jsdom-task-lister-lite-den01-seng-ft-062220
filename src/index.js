
const $taskForm = document.getElementById('create-task-form');
const $taskList = document.getElementById('tasks');

addPriorityInput();

$taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const $newTaskDescription = document.getElementById('new-task-description');
  createNewTask($newTaskDescription.value);

});

function createNewTask(taskDescription) {
  const $newTask = document.createElement('li');
  
  $newTask.textContent = taskDescription;
  addPriority($newTask);
  addButton($newTask);

  $taskList.append($newTask);
}

function addPriority($newTask) {
  const newTaskPriority = document.getElementById('new-task-priority').value;

  switch(newTaskPriority)  {
    case 'High':
      $newTask.style.color = 'red';
      break;
    case 'Medium':
      $newTask.style.color = 'yellow';
      break;
    case 'Low':
      $newTask.style.color = 'green';
      break;        
  }
}

function addButton($newTask) {
  const $button = document.createElement('button');

  $button.textContent = 'remove';
  $button.addEventListener('click', function(event) {
    $taskList.removeChild($newTask);
  });

  $newTask.append($button);
}

function addPriorityInput() {
  const $submitButton = document.getElementById('submit-button');
  const $priorityDropdown = document.createElement('select');

  $priorityDropdown.id = 'new-task-priority';
  $priorityDropdown.name = 'priority';

  addOptions($priorityDropdown);

  $taskForm.insertBefore($priorityDropdown, $submitButton);
}

function addOptions($priorityDropdown) {
  const priorities = ['High', 'Medium', 'Low'];
  const $priorities = priorities.map(priorityElement);

  $priorities.forEach($priority => {
    $priorityDropdown.append($priority);
  });
}

function priorityElement(priority) {
  const $option = document.createElement('option');

  $option.value = priority;
  $option.innerText = priority;

  return $option;
}