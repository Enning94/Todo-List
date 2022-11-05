const todoList = document.querySelector('.todo-list');

const getTodos = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach((todo) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const completedBtn = document.createElement('div');
    const isChecked = todo.completed === true ? 'checked' : '';
    completedBtn.innerHTML = `<input type="checkbox" class = "complete-btn" ${isChecked} id="${todo.index}">`;
    todoDiv.appendChild(completedBtn);

    const newTodo = document.createElement('li');
    const inputClass = todo.completed === true ? 'completed' : 'inp';
    newTodo.classList.add('todo-item');
    newTodo.innerHTML = `<input type="text" value = "${todo.description}" class ="${inputClass}" id="${todo.index}" >`;
    todoDiv.appendChild(newTodo);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="bx bx-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    todoList.appendChild(todoDiv);
  });
};
export default getTodos;