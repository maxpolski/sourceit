function addElement() {
  const newText = $('#newTodo').val();
  $('#todoList').append('<li> <i class="fa fa-pencil"></i><i class="fa fa-times"></i>' + newText + '</li>');
  $('#newTodo').val('');
}

function addElementbyEnter() {
  if (event.keyCode === 13) {
    addElement();
  }
}

function addEditedElement() {
  const a = $('#editedText').val();
  $('.editing').replaceWith('<li> <i class="fa fa-pencil"></i><i class="fa fa-times"></i>' + a +'</li>');
}

let currentText;

function cancel() {
  $('.editing').replaceWith('<li> <i class="fa fa-pencil"></i><i class="fa fa-times"></i>' + currentText + '</li>');
}

$('#addTodoButton').click(addElement);

$(document).bind('keydown', addElementbyEnter);

$('body').on('click', 'li', function complete() {
  $(this).addClass('completed');
});

$('body').on('click', '.fa-times', function kill() {
  $(this).parent().remove();
});

$('body').on('click', '.fa-pencil', function edit() {
  currentText = $(this).parent('li')[0].innerText;
  $(this).parent('li').replaceWith('<div class = "editing"><input type="text" id="editedText" value=' + currentText + '><i class="fa fa-check"></i><i class="fa fa-undo"></i></div>');
  $('.fa-check').click(addEditedElement);
  $('.fa-undo').click(cancel);
});
