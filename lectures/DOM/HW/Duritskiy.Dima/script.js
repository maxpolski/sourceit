const newTodoInput = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementsByTagName('ul')[0];

function addNewLi() {
  const newTodoText = newTodoInput.value;
  if (newTodoText !== '') {
    const newLiNode = document.createElement('li');
    const iNode = document.createElement('i');
    const inputEditNode = document.createElement('input');
    const deleteBtn = document.createElement ('i');// создаю новую переменную, в которую помещаю функцию удаления

    deleteBtn.classList.add('fa');// создаю, а точнее вызываю класс иконки удаление
    deleteBtn.classList.add('fa-times');// вызываю подкласс и саму иконку
    deleteBtn.addEventListener('click', handleDelate);// присваиваю обработчик событий

    iNode.classList.add('fa');
    iNode.classList.add('fa-pencil');
    iNode.addEventListener('click', handleEditClick);
    inputEditNode.style.display = 'none';

    newLiNode.innerText = newTodoText + ' ';

    newLiNode.appendChild(inputEditNode);
    newLiNode.appendChild(iNode);
    newLiNode.appendChild(deleteBtn);// добавляю саму иконку к созданому input
    todoList.appendChild(newLiNode);
    newTodoInput.value = '';
  }
}

function handleDelate(event) {
  const liNode = event.target.parentNode;
  const tempVar = liNode.parentNode;
  tempVar.removeChild(liNode);
}

function handleLiClick(event) {
  const liNode = event.target;
  liNode.classList.toggle('completed');
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
