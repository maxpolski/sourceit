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

  const xhr = new XMLHttpRequest();
  xhr.open('PUT', '/todo', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(payload));
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // eslint-disable-next-line no-console
      console.log('Edit Successefull');
    }
  };
}

/**
 * Edits completed status
 */
function markAsDone(e) {
  const elem = e.target;
  elem.classList.toggle('completed');

  const text = elem.innerText;
  const data = elem.dataset;
  const isComplited = elem.classList.contains('completed') ? 1 : 0;
  editTaskOnServer(+data.id, text, isComplited);
}

/**
 * Edits the task in the DOM
 */
function editTask(e) {
  const liNode = e.target.parentNode;
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  const liText = liNode.innerText;

  inputNode.style.display = 'inline-block';
  inputNode.value = liText;
  liNode.innerText = '';

  inputNode.addEventListener('keydown', saveTask);
  liNode.appendChild(inputNode);
  liNode.appendChild(addIcon('check', 'click', saveTask));
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
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  const inputText = inputNode.value;
  if (inputText === '') {
    liNode.classList.add('error');
  } else {
    liNode.classList.remove('error');
    const data = liNode.dataset;
    const isComplited = liNode.classList.contains('completed') ? 1 : 0;

    editTaskOnServer(+data.id, inputText, isComplited);

    inputNode.value = '';
    inputNode.style.display = 'none';

    liNode.innerText = inputText;
    liNode.appendChild(inputNode);
    liNode.appendChild(addIcon('pencil', 'click', editTask));
    liNode.appendChild(addIcon('times', 'click', removeTask));
  }
  return true;
}

/**
 * Adds a new task to the DOM
 */
function addNewTask(taskId, input, inputText, conteiner) {
  const inp = input;
  const newLi = document.createElement('LI');
  const newInp = document.createElement('INPUT');

  newLi.setAttribute('data-id', taskId);
  newInp.style.display = 'none';
  inp.value = '';

  newLi.innerText = inputText;
  newLi.appendChild(newInp);
  newLi.appendChild(addIcon('pencil', 'click', editTask));
  newLi.appendChild(addIcon('times', 'click', removeTask));
  conteiner.appendChild(newLi);
}

/**
 * Adds a new task to the server
 */
function addNewTaskToServer(input, conteiner) {
  const inp = input;
  const inputText = inp.value;

  if (inputText !== '') {
    const payload = {
      todo: {
        title: inputText,
      },
    };

    const promise = new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/todo', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(payload));
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // eslint-disable-next-line no-console
          console.log('Added Successefull');
          resolve();
        }
      };
    });

    promise.then(() => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/todos', true);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const { response } = xhr;
          const todos = JSON.parse(response);
          let newId = 0;
          Array.prototype.forEach.call(todos, (el) => {
            if (el.title === inputText) {
              newId = el.id;
            }
          });
          addNewTask(newId, input, inputText, conteiner);
        }
      };
    });
  }
}

/**
 * Check if the task is already loaded.
 */
function isExistTask(task, conteiner) {
  const allTasks = conteiner.getElementsByTagName('li');
  if (allTasks.length) {
    return Array.prototype.some.call(allTasks, (el) => {
      return el.innerText === task;
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
      const newLi = document.createElement('LI');
      const newInp = document.createElement('INPUT');
      newLi.setAttribute('data-id', elem.id);

      newInp.style.display = 'none';
      if (elem.isCompleted) {
        newLi.classList.add('completed');
      }
      newLi.innerText = elem.title;
      newLi.appendChild(newInp);
      newLi.appendChild(addIcon('pencil', 'click', editTask));
      newLi.appendChild(addIcon('times', 'click', removeTask));
      conteiner.appendChild(newLi);
    }
  });
}

/**
 * Load tasks from the server
 */
function loadTasksFromServer(e, conteiner) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/todos', true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const { response } = xhr;
      const todos = JSON.parse(response);
      addExistTask(todos, conteiner);
    }
  };
}

todoConteiner.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
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
