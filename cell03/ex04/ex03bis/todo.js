$(document).ready(function () {
  loadTodos();

  $("#newTaskBtn").click(function () {
    const taskText = prompt("Enter a new task:");
    if (taskText) addTodo(taskText);
  });
});

function loadTodos() {
  const savedTodos = getCookie("todos");
  if (savedTodos) {
    const todoArray = JSON.parse(savedTodos);
    todoArray.reverse().forEach((todoText) => {
      addTodo(todoText, false);
    });
  }
}

function saveTodos() {
  const todos = [];
  $("#ft_list div").each(function () {
    todos.push($(this).text());
  });
  document.cookie = `todos=${encodeURIComponent(
    JSON.stringify(todos)
  )}; path=/;`;
}

function addTodo(text, save = true) {
  if (!text) return;

  const $ftList = $("#ft_list");
  const $todo = $("<div></div>").text(text).addClass("todo-item");

  $todo.click(function () {
    const confirmDelete = confirm("Do you really want to remove this task?");
    if (confirmDelete) {
      $(this).remove();
      saveTodos();
    }
  });

  $ftList.prepend($todo);

  if (save) saveTodos();
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}
