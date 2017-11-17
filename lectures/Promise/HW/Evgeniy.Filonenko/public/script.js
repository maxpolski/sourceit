/* eslint-disable no-console */
const todoConteiner = document.getElementById('todoList');
const todoInput = document.getElementById('newTask');
const todoAddBtn = document.getElementById('addNewTask');
const todoLoadBtn = document.getElementById('loadTodos');

/**
 * Adds a new icon with an event.
 */
function addIcon(iconName, eventType, callback) {
  const iNode = document.createElement('I');
  const iName = iconName !== '' ? `fa-${iconName}` : 'fa-pencil';

  iNode.classList.add('fa');
  iNode.classList.add(iName);
  iNode.addEventListener(eventType, callback);
  return iNode;
}

/**
 * Edits the title and complit status on the server by task ID
 */
function editTaskOnServer(taskId, inputValue, isComplited) {
  const payload = {
    todo: {
      id: taskId,
      title: inputValue,
      isCompleted: isComplited,
    },
  };

  fetch('/todo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => {
      console.log('Edit Successefull');
    })
    .catch(error => console.error(error));
}

/**
 * Edits completed status
 */
function markAsDone(e) {
  const elem = e.target.parentNode;
  elem.classList.toggle('completed');

  const text = e.target.innerText;
  const data = elem.dataset;
  const isComplited = elem.classList.contains('completed') ? 1 : 0;
  editTaskOnServer(+data.id, text, isComplited);
}

/**
 * Edits the task in the DOM
 */
function editTask(e) {
  const liNode = e.target.parentNode;
  const inputNode = liNode.getElementsByTagName('input')[0];
  const liText = liNode.getElementsByTagName('span')[0].innerText;

  liNode.classList.add('edit');
  inputNode.value = liText;
  inputNode.focus();
}

/**
 * Removes a task from the DOM
 */
function removeTask(e) {
  const liNode = e.target.parentNode;
  liNode.parentNode.removeChild(liNode);
}

/**
 * Saves the edited task
 */
function saveTask(e) {
  if (e.key && e.key !== 'Enter') {
    return false;
  }

  const liNode = e.target.parentNode;
  const inputNode = liNode.getElementsByTagName('input')[0];
  const inputText = inputNode.value;

  if (inputText === '') {
    liNode.classList.add('error');
  } else {
    liNode.classList.remove('error');
    liNode.classList.remove('edit');

    const data = liNode.dataset;
    const isComplited = liNode.classList.contains('completed') ? 1 : 0;

    editTaskOnServer(+data.id, inputText, isComplited);

    inputNode.value = '';
    liNode.getElementsByTagName('span')[0].innerText = inputText;
  }
  return true;
}

/**
 * Adds a new task to the DOM
 */
function addNewTask(taskId, inputText, conteiner, complited = false) {
  const newLi = document.createElement('LI');
  const newInp = document.createElement('INPUT');
  const newSpan = document.createElement('SPAN');

  newLi.setAttribute('data-id', taskId);

  if (complited) {
    newLi.classList.add('completed');
  }

  newInp.addEventListener('keydown', saveTask);
  newSpan.innerText = inputText;
  newLi.appendChild(newSpan);
  newLi.appendChild(newInp);
  newLi.appendChild(addIcon('pencil', 'click', editTask));
  newLi.appendChild(addIcon('times', 'click', removeTask));
  newLi.appendChild(addIcon('check', 'click', saveTask));
  conteiner.appendChild(newLi);
}

/**
 * Adds a new task to the server
 */
function addNewTaskToServer(input, conteiner) {
  const inp = input;
  const inputText = inp.value;

  inp.value = '';

  if (inputText !== '') {
    const payload = {
      todo: {
        title: inputText,
      },
    };

    fetch('/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(() => {
        console.log('Added Successefull');
        return fetch('/todos');
      })
      .then(response => response.json())
      .then((todos) => {
        let newId = 0;
        Array.prototype.forEach.call(todos, (el) => {
          if (el.title === inputText) {
            newId = el.id;
          }
        });
        addNewTask(newId, inputText, conteiner);
      })
      .catch(error => console.error(error));
  }
}

/**
 * Check if the task is already loaded.
 */
function isExistTask(task, conteiner) {
  const allTasks = conteiner.getElementsByTagName('li');
  if (allTasks.length) {
    return Array.prototype.some.call(allTasks, (el) => {
      const tasksText = el.getElementsByTagName('span')[0].innerText;
      return tasksText === task;
    });
  }
  return false;
}

/**
 * Adds loaded tasks to the DOM
 */
function addExistTask(todos, conteiner) {
  todos.forEach((elem) => {
    if (!isExistTask(elem.title, conteiner)) {
      addNewTask(elem.id, elem.title, conteiner, elem.isCompleted);
    }
  });
}

/**
 * Load tasks from the server
 */
function loadTasksFromServer(e, conteiner) {
  fetch('/todos')
    .then(response => response.json())
    .then((todos) => {
      addExistTask(todos, conteiner);
    })
    .catch(error => console.error(error));
}

todoConteiner.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    markAsDone(e);
  }
});

todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addNewTaskToServer(todoInput, todoConteiner);
  }
});

todoAddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTaskToServer(todoInput, todoConteiner);
});

todoLoadBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loadTasksFromServer(e, todoConteiner);
});
