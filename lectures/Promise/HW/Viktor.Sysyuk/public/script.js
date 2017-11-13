const loadTodosButton = document.getElementById('loadTodos');
const todoList = document.getElementById('todoList');
const newInput = document.getElementById('todoText');
const newAddLi = document.getElementById('addLi');

function Remove(event) {
  const liNode = event.target.parentNode;
  const parLi = liNode.parentNode;
  parLi.removeChild(liNode);
}

function EditClick(event) {
  const liNode = event.target.parentNode;
  const liText = liNode.innerText;
  const redactI = liNode.getElementsByTagName('i')[0].cloneNode();
  const deleteI = liNode.getElementsByTagName('i')[1].cloneNode();
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  inputNode.style.display = 'inline-block';
  inputNode.value = liText;
  liNode.innerText = '';
  liNode.appendChild(inputNode);
  liNode.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      const newNode = event.target.parentNode;
      newNode.innerText = event.target.value;
      newNode.appendChild(redactI);
      newNode.appendChild(deleteI);
    }
  });
}

function addFaIcon(remove, redact, input) {
  remove.classList.add('fa');
  remove.classList.add('fa-trash');
  remove.addEventListener('click', Remove);
  redact.classList.add('fa');
  redact.classList.add('fa-pencil');
  redact.addEventListener('click', EditClick);
  input.style.display = 'none';
}

function createLi(todo) {
  const newLi = document.createElement('LI');
  const edLi = document.createElement('i');
  const delLi = document.createElement('i');
  const inpEdLi = document.createElement('input');
  addFaIcon(delLi, edLi, inpEdLi);
  newLi.innerText = todo.title;
  if (todo.isCompleted) {
    newLi.classList.add('completed');
  }
  newLi.appendChild(inpEdLi);
  newLi.appendChild(edLi);
  newLi.appendChild(delLi);
  return newLi;
}

function createNewLi() {
  const newText = newInput.value;
  if (newText !== '') {
    const newLi = document.createElement('LI');
    const edLi = document.createElement('i');
    const delLi = document.createElement('i');
    const inpEdLi = document.createElement('input');
    addFaIcon(delLi, edLi, inpEdLi);
    newLi.innerText = `${newText} `;
    newLi.appendChild(inpEdLi);
    newLi.appendChild(edLi);
    newLi.appendChild(delLi);
    todoList.appendChild(newLi);
  }
  newText.value = '';
}


function handleLiClick(event) {
  const liNode = event.target;
  liNode.classList.toggle('completed');
}


function renderInitialList(todos) {
  const liList = todos.map((todo) => {
    const newLiNode = createLi(todo);
    return newLiNode;
  });
  liList.forEach((li) => {
    todoList.appendChild(li);
  });
}

function loadTodos() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/todos', true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = xhr.response;
      const todos = JSON.parse(response);
      renderInitialList(todos);
    }
  };
}
function addTodoHandler() {
  const newLiText = newInput.value;
  const sendLi = {
    todo: {
      title: newLiText,
    },
  };
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/todo', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(sendLi));
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('Successful');
    }
  };
}

loadTodosButton.addEventListener('click', loadTodos);

newAddLi.addEventListener('click', createNewLi);

newAddLi.addEventListener('click', () => addTodoHandler());

newInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createNewLi();
  }
});
todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    handleLiClick(event);
  }
});

