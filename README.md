
Hello everybody! 👋 </br>
✨ Welcome to the to-do List project! This project is a simple yet functional to-do list application built using HTML, CSS, and JavaScript. It allows users to add, complete, and delete tasks efficiently. The application is designed to be intuitive and user-friendly, making it easy to manage daily tasks and to-dos.
## 👀 Overview

### 📷 Screenshot
![screencapture-tucecifci-github-io-To-do-List-2024-06-26-14_50_03](https://github.com/tucecifci/To-do-List/assets/151346784/dc616cf2-9db4-47c2-9e57-697c128bde3f)

![screencapture-tucecifci-github-io-To-do-List-2024-06-26-14_52_13](https://github.com/tucecifci/To-do-List/assets/151346784/ba713307-27ce-4cc2-8bfd-8a4941b65edb)

<img width="1462" alt="Ekran Resmi 2024-06-26 14 52 40" src="https://github.com/tucecifci/To-do-List/assets/151346784/7cec6bc1-8c13-4c3c-9262-0f8568ef79da">



### 🔗 Links

- https://tucecifci.github.io/To-do-List/

## My process

### 💡 Built with

- HTML: Structures the application layout.
- CSS: Styles the application, ensuring a clean and responsive design.
- JavaScript: Powers the application’s functionality, including adding, completing, and deleting tasks.
  
### 🧠 What I learned

- Event Handling: How to use JavaScript to handle user interactions through event listeners.
- DOM Manipulation: Techniques to dynamically update the DOM based on user actions.
- CSS Styling: Improved skills in creating responsive and visually appealing designs.
- JavaScript Logic: Enhanced understanding of managing application state and implementing interactive features.


```javascript
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

```

### 👩🏼‍💻 Features

- Add Tasks: Users can input a task and add it to the list by pressing the plus sign.
- Mark Tasks as Complete: Users can click on a task to mark it as complete, which will strike through the task.
- Delete Tasks: Users can remove tasks from the list.
- Responsive Design: The application adjusts to different screen sizes for mobile and desktop use.

### 🤔 How to Use

1.Add a Task:
- Type the task in the input field and press Enter.
2. Mark a Task as Complete:
- Click on a task to mark it as complete.
3. Delete a Task:
- Click the delete button next to the task to remove it from the list.
 

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
