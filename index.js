const $todoForm = document.querySelector('form');
const $todoInput = document.querySelector('.todo-input');
const $todoList = document.querySelector('.todo-list');

$todoForm.addEventListener('submit', e => {
    e.preventDefault();

    const content = $todoInput.value.trim();

    if (content === "") return;

    $todoList.innerHTML = `
    <li>
        <input type="checkbox"/>
        <span>${content}</span>
        <button class="todo-remove">X</button>
    </li>` + $todoList.innerHTML;

    $todoInput.value = '';
});

$todoList.addEventListener('click', e => {
    if (e.target.classList.contains('todo-remove')) e.target.parentNode.remove();
});