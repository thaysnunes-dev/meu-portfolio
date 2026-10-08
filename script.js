const projectButtons = document.querySelectorAll(".project-button");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const toastElement = document.getElementById("projectToast");
    const toastBody = toastElement.querySelector(".toast-body");

    toastBody.textContent = button.dataset.message;

    const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
    toast.show();
  });
});
