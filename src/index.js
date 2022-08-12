import './styles/main.scss';
import showNotification from './modules/notification';

const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');
const refresh = document.getElementById('clear');

// VARS
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let EditTodoId = -1;

// clearAll todo lists when refresh the page
refresh.addEventListener('click', () => {
  window.location.reload();
});

export default refresh;
// EDIT A TODO
const editTodo = (todoId) => {
  todoInput.value = todos[todoId].value;
  EditTodoId = todoId;
};

// updateId
const updateId = () => {
  for (let i = 0; i < todos.length; i += 1) {
    todos[i].id = i + 1;
  }
};

// RENDER TODOS
const renderTodos = () => {
  if (todos.length === 0) {
    todosListEl.innerHTML = '<center>Nothing to do!</center>';
    return;
  }
  // CLEAR ELEMENT BEFORE A RE-RENDER
  todosListEl.innerHTML = '';
  // RENDER TODOS
  todos.forEach((todo, index) => {
    todosListEl.innerHTML += `
      <div class="todo" id=${index}>
        <i 
          class="bi ${todo.checked ? 'bi bi-check2-square' : 'bi bi-app'}"
          style="color : ${todo.color}"
          data-action="check"
        ></i>
        <p class="${todo.checked ? 'checked' : ''}" data-action="check">${todo.value}</p>
        <i class="bi bi-pencil-square" data-action="edit"></i>
        <i class="bi bi-trash" data-action="delete"></i>
      </div>
      `;
  });
};

// CHECK A TODO
const checkTodo = (todoId) => {
  todos = todos.map((todo, index) => ({
    ...todo,
    checked: index === todoId ? !todo.checked : todo.checked,
  }));
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
};

// SAVE TODO
const saveTodo = () => {
  const todoValue = todoInput.value;
  // check if the todo is empty
  const isEmpty = todoValue === '';

  // check for duplicate todos
  const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());

  if (isEmpty) {
    showNotification("Todo's input is empty");
  } else if (isDuplicate) {
    showNotification('Todo already exists!');
  } else {
    if (EditTodoId >= 0) {
      todos = todos.map((todo, index) => ({
        ...todo,
        value: index === EditTodoId ? todoValue : todo.value,
      }));
      EditTodoId = -1;
    } else {
      todos.push(
        {
          value: todoValue,
          checked: false,
          id: todos.length + 1,
        },
      );
    }

    todoInput.value = '';
  }
};

// FORM SUBMIT
form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveTodo();
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
});

// DELETE TODO
const deleteTodo = (todoId) => {
  todos = todos.filter((todo, index) => index !== todoId);
  EditTodoId = -1;
  updateId();
  // re-render
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
};

// CLICK EVENT LISTENER FOR ALL THE TODOS
todosListEl.addEventListener('click', (event) => {
  const { target } = event;
  const { parentElement } = target;
  if (parentElement.className !== 'todo') return;
  // t o d o id
  const todo = parentElement;
  const todoId = Number(todo.id);
  // target action
  const { action } = target.dataset;
  if (action === 'check') {
    checkTodo(todoId);
  }
  if (action === 'edit') {
    editTodo(todoId);
  }
  if (action === 'delete') {
    deleteTodo(todoId);
  }
});

const clearAllBtn = document.querySelector('.clear-completed');
const clearAll = () => {
  // const localData = JSON.parse(localStorage.getItem('todos'));
  todos = todos.filter((i) => !i.checked);
  updateId();
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
};
renderTodos();

clearAllBtn.addEventListener('click', clearAll);
