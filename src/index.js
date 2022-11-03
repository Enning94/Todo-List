import addTodo from './modules/addTask.js';
import deleteTodo from './modules/deleteTask.js';
import editTodo from './modules/editTask.js';
import getTodos from './modules/displayTodo.js';

const todoBtn = document.querySelector('.enter-btn');

const todoList = document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded', getTodos);
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

todoList.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    editTodo(e);
  }
});