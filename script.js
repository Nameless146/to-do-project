

const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
let todoNumber = 1;

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const listItem = document.createElement('tr');
        listItem.classList.add('todo-list-item');

        const numberCell = document.createElement('td');
        numberCell.classList.add('number');
        numberCell.textContent = todoNumber++;

        const taskCell = document.createElement('td');
        taskCell.textContent = todoText;

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });
        deleteCell.appendChild(deleteButton);

        const editCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            taskCell.contentEditable = true;
            taskCell.focus();
            listItem.classList.add('editing');
        });
        editCell.appendChild(editButton);

        listItem.appendChild(numberCell);
        listItem.appendChild(taskCell);
        listItem.appendChild(deleteCell);
        listItem.appendChild(editCell);

        todoList.appendChild(listItem);

        todoInput.value = '';
    }
}

todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addButton.click();
    }
});

addButton.addEventListener('click', addTodo);

todoList.addEventListener('blur', (event) => {
    if (event.target.tagName === 'TD') {
        event.target.contentEditable = false;
        event.target.parentElement.classList.remove('editing');
    }
});
            



           