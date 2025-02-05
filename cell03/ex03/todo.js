window.onload = function () {
  loadTodos();
};

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
  document.querySelectorAll("#ft_list div").forEach((todo) => {
    todos.push(todo.innerText);
  });
  document.cookie =
    "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/;";
}

function addTodo(text, save = true) {
  if (!text) return;

  const ftList = document.getElementById("ft_list");
  const todo = document.createElement("div");
  todo.textContent = text;
  todo.classList.add("todo-item");

  todo.addEventListener("click", () => {
    const confirmDelete = confirm("Do you really want to remove this task?");
    if (confirmDelete) {
      todo.remove();
      saveTodos();
    }
  });

  ftList.prepend(todo);

  if (save) saveTodos();
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

document.getElementById("newTaskBtn").addEventListener("click", () => {
  const taskText = prompt("Enter a new task:");
  if (taskText) addTodo(taskText);
});
