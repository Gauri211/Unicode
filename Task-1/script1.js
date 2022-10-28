console.log("Hello");
task = document.getElementById("table_body");
// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then((response) => {
//     return response.json();
//   })
//   .then(data => {
    
    let objectData;
    let tasklist = "";
    for(i = 0;i<10;i++) {
        // console.log(objectData[i].title)
      tasklist.innerHTML += `<tr>
    //   <td>${objectData[i].title}</td>
      <td><button class="btn btn-warning mx-3" onclick="editTask(this)">Edit</button></td>
      <td><button class="btn btn-danger" onclick="removeTask(this)">Delete</button></td>
      <td id="edit"></td>
    </tr>`;
    }
    // task.innerHTML = tasklist;
// })
// .catch(err => console.error(err))