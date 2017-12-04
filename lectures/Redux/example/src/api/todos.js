export const getAllTodos = () =>
  fetch('/todos')
    .then(response => response.json());
