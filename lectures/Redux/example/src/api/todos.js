export const getAllTodos = () =>
  fetch('/todos')
    .then(response => response.json());

export const addTodo = todo =>
  fetch('/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }).then(response => response.text());

export const toggleTodo = todo =>
  fetch('/todo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }).then(response => response.text());
