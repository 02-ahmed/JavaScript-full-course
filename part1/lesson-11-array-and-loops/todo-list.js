let todoList = JSON.parse(localStorage.getItem('todoList'))|| [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = ''

  todoList.forEach((todoObject, index) => {
  const {name, dueDate, isChecked} = todoObject;
  const html = `
      <div class="todo-name ${isChecked ? 'check' : ''}"><div class="checkbox ${isChecked ? 'checked' : ''}"></div>${name}</div>
      <div class="date ${isChecked ? 'check' : ''}">${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
  todoListHTML += html;
  })
  localStorage.setItem("todoList", JSON.stringify(todoList));


  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    })
  });

  document.querySelectorAll('.todo-name').forEach((todo, index) => {
    const todoObject = todoList[index]
    todo.addEventListener('click', () => {
      todoObject.isChecked = !todoObject.isChecked;
      renderTodoList();
      localStorage.setItem("todoList", JSON.stringify(todoList));

    });
  });
  localStorage.setItem("todoList", JSON.stringify(todoList));
  
}




document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
    isChecked: false
  });

  localStorage.setItem("todoList", JSON.stringify(todoList));
  
  inputElement.value = '';

  renderTodoList();
}