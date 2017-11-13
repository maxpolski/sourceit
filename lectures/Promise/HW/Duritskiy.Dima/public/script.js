const loadTodosButton = document.getElementById('loadTodos');
const todoList = document.getElementById('todoList');
const newLiBtn = document.getElementById('newLi');
const newInput = document.getElementById('inputText');
let newLiText;

function createLi(todo) {
  const newLi = document.createElement('LI');
  const editNode = document.createElement('i');
  const deleteNode = document.createElement('i');
  const inputEditNode = document.createElement('input');
  addMode(deleteNode, editNode, inputEditNode);
  newLi.innerText = todo.title;
  if (todo.isCompleted) {
    newLi.classList.add('completed');
  }
  newLi.appendChild(inputEditNode);
  newLi.appendChild(editNode);
  newLi.appendChild(deleteNode);
  return newLi;
}

function createNewLi (){
  const newText = newInput.value;
  newLiText = newInput.value;
  if (newText !== ''){
  const newLi = document.createElement('LI');
  const editNode = document.createElement('i');
  const deleteNode = document.createElement('i');
  const inputEditNode = document.createElement('input');
  addMode(deleteNode, editNode, inputEditNode);
  newLi.innerText = newText + ' ';
  newLi.appendChild(inputEditNode);
  newLi.appendChild(editNode);
  newLi.appendChild(deleteNode);
  todoList.appendChild(newLi);
  newInput.value = '';
  }
}

function addMode(del, edit, input) {
  del.classList.add('fa');
  del.classList.add('fa-times');
  del.addEventListener('click', handleDelate);
  edit.classList.add('fa');
  edit.classList.add('fa-pencil');
  edit.addEventListener('click', handleEditClick);
  input.style.display = 'none';
}

function handleLiClick(event) {
  const liNode = event.target;
  liNode.classList.toggle('completed');
}

function handleDelate(event) {
  const liNode = event.target.parentNode;
  const tempVar = liNode.parentNode;
  tempVar.removeChild(liNode);
}

function handleEditClick(event) {
  const liNode = event.target.parentNode;
  const liText = liNode.innerText;
  const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
  const editBtn = liNode.getElementsByTagName('i')[0].cloneNode();
  const deleteBtn = liNode.getElementsByTagName('i')[1].cloneNode();
  inputNode.style.display = 'inline-block';
  inputNode.value = liText;
  liNode.innerText = '';
  liNode.appendChild(inputNode);
  liNode.addEventListener('keydown', function (event){
     if (event.keyCode === 13){
      const tempvar = event.target.parentNode;
      tempvar.innerText = event.target.value;
      tempvar.appendChild(editBtn);
      tempvar.appendChild(deleteBtn);
    }
  });
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
function postLi() {
  const sendLi = {
    todo: {
      title: newLiText,
      }
    };
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/todo', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(sendLi));
    xhr.onreadystatechange = () =>{
      if (xhr.readyState === 4 && xhr.status === 200){
        console.log("Good Job!");
      }
    }
  }

loadTodosButton.addEventListener('click', loadTodos);
newLiBtn.addEventListener('click', createNewLi);
newInput.addEventListener('keydown', (event) => {
if (event.key === 'Enter'){
  createNewLi();}
});
todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    handleLiClick(event);
  }
});
newLiBtn.addEventListener('click', () => postLi());
newInput.addEventListener('keydown', () =>{
  if (event.key === 'Enter'){
    postLi();
  }
});


