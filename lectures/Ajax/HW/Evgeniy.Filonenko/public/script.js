const todoConteiner = document.getElementById('todoList');
const todoInput = document.getElementById('newTask');
const todoAddBtn = document.getElementById('addNewTask');
const todoLoadBtn = document.getElementById('loadTodos');

function addIcon(iconName, eventType, callback) {
  const iNode = document.createElement('I');
  const iName = iconName !== '' ? `fa-${iconName}` : 'fa-pencil';

  iNode.classList.add('fa');
  iNode.classList.add(iName);

  iNode.addEventListener(eventType, callback);
  return iNode;
}

function markAsDone(e) {
  const elem = e.target;
  elem.classList.toggle('completed');
}

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

function removeTask(e) {
  const liNode = e.target.parentNode;
  liNode.parentNode.removeChild(liNode);
}

function saveTask(e) {
  if (e.key && e.key !== 'Enter') {
    return false;
  }

  const liNode = e.target.parentNode;
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  const inputText = inputNode.value;

  inputNode.value = '';
  inputNode.style.display = 'none';

  liNode.innerText = inputText;
  liNode.appendChild(inputNode);
  liNode.appendChild(addIcon('pencil', 'click', editTask));
  liNode.appendChild(addIcon('times', 'click', removeTask));
}

function addNewTask(e, input, conteiner) {
  const inp = input;
  const inputText = inp.value;

  if (inputText !== '') {
    const newLi = document.createElement('LI');
    const newInp = document.createElement('INPUT');

    newInp.style.display = 'none';
    inp.value = '';

    newLi.innerText = inputText;
    newLi.appendChild(newInp);
    newLi.appendChild(addIcon('pencil', 'click', editTask));
    newLi.appendChild(addIcon('times', 'click', removeTask));
    conteiner.appendChild(newLi);
  }
}

function isExistTask(task, conteiner) {
  const allTasks = conteiner.getElementsByTagName('li');
  if (allTasks.length) {
    for (let i = 0; i < allTasks.length; i++) {
      if (allTasks[i].innerText === task) {
        return true;
      }
    }
  }
  return false;
}

function addExistTask(todos, conteiner) {
  todos.forEach((elem) => {
    if (!isExistTask(elem.title, conteiner)) {
      const newLi = document.createElement('LI');
      const newInp = document.createElement('INPUT');
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
    addNewTask(e, todoInput, todoConteiner);
  }
});

todoAddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTask(e, todoInput, todoConteiner);
});

todoLoadBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loadTasksFromServer(e, todoConteiner);
});
