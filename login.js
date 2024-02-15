const username = document.querySelector(".username");
const password = document.querySelector(".password");
const login = document.querySelector(".login");
const createAccount = document.querySelector(".create-account");
const appLogo = document.querySelector(".logo-text");

createAccount.addEventListener("click", () =>
  window.location.href("https://web.telegram.org")
);

login.addEventListener("click", () => {
  const usernameValue = username.value;
  const passwordValue = password.value;
  if (usernameValue === "" || passwordValue === "") {
    swal({
      title: "Empty informations",
      text: "Please inter your username and password",
      icon: "warning",
      button: "Ok",
      className: "swal-btn",
    });
  }
  if (usernameValue === "AryanGh" && passwordValue === "@AryanGholami11") {
    window.location = "./home.html";
  }
  if (usernameValue === "user" && passwordValue === "123456") {
    window.location = "./home.html";
  }
  if (usernameValue === "User" && passwordValue === "123456") {
    window.location = "./home.html";
  } else {
    swal({
      title: "You don't have an account",
      text: "Please create an account first, contact AryanGh",
      icon: "warning",
      button: "Ok",
      className: "swal-btn",
    });
  }
});
appLogo.addEventListener("click", () => {
  window.location = "./home.html";
});
