//variables
const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");

//event listener
addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class = "fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  //task girilmeden enter'a basılırsa uyarı cıkıyor
  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = ""; //bir task girdikten sonra placeholder boş gözüksün diye yapıldı

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through"; //checkebuttona basınca üstüne cizgi cekmesi icin
  });

  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.style.display = "none";
    //   }); //delete butona basınca taskı silmesi icin

    //bunun için ikinci bir yöntem daha var:
    //   deleteButton.addEventListener("click", function (e) {
    //     let target = e.target;
    //     target.parentElement.parentElement.remove();
    //target delete buttona denk, parent element list item, bir sonraki parent element ise task a karşılık geliyor.
  });
});
