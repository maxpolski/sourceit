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

// function loadTodos() {
//   $.ajax('/todos', {
//     async: true,
//     method: 'GET',
//     success: todos => renderInitialList(todos),
//   });
// }

// function loadTodos() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', '/todos', true);
//   xhr.send();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const response = xhr.response;
//       const todos = JSON.parse(response);
//       renderInitialList(todos);
//     }
//   };
// }

// function addTodoHandler(inputValue) {
//   $.ajax('/todo', {
//     async: true,
//     data: JSON.stringify({
//       todo: {
//         title: inputValue,
//       },
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     method: 'POST',
//     success: () => loadTodos(),
//   });
// }

// function addTodoHandler(inputValue) {
//   const payload = {
//     todo: {
//       title: inputValue,
//     },
//   };
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', '/todo', true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send(JSON.stringify(payload));
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       loadTodos();
//     }
//   };
// }

function onKeyDownHandler(event) {
  if (event.key === 'Enter') {
    addTodoHandler(event.target.value); // значение инпута
    event.target.value = '';
  }
}

loadTodosButton.addEventListener('click', loadTodos);
newTodoInput.addEventListener('keydown', onKeyDownHandler);
