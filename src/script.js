let buttonSubmitForm = document.querySelector(".data-form-button");
if (buttonSubmitForm) {
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
}

let navbarLinks = document.querySelector(".navbar-links");
let burguerButton = document.querySelector(".burguer-button");
let buttonCloseMenuMobile = document.querySelector(".close-menu");

if (burguerButton) {
  burguerButton.addEventListener("click", openMenuMobile);

  function openMenuMobile() {
    navbarLinks.classList.add("mobile");
    buttonCloseMenuMobile.classList.add("mobile");
    burguerButton.classList.add("mobile");
  }
}

if (buttonCloseMenuMobile) {
  buttonCloseMenuMobile.addEventListener("click", closeMenuMobile);

  function closeMenuMobile() {
    navbarLinks.classList.remove("mobile");
    buttonCloseMenuMobile.classList.remove("mobile");
    burguerButton.classList.remove("mobile");
  }
}
