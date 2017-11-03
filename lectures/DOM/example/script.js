const newTodoInput = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementsByTagName('ul')[0];

function handleEditClick(event) {
  const liNode = event.target.parentNode;
  const liText = liNode.innerText;
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  inputNode.style.display = 'inline-block';
  inputNode.value = liText;
  liNode.innerText = '';
  liNode.appendChild(inputNode);
}

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
    newLiNode.innerText = `${newTodoText} `;
    newLiNode.appendChild(inputEditNode);
    newLiNode.appendChild(iNode);
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
