let buttonSubmitForm = document.querySelector(".data-form-button");
buttonSubmitForm.addEventListener("click", getDataForm);

function getDataForm(event) {
  event.preventDefault();
  let inputName = document.querySelector("#name");
  let inputEmail = document.querySelector("#email");
  let messageTextarea = document.querySelector("#message");
  const data = {
    name: inputName.value,
    email: inputEmail.value,
    message: messageTextarea.value,
  };

  console.log(data);
}
