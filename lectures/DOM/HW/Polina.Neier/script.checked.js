/* eslint-env browser */

const newTodoInput = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementsByTagName('ul')[0];

function addNewLi() {
  const newTodoText = newTodoInput.value;
  if (newTodoText !== '') {
    const newLiNode = document.createElement('li');
    const iNode = document.createElement('i');
    const inputEditNode = document.createElement('input');
    const iNodeDel = document.createElement('i');

    iNode.classList.add('fa');
    iNode.classList.add('fa-pencil');
    iNodeDel.classList.add('fa');
    iNodeDel.classList.add('fa-close');
    inputEditNode.style.display = 'none';
    newLiNode.innerText = newTodoText;

    newLiNode.appendChild(inputEditNode);
    newLiNode.appendChild(iNode);
    newLiNode.appendChild(iNodeDel);
    todoList.appendChild(newLiNode);
    newTodoInput.value = '';
  }
}

function handleLiClick(event) {
  const liNode = event.target;
  liNode.classList.toggle('completed');
}

function handleStartEdit(event) {
  const liNode = event.target.parentNode;
  const liText = liNode.innerText;
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  inputNode.style.display = 'inline-block';
  inputNode.value = liText;
  liNode.innerText = '';
  liNode.appendChild(inputNode);
}

function handleFinishEdit(event) {
  const newTodoText = event.target.value;
  if (newTodoText !== '') {
    const liNode = event.target.parentNode;
    const iNode = document.createElement('i');
    const inputEditNode = document.createElement('input');
    const iNodeDel = document.createElement('i');

    iNode.classList.add('fa');
    iNode.classList.add('fa-pencil');
    iNodeDel.classList.add('fa');
    iNodeDel.classList.add('fa-close');
    inputEditNode.style.display = 'none';
    liNode.innerText = newTodoText;

    liNode.appendChild(inputEditNode);
    liNode.appendChild(iNode);
    liNode.appendChild(iNodeDel);
    newTodoInput.value = '';
  }
}

function handleCloseClick(event) {
  const liNodeToDelete = event.target.parentNode;
  liNodeToDelete.parentNode.removeChild(liNodeToDelete);
}

// add todo item
addTodoButton.addEventListener('click', (event) => {
  event.preventDefault();
  addNewLi();
});

// add todo item
newTodoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addNewLi();
  }
});

// complete todo item
todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    handleLiClick(event);
  }
});

// start edit todo item
todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'I' && event.target.classList.contains('fa-pencil')) {
    handleStartEdit(event);
  }
});

// finish edit todo item
todoList.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.target.tagName === 'INPUT') {
    handleFinishEdit(event);
  }
});

// delete todo item
todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'I' && event.target.classList.contains('fa-close')) {
    handleCloseClick(event);
  }
});
