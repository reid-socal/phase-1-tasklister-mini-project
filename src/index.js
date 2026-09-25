document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const input = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the page from reloading

    const taskText = input.value.trim();
    if (!taskText) return; // ignore empty submissions

    // Create the new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add a delete button (stretch goal)
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = ""; // clear the input for the next task
  });
});