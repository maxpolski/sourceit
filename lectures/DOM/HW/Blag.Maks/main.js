//не смог разобраться в старом коде, который делали в классе
//потому решил сделать все по новой
//но не смог закончить функцию редактирования

const todoList = document.getElementById('todoList');
const todoItem = document.getElementById('todoItem');
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', (event) => {
    event.preventDefault();
    addNewLi();
  });

addButton.onclick = function(){
    addNewLi();
}

todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addNewLi();
    }
  });

todoInput.event = addNewLi();

function addNewLi() {
    const inputText = todoInput.value;
    if ( inputText !== '' ){
        const newLiNode = document.createElement('LI');

        //editIcon and editInput
        const iNode = document.createElement('i');
        const inputEditNode = document.createElement('input');
        iNode.classList.add('fa');
        iNode.classList.add('fa-pencil');
        iNode.addEventListener('click', editClick);

        //del_icon & edit_Input.display = 'none'
        var delNode = document.createElement('i');
        delNode.classList.add('fa');
        delNode.classList.add('fa-trash-o');
        delNode.addEventListener('click', delLi);
        inputEditNode.style.display = 'none';


        newLiNode.innerHTML = inputText + ' ';

        newLiNode.appendChild(inputEditNode);
        newLiNode.appendChild(iNode);
        todoList.appendChild(newLiNode);
        newLiNode.appendChild(delNode);
        todoInput.value = '';
    }
}


function editClick (){
    const liNode = event.target.parentNode;
    const liText = liNode.innerText;
    const inputNode = liNode.getElementsByTagName('input')[0].cloneNode();
    inputNode.style.display = 'inline-block';
    inputNode.value = liText;
    liNode.innerText = '';
    liNode.appendChild(inputNode);
}


function delLi(event){
    const liNode = event.target.parentNode;
    const list = liNode.parentNode;
    list.removeChild(liNode);
  }