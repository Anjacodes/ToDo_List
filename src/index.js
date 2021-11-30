import _ from 'lodash'; // eslint-disable-line
import './style.css';

const tasks = [{ description: 'Water plants', completed: false, index: 0 }, { description: 'Feed the dog', completed: false, index: 1 }, { description: 'Do homework', completed: false, index: 2 }];

const createLi = () => {
  const taskContainer = document.getElementById('taskContainer');
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('listEl');
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.setAttribute('type', 'checkbox');
    label.textContent = task.description;
    li.appendChild(input);
    li.appendChild(label);
    taskContainer.appendChild(li);
  });
  const clearBtn = document.createElement('button');
  clearBtn.setAttribute('type', 'button');
  clearBtn.classList.add('clearBtn');
  clearBtn.textContent = 'Clear all completed';
  taskContainer.appendChild(clearBtn);
};

window.addEventListener('load', createLi);