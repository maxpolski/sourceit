const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static(`${path.resolve(__dirname)}/todoWithServer/public`));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
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

app.get('/', (req, res) => {
  const indexFile = fs.readFileSync(`${path.resolve(__dirname)}/todoWithServer/index.html`);
  res.set('Content-Type', 'text/html');
  res.send(indexFile);
});

app.get('/todos', (req, res) =>
  res
    .set('Content-Type', 'application/json')
    .json(todos));

app.post('/todo', (req, res) => {
  const newTodo = req.body.todo;
  lastTodoIndex += 1;
  todos.push(Object.assign({}, newTodo, { id: lastTodoIndex, isCompleted: false }));
  res.end();
});

app.put('/todo', (req, res) => {
  let {
    id: updatedTodoId,
    isCompleted,
    title,
  } = req.body.todo;

  const todoToUpdateIndex = todos.findIndex(({ id }) => id === updatedTodoId);

  if (typeof isCompleted === 'undefined') {
    isCompleted = todos[todoToUpdateIndex].isCompleted;
  }
  title = title || todos[todoToUpdateIndex].title;

  todos[todoToUpdateIndex] = Object.assign({}, todos[todoToUpdateIndex], { isCompleted, title });
  res.end();
});

app.listen('3000', () => console.log('app listening on port 3000'));
