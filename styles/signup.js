const fullname = document.querySelector(".fullname");
const email = document.querySelector(".email");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const appLogo = document.querySelector(".app-logo");

signupBtn.addEventListener("click", () => {
    const fullnameValue = fullname.value;
    const emailValue = email.value;
    const usernameValue = username.value;
    const passwordValue = password.value;
    
    if(usernameValue === "AryanGh") {
        swal({
            title: "Already use!",
            text: "This username is not Available.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
        });
        username.value = "";
    }
    if(emailValue === "mahdi.gholami875@gmail.com") {
        swal({
            title: "Already use!",
            text: "This email is not Available.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
        });
        email.value = "";
    }
    if(usernameValue === "AradGh") {
        swal({
            title: "Gamer!",
            text: "Arad Gh Games",
            icon: "success",
            button: "Yes",
            className: "swal-btn"
        });
    }
    if(usernameValue === "" || passwordValue === "" || fullnameValue === "" || emailValue === "") {
        swal({
            title: "Not completed!",
            text: "Please complete all informations.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
        });
    }
    if(passwordValue.length < 5 && passwordValue != "") {
        swal({
            title: "Passsword too less!",
            text: "Your password should be more than 6 characters.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
          });
    }
    if(passwordValue.length > 10) {
        swal({
            title: "Passsword too long!",
            text: "Your password shouldn't be more than 10 characters.",
            icon: "warning",
            button: "Ok",
            className: "swal-btn"
        });
    }
})
loginBtn.addEventListener("click", () => {
    window.location = "./index.html"
})
appLogo.addEventListener("click", () => {
    playMusic = document.querySelector(".my-hidden");
    playMusic.currentTime = 0;
    playMusic.play();
})