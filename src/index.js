document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  const description = document.getElementById("new-task-description")
  const tasks = document.getElementById("tasks")

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const li = document.createElement("li")
    li.innerHTML = description.value
    tasks.appendChild(li)
  })
  // your code here
});


