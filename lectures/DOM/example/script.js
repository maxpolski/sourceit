const newTodoInput = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementsByTagName('ul')[0];

function createEditIcon() {
  const iNode = document.createElement('i');
  iNode.classList.add('fa');
  iNode.classList.add('fa-pencil');
  iNode.addEventListener('click', handleEditClick);
  return iNode;
}

function handleEditSubmit(event) {
  if (event.key === 'Enter' && event.target.value !== '') {
    const liNode = event.target.parentNode;
    const inputText = event.target.value;
    const inputNode = event.target.cloneNode();
    inputNode.value = '';
    liNode.innerText = inputText;
    inputNode.style.display = 'none';
    liNode.appendChild(inputNode);
    liNode.appendChild(createEditIcon());
  }
}

function handleEditClick(event) {
  const liNode = event.target.parentNode;
  const liText = liNode.innerText;
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  inputNode.style.display = 'inline-block';
  inputNode.value = liText;
  inputNode.addEventListener('keydown', handleEditSubmit);
  liNode.innerText = '';
  liNode.appendChild(inputNode);
}

function addNewLi() {
  const newTodoText = newTodoInput.value;
  if (newTodoText !== '') {
    const newLiNode = document.createElement('li');
    const inputEditNode = document.createElement('input');

    inputEditNode.style.display = 'none';
    newLiNode.innerText = `${newTodoText} `;
    newLiNode.appendChild(inputEditNode);
    newLiNode.appendChild(createEditIcon());
    todoList.appendChild(newLiNode);
    newTodoInput.value = '';
  }
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

function handleLiClick(event) {
  const liNode = event.target;
  liNode.classList.toggle('completed');
}

todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    handleLiClick(event);
  }
});
