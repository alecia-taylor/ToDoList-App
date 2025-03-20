function createTodo() {
    const note = document.getElementById('note').value;
    const li = document.createElement('li');
    li.textContent = note;
    document.getElementById('todos-container').appendChild(li);
  }