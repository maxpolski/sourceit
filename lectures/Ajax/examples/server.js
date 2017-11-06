const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const todos = [{
  id: 1,
  title: 'Buy milk',
  isCompleted: true,
}, {
  id: 2,
  title: 'Repair computer',
  isCompleted: false,
}];

let lastTodoIndex = todos[todos.length - 1].id;

app.get('/todos', (req, res) =>
  res
    .set('Content-Type', 'application/json')
    .json(todos));

app.post('/todo', (req, res) => {
  const newTodo = req.body.todo;
  lastTodoIndex += 1;
  todos.push({ ...newTodo, id: lastTodoIndex, isCompleted: false });
  res.end();
});

app.put('/todo', (req, res) => {
  const {
    id: updatedTodoId,
    isCompleted,
    title,
  } = req.body.todo;
  const todoToUpdateIndex = todos.findIndex(({ id }) => id === updatedTodoId);

  todos[todoToUpdateIndex] = { ...todos[todoToUpdateIndex], isCompleted, title };
  console.log('todos', todos);
  res.end();
});

app.listen('3000', () => console.log('app listening on port 3000'));
