// eslint

const newTodoInput = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementsByTagName('ul')[0];

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

    //delete icon
    const delNode = document.createElement('i');
    delNode.classList.add('fa');
    delNode.classList.add('fa-trash-o');
    delNode.addEventListener('click', deleteLi);


    iNode.classList.add('fa');
    iNode.classList.add('fa-pencil');
    iNode.addEventListener('click', handleEditClick);
    inputEditNode.style.display = 'none';
    
    newLiNode.innerText = newTodoText + ' ';

    newLiNode.appendChild(inputEditNode);
    newLiNode.appendChild(iNode);
    newLiNode.appendChild(delNode);
    todoList.appendChild(newLiNode);
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
  //здесь мы забыли кнопки вернуть лишке
  const editBtn = liNode.getElementsByTagName('i')[0].cloneNode();
  const delBtn = liNode.getElementsByTagName('i')[1].cloneNode();

  inputNode.style.display = 'inline-block';
  inputNode.value = liText;
  liNode.innerText = '';
  liNode.appendChild(inputNode);
  liNode.addEventListener('keydown', function(event){
      if(event.keyCode === 13){

        const liNode = event.target.parentNode;
        liNode.innerText = event.target.value;
        inputNode.style.display = 'none';
        liNode.appendChild(editBtn);
        liNode.appendChild(delBtn);
        
      }
  });
}

function finishEditing(event){
}


function deleteLi(event){
  const liNode = event.target.parentNode;
  const list = liNode.parentNode;
  list.removeChild(liNode);
}