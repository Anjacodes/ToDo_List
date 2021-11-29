import _ from 'lodash';
import './style.css';

const tasks = [{description: 'Water plants', completed: false, index: 0}, {description: 'Feed the dog', completed: false, index: 1},{description: 'Do homework', completed: false, index: 2}];

const createLi = () => {
    const taskContainer = document.getElementById('taskContainer');
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.classList.add('listEl');
        let input = document.createElement('input');
        let label = document.createElement('label');
        input.setAttribute('type', 'checkbox');
        label.textContent = task.description;
        li.appendChild(input);
        li.appendChild(label);
        taskContainer.appendChild(li);
    });
}

window.addEventListener('load', createLi);