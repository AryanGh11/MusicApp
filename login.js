const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const appLogo = document.querySelector(".app-logo");

loginBtn.addEventListener("click", () => {
    const usernameValue = username.value;
    const passwordValue = password.value;
    if(usernameValue === "AryanGh" && passwordValue === "aryangh11") {
        window.location = "./home.html";
    }
    if(usernameValue === "" || passwordValue === "") {
        swal({
            title: "Empty forms!",
            text: "Please complete all informations.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
        });
    }
    if(usernameValue != "AryanGh" && passwordValue != "aryangh11") {
        swal({
            title: "You don't have an account!",
            text: "Please create an account first.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
        });
        username.value = "";
        password.value = "";
    }
    if(usernameValue === "AryanGh" && passwordValue != "aryangh11") {
        swal({
            title: "Passsword wrong!",
            text: "Please try again.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
        });
        password.value = "";
    }
})
signupBtn.addEventListener("click", () => {
    window.location = "./signup.html"
})
appLogo.addEventListener("click", () => {
    playMusic = document.querySelector(".my-hidden");
    playMusic.currentTime = 0;
    playMusic.play();
})