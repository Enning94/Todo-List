const task = [
  {
    index: 0,
    description: 'Take car to Garage',
    completed: false,
  },
  {
    index: 1,
    description: 'Answer all Emails',
    completed: false,
  },
  {
    index: 2,
    description: 'Practice JavaScript',
    completed: false,
  },
];

const todoList = () => {
  const todos = document.querySelector('.todo-list');
  task.forEach((task) => {
    todos.innerHTML += `
      <li class="todo">
        <span>
        <input class="box" type="checkbox" />
        <input type="text" value="${task.description}" />
        </span>
        <i class='bx bx-dots-vertical-rounded'></i>
      </li>
      <hr>
      `;
  });
};

todoList();