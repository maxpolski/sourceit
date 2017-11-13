const addButton = document.getElementById('addNewTask');
const loadButton = document.getElementById('loadFromServer');
const todoInput = document.getElementById('newTask');
const todoList = document.getElementById('todoList');

function addIcon(iconName, eventType, callback) {
  const iNode = document.createElement('I');
  const iName = iconName !== '' ? `fa-${iconName}` : 'fa-pencil';

  iNode.classList.add('fa');
  iNode.classList.add(iName);

  iNode.addEventListener(eventType, callback);
  return iNode;
}

function handleCompletion(event) {
  const task = event.target;
  task.classList.toggle('completed');
}

function edit(event) {
  const liNode = event.target.parentNode;
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  const liText = liNode.innerText;

  inputNode.style.display = 'inline-block';
  inputNode.value = liText;
  liNode.innerText = '';

  inputNode.addEventListener('keydown', confirmBtn);
  liNode.appendChild(inputNode);
  liNode.appendChild(addIcon('check', 'click', confirmBtn));
}

function remove(event) {
  const liNode = event.target.parentNode;
  liNode.parentNode.removeChild(liNode);
}

function confirmBtn(event) {
  // давайте не будем копировать код друг друга))
  if (event.key && event.key !== 'Enter') {
    return false;
  }

  const liNode = event.target.parentNode;
  const inputNode = liNode.getElementsByTagName('input')[0];
  const inputNodeValue = inputNode.value;

  inputNode.style.display = 'none';
  liNode.innerHTML = '';

  liNode.innerText = inputNodeValue;
  liNode.appendChild(inputNode);
  liNode.appendChild(addIcon('pencil', 'click', edit));
  liNode.appendChild(addIcon('times', 'click', remove));
}

function addNewTask(input, list) {
  if (input.value) {
    const inputParam = input;
    const inputText = input.value;
    const newLi = document.createElement('LI');
    const newInput = document.createElement('INPUT');

    newInput.style.display = 'none';
    inputParam.value = '';

    newLi.innerText = inputText;
    newLi.appendChild(newInput);
    list.appendChild(newLi);
    newLi.appendChild(addIcon('pencil', 'click', edit));
    newLi.appendChild(addIcon('times', 'click', remove));
  }
}

function renderInitialList(todos) {
  todos.forEach((li) => {
    const newLi = document.createElement('LI');
    const newInput = document.createElement('INPUT');
    newInput.style.display = 'none';
    if (li.isCompleted) {
      newLi.classList.add('completed');
    }
    newLi.innerText = li.title;
    newLi.appendChild(newInput);
    newLi.appendChild(addIcon('pencil', 'click', edit));
    newLi.appendChild(addIcon('times', 'click', remove));
    todoList.appendChild(newLi);
  });
}

function loadFromServer() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/todos', true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const { response } = xhr;
      const todos = JSON.parse(response);
      renderInitialList(todos);
    }
  };
}

todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    handleCompletion(event);
  }
});

todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addNewTask(todoInput, todoList);
  }
});

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  addNewTask(todoInput, todoList);
});

loadButton.addEventListener('click', (event) => {
  event.preventDefault();
  loadFromServer();
});
