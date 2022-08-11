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
  }
export default renderTodos;