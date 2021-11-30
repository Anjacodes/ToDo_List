import _ from 'lodash'; // eslint-disable-line
import './style.css';
import './status.js';

let tasks = [
  { description: 'Water plants', completed: false, index: 0 },
  { description: 'Feed the dog', completed: false, index: 1 },
  { description: 'Do homework', completed: false, index: 2 },
];

const taskContainer = document.getElementById('taskContainer');

const generateTasks = () => {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('listEl');
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox');
    if (task.completed === true) (input.checked = true); else (input.checked = false);
    label.textContent = task.description;
    li.appendChild(input);
    li.appendChild(label);
    taskContainer.appendChild(li);
  });
};

const createLi = () => {
  if (localStorage) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    generateTasks();
  } else generateTasks();
  const clearBtn = document.createElement('button');
  clearBtn.setAttribute('type', 'button');
  clearBtn.classList.add('clearBtn');
  clearBtn.textContent = 'Clear all completed';
  taskContainer.appendChild(clearBtn);
  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach((box, i) => {
    box.addEventListener('click', () => {
      if (box.checked === true) {
        tasks[i].completed = true;
      } else {
        tasks[i].completed = false;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
};

window.addEventListener('load', createLi);
