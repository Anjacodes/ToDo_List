import _ from 'lodash'; 
import './style.css';
import {
  tasks, deleteTask, clearAll, generateTasks,
} from './status.js';

import { checkBox } from './check.js';

let storedTasks = [];

const update = () => {
  if (localStorage.length !== 0) {
    storedTasks = JSON.parse(localStorage.getItem('tasks'));
    generateTasks(storedTasks);
    checkBox(storedTasks);
    deleteTask(storedTasks);
    clearAll(storedTasks);
  } else if (tasks.length !== 0) {
    generateTasks(tasks);
    checkBox(tasks);
    deleteTask(tasks);
    clearAll(tasks);
  }
};

window.addEventListener('load', update);
