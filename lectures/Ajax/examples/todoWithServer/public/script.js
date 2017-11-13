/*
    GET localhost:3000/todos?a=3&b=fajsdfalksfjd&c=4
      [{
        title: <string>,
        isCompleted: <bool>
      }]
    POST localhost:3000/todo
        body: {
            todo: {
                title: <String>
            }
        }
    PUT
    DELETE
    OPTIONS

    скинуть ссылку на методы запросов
*/

const loadTodosButton = document.getElementById('loadTodos');
const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');

function createLi(todo) {
  const newLi = document.createElement('LI');
  newLi.innerText = todo.title;
  newLi.setAttribute('data-id', todo.id);
  if (todo.isCompleted) {
    newLi.classList.add('completed');
  }

  return newLi;
}

function renderInitialList(todos) {
  todoList.innerHTML = '';
  const liList = todos.map((todo) => {
    const newLiNode = createLi(todo);
    return newLiNode;
  });
  liList.forEach((li) => {
    todoList.appendChild(li);
  });
}

function loadTodos() {
  fetch('/todos')
    .then(response => response.json())
    .then(todos => renderInitialList(todos))
    .catch(error => console.error(error));
}

function addTodoHandler(inputValue) {
  fetch('/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      todo: {
        title: inputValue,
      },
    }),
  }).then(() => loadTodos())
    .catch(error => console.error(error));
}

function changeCompletionStatus() {
  console.log('clicked');
}

function onKeyDownHandler(event) {
  if (event.key === 'Enter') {
    addTodoHandler(event.target.value); // значение инпута
    event.target.value = '';
  }
}

loadTodosButton.addEventListener('click', loadTodos);
newTodoInput.addEventListener('keydown', onKeyDownHandler);
todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    changeCompletionStatus(event);
  }
});
