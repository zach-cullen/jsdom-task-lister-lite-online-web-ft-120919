document.addEventListener("DOMContentLoaded", () => {
  // confirm dom is loaded
  console.log('DOM fully loaded and parsed')

  // select form for creating new tasks
  let createTaskForm = document.querySelector('#create-task-form');

  // select task list ul
  const taskUl = document.querySelector('#tasks');

  createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // select the text in the new task form input field
    let newTaskDescription = document.querySelector('#new-task-description').value;

    // create text node using captured input value
    let newTaskText = document.createTextNode(newTaskDescription);

    // create a li 
    let newTaskLi = document.createElement('li');

    // append li to taskUl
    taskUl.appendChild(newTaskLi);

    // add text to li
    newTaskLi.appendChild(newTaskText);

    // clear form inputs and reset
    createTaskForm.reset();
  });

});
