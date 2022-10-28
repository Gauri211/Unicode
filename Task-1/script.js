let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let tasklist = document.getElementById('task_list');
let edit = document.getElementById("edit");
let output = '';
let url = 'https://jsonplaceholder.typicode.com/todos';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Clicked");
    formValidation();
})
let formValidation = () => {
    if(input.value === ""){
      msg.innerHTML = "Enter a task to add";
      console.log("Failure");
    }
    else {
      console.log("Success");
      console.log(input.value);
      msg.innerHTML = "";
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          title: input.value
        })
      }) 
        .then(response => response.json())
        .then(data => {
          let dataArr = [];
          dataArr.push(data);
          renderTasks(dataArr);
          input.value = '';
        })
    }
};



let removeTask = (e) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            e.parentElement.remove();
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    
}

let editTask = (e) => {
    if(e.textContent == "Done") {
        e.textContent = "Edit";
        let currTaskName = e.previousElementSibling.value;
        let currHeading = document.createElement('h5');
        currHeading.className = "flex-grow-1";
        currHeading.textContent = currTaskName;
        e.parentElement.replaceChild(currHeading, e.previousElementSibling);
    }
    else {
        e.textContent = "Done";
        let currTaskName = e.previousElementSibling.textContent;
        let currInput = document.createElement('input');
        currInput.type = "text";
        currInput.id = "input";
        currInput.value = currTaskName;
        e.parentElement.replaceChild(currInput, e.previousElementSibling);
    }
  }


fetch(url)
	.then((response) => {
    return response.json();
  })
  .then(data => renderTasks(data))

//   tasklist.addEventListener('click',(e) => {
//     console.log("Hello");
//     e.preventDefault();
//     let removeTask = e.target.id == 'delete-task';
//     let editTask = e.target.id == 'edit-task';
//     let id = e.target.parentElement.dataset.id;
// //-------------- Method: DELETE ------------------------//
//     if(removeTask) {
//       fetch(`${url}/${id}`, {
//         method: 'DELETE'
//       })
//       .then(response => response.json())
//       .then(() => location.reload())
//     }
//   })


  let renderTasks = (task) => {
    task.forEach(task => {
      console.log(task);
      output += `<li class="list-group-item d-flex justify-content-between">
      <input type="checkbox" id="completed" onclick="taskDone()">
      <h5 class="flex-grow-1">${task.title}</h5>
      <button class="btn btn-warning mx-3" onclick="editTask(this)">Edit</button>
      <button class="btn btn-danger" onclick="removeTask(this)">Delete</button>
      <span id="edit"></span>
      <span id="date"></span>
  </li>`
    });
    tasklist.innerHTML = output;
  }
  
  let completedTasks = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {   
        renderTasks(data);
    })
    
  }