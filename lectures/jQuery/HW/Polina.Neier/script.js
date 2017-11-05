/* eslint-env browser */
/* eslint-env jquery */

$(document).ready(() => {
  const newTodoInput = $('#newTodo');
  const addTodoButton = $('#addTodoButton');
  const todoList = $('ul').first();

  // add todo item with jquery

  function addNewLi() {
    const newTodoText = newTodoInput.val();
    if (newTodoText !== '') {
      const newLiNode = $(document.createElement('li'));
      const iNode = $(document.createElement('i'));
      const inputEditNode = $(document.createElement('input'));
      const iNodeDel = $(document.createElement('i'));

      iNode.addClass('fa fa-pencil');
      iNodeDel.addClass('fa fa-close');
      inputEditNode.hide();
      newLiNode.text(newTodoText);

      newLiNode.append(inputEditNode);
      newLiNode.append(iNode);
      newLiNode.append(iNodeDel);
      todoList.append(newLiNode);
      newTodoInput.val('');
    }
  }

  addTodoButton.click(() => {
    addNewLi();
    return false;
  });

  newTodoInput.keydown((event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addNewLi();
    }
  });

  // handle click and edit click

  todoList.click((event) => {
    const currentNode = $(event.target);

    if (currentNode.prop('tagName') === 'LI') {
      currentNode.toggleClass('completed');
    }

    if (currentNode.prop('tagName') === 'I' && currentNode.hasClass('fa-pencil')) {
      const liNode = currentNode.parent();
      const liText = liNode.text();
      const inputNode = liNode.children('input').first().clone();
      inputNode.show();
      inputNode.val(liText);
      liNode.text('');
      liNode.append(inputNode);
    }
  });

  // finish editing

  todoList.keydown((event) => {
    if (event.key === 'Enter') {
      const newTodoText = $(event.target).val();
      if (newTodoText !== '') {
        const liNode = $(event.target).parent();
        const iNode = $(document.createElement('i'));
        const inputEditNode = $(document.createElement('input'));
        const iNodeDel = $(document.createElement('i'));

        iNode.addClass('fa fa-pencil');
        iNodeDel.addClass('fa fa-close');
        inputEditNode.hide();
        liNode.text(newTodoText);

        liNode.append(inputEditNode);
        liNode.append(iNode);
        liNode.append(iNodeDel);
        newTodoInput.val('');
      }
    }
  });

  // delete todo item

  todoList.click((event) => {
    if ($(event.target).prop('tagName') === 'I' && $(event.target).hasClass('fa-close')) {
      const liNodeToDelete = $(event.target).parent();
      liNodeToDelete.remove();
    }
  });
});
