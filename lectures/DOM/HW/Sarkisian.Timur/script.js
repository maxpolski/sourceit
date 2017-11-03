const newTodoInput = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementsByTagName('ul')[0];

function addIcon(iconName, eventType, callback) {
  const iNode = document.createElement('I');
  const iName = iconName !== '' ? `fa-${iconName}` : 'fa-pencil';

  iNode.classList.add('fa');
  iNode.classList.add(iName);

  iNode.addEventListener(eventType, callback);
  return iNode;
}

addTodoButton.addEventListener('click', (event) => {
  event.preventDefault();
  addNewLi();
});

newTodoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addNewLi();
  }
});

todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    handleLiClick(event);
  }
});

function addNewLi() {
  const newTodoText = newTodoInput.value;
  if (newTodoText !== '') {
    const newLiNode = document.createElement('li');
    const iNode = document.createElement('i');
    const inputEditNode = document.createElement('input');

    iNode.classList.add('fa');
    iNode.classList.add('fa-pencil');
    iNode.addEventListener('click', handleEditClick);
    inputEditNode.style.display = 'none';

    newLiNode.innerText = `${newTodoText } `;

    newLiNode.appendChild(inputEditNode);
    newLiNode.appendChild(iNode);
    todoList.appendChild(newLiNode);
    inputEditNode.style.display = 'none';
    newTodoInput.value = '';
  }
}

function handleLiClick(event) {
  const liNode = event.target;
  liNode.classList.toggle('completed');
}

function handleEditClick(event) {
  const liNode = event.target.parentNode;
  const liText = liNode.innerText;
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  inputNode.style.display = 'inline-block';
  inputNode.value = liText;
  liNode.innerText = '';
  liNode.appendChild(inputNode);
  inputNode.addEventListener('keydown', handleEditDoneClick);
  liNode.appendChild(addIcon('check', 'click', handleEditDoneClick));
}

function handleEditDoneClick(event) {
  if (event.key && event.key !== 'Enter') {
    return false;
  }
}
const liNode = event.target.parentNode;
const inputNode = liNode.getElementsByTagName('input')[0];
const inputNodeValue = inputNode.value;

inputNode.style.display = 'none';
liNode.innerHTML = '';

liNode.innerText = inputNodeValue;
liNode.appendChild(inputNode);
liNode.appendChild(addIcon('pencil', 'click', handleEditClick));
liNode.appendChild(addIcon('times', 'click', handleRemoveClick));


function handleRemoveClick(event) {
  const liNode = event.target.parentNode;
  liNode.parentNode.removeChild(liNode);
}

addTodoButton.addEventListener('click', (event) => {
  event.preventDefault();
  addNewLi();
});

newTodoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addNewLi();
  }
});

todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    handleLiClick(event);
  }
});
