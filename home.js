const heartBtn1 = document.querySelector(".heart-btn1");
const heartBtn2 = document.querySelector(".heart-btn2");
const heartBtn3 = document.querySelector(".heart-btn3");
const heartBtn4 = document.querySelector(".heart-btn4");
const heartBtn5 = document.querySelector(".heart-btn5");
const heartBtn6 = document.querySelector(".heart-btn6");
const heartBtn7 = document.querySelector(".heart-btn7");
const heartBtn8 = document.querySelector(".heart-btn8");
const heartBtn9 = document.querySelector(".heart-btn9");
const heartBtn10 = document.querySelector(".heart-btn10");
const heartBtn11 = document.querySelector(".heart-btn11");
const heartBtn12 = document.querySelector(".heart-btn12");
const heartBtn13 = document.querySelector(".heart-btn13");
const heartBtn14 = document.querySelector(".heart-btn14");

heartBtn1.addEventListener("click", () => {
    document.querySelector(".heart-btn1").style.color = "#FF3D3D";
})
heartBtn2.addEventListener("click", () => {
    document.querySelector(".heart-btn2").style.color = "#FF3D3D";
})
heartBtn3.addEventListener("click", () => {
    document.querySelector(".heart-btn3").style.color = "#FF3D3D";
})
heartBtn4.addEventListener("click", () => {
    document.querySelector(".heart-btn4").style.color = "#FF3D3D";
})
heartBtn5.addEventListener("click", () => {
    document.querySelector(".heart-btn5").style.color = "#FF3D3D";
})
heartBtn6.addEventListener("click", () => {
    document.querySelector(".heart-btn6").style.color = "#FF3D3D";
})
heartBtn7.addEventListener("click", () => {
    document.querySelector(".heart-btn7").style.color = "#FF3D3D";
})
heartBtn8.addEventListener("click", () => {
    document.querySelector(".heart-btn8").style.color = "#FF3D3D";
})
heartBtn9.addEventListener("click", () => {
    document.querySelector(".heart-btn9").style.color = "#FF3D3D";
})
heartBtn10.addEventListener("click", () => {
    document.querySelector(".heart-btn10").style.color = "#FF3D3D";
})
heartBtn11.addEventListener("click", () => {
    document.querySelector(".heart-btn11").style.color = "#FF3D3D";
})
heartBtn12.addEventListener("click", () => {
    document.querySelector(".heart-btn12").style.color = "#FF3D3D";
})
heartBtn13.addEventListener("click", () => {
    document.querySelector(".heart-btn13").style.color = "#FF3D3D";
})
heartBtn14.addEventListener("click", () => {
    document.querySelector(".heart-btn14").style.color = "#FF3D3D";
})

const playBtn1 = document.querySelector(".play-btn1");
const playBtn2 = document.querySelector(".play-btn2");
const playBtn3 = document.querySelector(".play-btn3");
const playBtn4 = document.querySelector(".play-btn4");
const playBtn5 = document.querySelector(".play-btn5");
const playBtn6 = document.querySelector(".play-btn6");
const playBtn7 = document.querySelector(".play-btn7");
const playBtn8 = document.querySelector(".play-btn8");
const playBtn9 = document.querySelector(".play-btn9");
const playBtn10 = document.querySelector(".play-btn10");
const playBtn11 = document.querySelector(".play-btn11");
const playBtn12 = document.querySelector(".play-btn12");
const playBtn13 = document.querySelector(".play-btn13");
const playBtn14 = document.querySelector(".play-btn14");

playBtn1.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());    
    const music = document.querySelector(".happier-than-ever");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
    const pauseBtnMusic1 = document.querySelector(".pause-btn2");
    pauseBtnMusic1.style.display = "block";
})
playBtn2.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());    
    const music = document.querySelector(".lovely");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn3.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".love-yourself");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn4.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".positions");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn5.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".one-last-time");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn6.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".coast");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn7.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".mistletoe");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn8.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".middle-of-the-night");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn9.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".anti-hero");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn10.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".i-love-you");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn11.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".dont-blame-me");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn12.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".blank-space");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn13.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".happier-than-ever");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
})
playBtn14.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    const music = document.querySelector(".happier-than-ever");
    music.play();
    const stopBtn = document.createElement("button");
    const stopBtnContent = document.createTextNode("Stop");
    const homePage = document.querySelector(".home-page");
    stopBtn.appendChild(stopBtnContent);
    homePage.appendChild(stopBtn);
    stopBtn.classList.add("stop-btn");
    stopBtn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
    })
});

const scrollBtn = document.querySelector(".app-logo");
scrollBtn.addEventListener("click", () => {
    window.scrollBy(0, -100000);
});
