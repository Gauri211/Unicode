let url = "https://inspectbackend.herokuapp.com/todo/";
let taskInput = document.getElementById('addtaskinput');
let dateInput = document.getElementById('add-date-input');
let timeInput = document.getElementById('add-time-input');
let addTaskBtn = document.getElementById('add-task-btn');
let deleteAll = document.getElementById('delete-all');
let tasklist = document.getElementById("task_list");
let todos = '';


// const loadData = async () => {
//     try{
//         const res = await fetch(url);
//         console.log(res.ok);
//         const data = await res.json(); 
//         return data;
//     } catch(err) {
//         console.log(err);
//     }};
 
// loadData().then(data => renderTasks(data));

// const data = await axios.get(url).then(res => res.data);

axios.get(url).then(res => {
  renderTasks(res.data)
})
// fetch(url)
// 	.then((response) => {
//     return response.json();
//   })
//   .then(data => renderTasks(data))

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
    if(taskInput.value === ""){
        alert("Please enter the values")
        console.log("Failure");
    }
    else {
        console.log("Success");
        selectElement = document.querySelector('#inputGroupSelect01');
        output = selectElement.options[selectElement.selectedIndex].value;
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
// const addTask = async (e) => {
  
//   try {
//     const resp = await axios.post(url, { work: work, status: status});
//     console.log(resp.data);
//   }catch (err) {
//     console.log(err.response);
//   }
// }
  tasklist.addEventListener('click',(e) => {
    e.preventDefault();
    let editTask = e.target.id == 'edit-task';
    var deleteTask = e.target.id == 'delete-task';
    // let id = e.target.parentElement.parentElement.dataset.id;
//-------------- Method: DELETE ------------------------//
    
    console.log(e.target.parentElement.parentElement.dataset.id);
    
    if(deleteTask) {
    var data = JSON.stringify({
        "_id": `${e.target.parentElement.parentElement.dataset.id}`
    });
  
    var config = {
      method: 'delete',
      url: 'https://inspectbackend.herokuapp.com/todo/',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .then(() => location.reload())
    .catch(function (error) {
      console.log(error);
    });
    }
  //   const parent = e.target.parentElement.parentElement;
  //   let taskName = parent.querySelector('#task-name').textContent;
  //   taskInput.value = taskName;
  //   var data = JSON.stringify({
  //     "_id": `${e.target.parentElement.dataset.id}`,
  //     "work": `${taskName}`,
  //     "status": `${output}`
  //   });
    
  //   var config = {
  //     method: 'patch',
  //     url: 'https://inspectbackend.herokuapp.com/todo/',
  //     headers: { 
  //       'Accept': 'application/json', 
  //       'Content-Type': 'application/json'
  //     },
  //     data : data
  //   };
    
  //   axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
   })


