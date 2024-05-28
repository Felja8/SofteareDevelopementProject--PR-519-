document.addEventListener('DOMContentLoaded', function() {
  const taskList = document.getElementById('task-list');
  const addTaskButton = document.getElementById('add-task');

  // Load tasks from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTask(task.text, task.completed));

  // Add task button event
  addTaskButton.addEventListener('click', () => addTask(''));

  function addTask(text, completed = false) {
      const li = document.createElement('li');
      const input = document.createElement('input');
      input.type = 'text';
      input.value = text;
      input.addEventListener('input', saveTasks);

      const checkmark = document.createElement('div');
      checkmark.classList.add('checkmark');
      if (completed) {
          checkmark.classList.add('completed');
      }
      checkmark.addEventListener('click', () => {
          checkmark.classList.toggle('completed');
          saveTasks();
      });

      li.appendChild(checkmark);
      li.appendChild(input);
      taskList.appendChild(li);
      saveTasks();
  }

  function saveTasks() {
      const tasks = [];
      taskList.querySelectorAll('li').forEach(li => {
          const input = li.querySelector('input[type="text"]');
          const checkmark = li.querySelector('.checkmark');
          tasks.push({ text: input.value, completed: checkmark.classList.contains('completed') });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
