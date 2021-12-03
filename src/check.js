const taskContainer = document.getElementById('taskContainer');

const checkBox = (arr) => {
  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach((box, i) => {
    box.addEventListener('click', () => {
      if (arr[i].completed) console.log('true');
      localStorage.setItem('tasks', JSON.stringify(arr));
    });
  });
};

const clearCont = () => {
  taskContainer.innerHTML = '';
};

export { checkBox, clearCont };