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

function createLi(todo) {
  const newLi = document.createElement('LI');
  newLi.innerText = todo.title;
  if (todo.isCompleted) {
    newLi.classList.add('completed');
  }

  return newLi;
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

loadTodosButton.addEventListener('click', loadTodos);
