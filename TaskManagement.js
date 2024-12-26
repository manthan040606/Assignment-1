
const tasks = [];

const addTask = (newTask) => {
    tasks.push(newTask);
    renderTasks();
};

const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task' + (task.status === 'Completed' ? ' completed' : '');
        taskDiv.innerHTML = `Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`;
        taskList.appendChild(taskDiv);
    });
};

document.getElementById('addTaskButton').addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value;
    const status = document.getElementById('taskStatus').value;
    const priority = parseInt(document.getElementById('taskPriority').value);

    if (title && status && priority >= 1 && priority <= 5) {
        addTask({ title, status, priority });
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskPriority').value = '';
    } else {
        alert('Please fill in all fields correctly.');
    }
});