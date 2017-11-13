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
    PUT localhost:3000/todo
        body: {
          todo: {
            id: <Number>,
            [isCompleted: <Bool>,]
            [title: <String>,]
          }
        }
    DELETE
    OPTIONS

    скинуть ссылку на методы запросов
*/

const loadTodosButton = document.getElementById('loadTodos');
const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');

function createLi(todo) {
  const newLi = document.createElement('LI');
  const newTodoText = document.createElement('SPAN');
  const editTodoInput = document.createElement('INPUT');
  const iNode = document.createElement('I');
  editTodoInput.classList.add('hidden');
  newTodoText.innerText = todo.title;
  newLi.setAttribute('data-id', todo.id);
  iNode.classList.add('fa');
  iNode.classList.add('fa-pencil');

  if (todo.isCompleted) {
    newTodoText.classList.add('completed');
  }

  newLi.appendChild(newTodoText);
  newLi.appendChild(editTodoInput);
  newLi.appendChild(iNode);

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

function updateTodo(payload) {
  fetch('/todo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(() => loadTodos())
    .catch(error => console.error(error));
}

function changeCompletionStatus(spanNode) {
  const todoParentNode = spanNode.parentNode;
  const todoId = todoParentNode.getAttribute('data-id');
  const todoCompletionStatus = spanNode.classList.contains('completed');
  const payload = {
    todo: {
      id: +todoId,
      isCompleted: !todoCompletionStatus,
    },
  };

  updateTodo(payload);
}

function handleEditModeEnter(iNode) {
  const iParentNode = iNode.parentNode;
  const spanNode = iParentNode.getElementsByTagName('span')[0];
  const inputNode = iParentNode.getElementsByTagName('input')[0];

  spanNode.classList.add('hidden');
  iNode.classList.add('hidden');
  inputNode.classList.remove('hidden');
  inputNode.value = spanNode.innerText;
  inputNode.focus();
}

function handleEditTodoInput(event) {
  if (event.key === 'Enter') {
    const newTodoValue = event.target.value;
    if (newTodoValue !== '') {
      const inputParentNode = event.target.parentNode;
      const todoId = inputParentNode.getAttribute('data-id');
      const payload = {
        todo: {
          id: +todoId,
          title: newTodoValue,
        },
      };

      updateTodo(payload);
    }
  }
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
  if (event.target.tagName === 'SPAN') {
    changeCompletionStatus(event.target);
  }
  if (event.target.tagName === 'I') {
    handleEditModeEnter(event.target);
  }
});
todoList.addEventListener('keydown', (event) => {
  if (event.target.tagName === 'INPUT') {
    handleEditTodoInput(event);
  }
});
