const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const appLogo = document.querySelector(".app-logo");
const hiddenLogin = document.querySelector(".hidden-login");

loginBtn.addEventListener("click", () => {
    const usernameValue = username.value;
    const passwordValue = password.value;
    const adminUsername = "AryanGh";
    const adminPassword = "aryangh11";
    const guestUser = "user";
    const guestPassword = "123456";
    if(usernameValue === adminUsername && passwordValue === adminPassword) {
        window.location = "./home.html";
    }
    if(usernameValue === adminUsername && passwordValue != adminPassword) {
        swal({
            title: "Passsword wrong!",
            text: "Please try again.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
        });
        password.value = "";
    }
    if(usernameValue === guestUser && passwordValue === guestPassword) {
        window.location = "./home.html";
    }
    else {
        const error = swal({
            title: "You don't have an account!",
            text: "Please create an account first.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
        });
        username.value = "";
        password.value = "";
    }
})
signupBtn.addEventListener("click", () => {
    swal({
        title: "Sign up",
        text: "For Sign up and Login to app, please contact Aryan!",
        button: "Ok",
        className: "swal-btn"
    });
})
appLogo.addEventListener("click", () => {
    playMusic = document.querySelector(".my-hidden");
    playMusic.currentTime = 0;
    playMusic.play();
})
hiddenLogin.addEventListener("click", () => {
    window.location = "./home.html";
})
