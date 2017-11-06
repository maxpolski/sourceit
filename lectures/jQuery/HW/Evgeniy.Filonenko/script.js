/* eslint no-undef: off */
const newTodoInput = $('#newTodo');
const addTodoButton = $('#addTodoButton');
const todoList = $('ul')[0];

function addIcon(iconName, eventType, callback) {
  const iNode = document.createElement('I');
  const iName = iconName !== '' ? `fa-${iconName}` : 'fa-pencil';

  $(iNode).addClass('fa');
  $(iNode).addClass(iName);

  $(iNode).on(eventType, callback);
  return iNode;
}

function addNewLi() {
  const newTodoText = $(newTodoInput).val();
  if (newTodoText !== '') {
    const newLiNode = document.createElement('LI');
    const inputEditNode = document.createElement('INPUT');

    $(inputEditNode).css('display', 'none');

    $(newLiNode).text(`${newTodoText} `);
    $(newLiNode).append(inputEditNode);
    $(newLiNode).append(addIcon('pencil', 'click', handleEditClick));
    $(newLiNode).append(addIcon('times', 'click', handleRemoveClick));
    $(todoList).append(newLiNode);
    $(newTodoInput).val('');
  }
}

function handleRemoveClick(event) {
  const liNode = $(event.target).parent();
  $(liNode).remove();
}

function handleEditClick(event) {
  const liNode = $(event.target).parent();
  const inputNode = $('input')[0].cloneNode();
  const liText = $(liNode).text();

  $(inputNode).val(liText);
  $(inputNode).css('display', 'inline-block');
  $(liNode).text('');
  $(inputNode).on('keydown', handleEditDoneClick);
  liNode.appendChild(inputNode);
  liNode.appendChild(addIcon('check', 'click', handleEditDoneClick));
}

function handleEditDoneClick(event) {
  if (event.key && event.key !== 'Enter') {
    return true;
  }

  const liNode = $(event.target).parent();
  const inputNode = $(liNode).find('input')[0];
  const inputNodeValue = $(inputNode).val();

  $(inputNode).css('display', 'none');
  $(liNode).html();

  $(liNode).text(inputNodeValue);
  $(liNode).append(inputNode);
  $(liNode).append(addIcon('pencil', 'click', handleEditClick));
  $(liNode).append(addIcon('times', 'click', handleRemoveClick));
}

function handleLiClick(event) {
  const liNode = event.target;
  $(liNode).toggleClass('complited');
}

$(todoList).on('click', (event) => {
  if (event.target.tagName === 'LI') {
    handleLiClick(event);
  }
});

$(newTodoInput).on('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addNewLi();
  }
});

$(addTodoButton).click((event) => {
  event.preventDefault();
  addNewLi();
});

