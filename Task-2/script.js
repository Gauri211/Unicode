let url = "https://inspectbackend.herokuapp.com/todo/";
let taskInput = document.getElementById('addtaskinput');
let dateInput = document.getElementById('add-date-input');
let timeInput = document.getElementById('add-time-input');
let addTaskBtn = document.getElementById('add-task-btn');
let deleteAll = document.getElementById('delete-all');
let tasklist = document.getElementById("task_list");
let todos = '';


const loadData = async () => {
    try{
        const res = await fetch(url);
        console.log(res.ok);
        const data = await res.json(); 
        return data;
    } catch(err) {
        console.log(err);
    }};
 
loadData().then(data => renderTasks(data));

let renderTasks = (task) => {
    task.forEach(task => {
        console.log(task);
        todos += `<tr data-id=${task._id}>
        <th id="task-name">${task.work}</th>
        <td>${task.date}</td>
        <td id="status-input">${task.status}</td>
        <td><button class="btn btn-secondary" type="submit" id="edit-task">Edit</button> </td>
        <td><button class="btn btn-danger" type="submit" id="delete-task">Delete</button> </td>
      </tr>`
    })
    tasklist.innerHTML = todos;
}


addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicked");
    formValidation();
})
let formValidation = () => {
    if(taskInput.value === "" || dateInput.value == 0 || timeInput.value == 0){
        alert("Please enter the values")
        console.log("Failure");
    }
    else {
        console.log("Success");
        console.log(taskInput.value);
        console.log(dateInput.value);
        console.log(timeInput.value);
        selectElement = document.querySelector('#inputGroupSelect01');
        output = selectElement.options[selectElement.selectedIndex].value;
        console.log(output);
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          work: taskInput.value,
          status: output
        })
      }) 
        .then(response => response.json())
        .then(data => {
            let dataArr = [];
            dataArr.push(data);
            renderTasks(dataArr);
            taskInput.value = ''
            output = '';
        })
    }
};

  tasklist.addEventListener('click',(e) => {
    e.preventDefault();
    let removeTask = e.target.id == 'delete-task';
    let editTask = e.target.id == 'edit-task';
    let id = e.target.parentElement.parentElement.dataset.id;
//-------------- Method: DELETE ------------------------//
    if(removeTask) {
      console.log("Hello");
      fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(() => location.reload())
    }

    if(editTask) {
      const parent = e.target.parentElement.parentElement;
      let taskName = parent.querySelector('#task-name').textContent;
      taskInput.value = taskName;
    }

    addTaskBtn.addEventListener('click', () => {
      fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          work: taskInput.value,
          status: output
        })
      })
      .then(res => res.json())
      .then(() => location.reload())
    })
  })



