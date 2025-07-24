const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');

        addTaskBtn.addEventListener('click', function() {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
    
                const listItem = document.createElement('li');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'task-checkbox';

                const taskSpan = document.createElement('span');
                taskSpan.className = 'task-text';
                taskSpan.textContent = taskText;

                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remover';
                removeBtn.className = 'removeBtn';
                removeBtn.addEventListener('click', function() {
                    taskList.removeChild(listItem);
                });


                checkbox.addEventListener('change', function() {
                    if (checkbox.checked) {
                        taskSpan.style.textDecoration = 'line-through';
                        taskSpan.style.color = 'gray';
                    } else {
                        taskSpan.style.textDecoration = 'none';
                        taskSpan.style.color = 'black';
                    }
                });


                listItem.appendChild(checkbox);
                listItem.appendChild(taskSpan);
                listItem.appendChild(removeBtn);
                taskList.appendChild(listItem);
                taskInput.value = '';
            }
        });