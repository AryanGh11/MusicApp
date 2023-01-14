const playBtnTrending1 = document.querySelector(".play-btn-trending1");
const playBtnTrending2 = document.querySelector(".play-btn-trending2");
const playBtnTrending3 = document.querySelector(".play-btn-trending3");
const playBtnTrending4 = document.querySelector(".play-btn-trending4");
const playBtnTrending5 = document.querySelector(".play-btn-trending5");
const playBtnTrending6 = document.querySelector(".play-btn-trending6");

const playBtnNews1 = document.querySelector(".play-btn-news1");
const playBtnNews2 = document.querySelector(".play-btn-news2");
const playBtnNews3 = document.querySelector(".play-btn-news3");
const playBtnNews4 = document.querySelector(".play-btn-news4");
const playBtnNews5 = document.querySelector(".play-btn-news5");
const playBtnNews6 = document.querySelector(".play-btn-news6");

const musicTrending1 = document.querySelector(".bloody-music");
const musicTrending2 = document.querySelector(".future-music");
const musicTrending3 = document.querySelector(".sicko-music");
const musicTrending4 = document.querySelector(".blame-music");
const musicTrending5 = document.querySelector(".mafia-music");
const musicTrending6 = document.querySelector(".lovely-music");

const musicNews1 = document.querySelector(".sign-music");
const musicNews2 = document.querySelector(".runaway-music");
const musicNews3 = document.querySelector(".baby-music");
const musicNews4 = document.querySelector(".lose-music");
const musicNews5 = document.querySelector(".middle-music");
const musicNews6 = document.querySelector(".tv-music");

playBtnTrending1.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending1.play();
    const playBtn = document.querySelector(".play-btn-trending1");
    const pauseBtn = document.querySelector(".pause-btn1");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-4.7rem";
    pauseBtn.addEventListener("click", () => {
        musicTrending1.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnTrending2.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending2.play();
    const playBtn = document.querySelector(".play-btn-trending2");
    const pauseBtn = document.querySelector(".pause-btn2");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-4.7rem";
    pauseBtn.addEventListener("click", () => {
        musicTrending2.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnTrending3.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending3.play();
    const playBtn = document.querySelector(".play-btn-trending3");
    const pauseBtn = document.querySelector(".pause-btn3");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-4.7rem";
    pauseBtn.addEventListener("click", () => {
        musicTrending3.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnTrending4.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending4.play();
    const playBtn = document.querySelector(".play-btn-trending4");
    const pauseBtn = document.querySelector(".pause-btn4");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-4.7rem";
    pauseBtn.addEventListener("click", () => {
        musicTrending4.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnTrending5.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending5.play();
    const playBtn = document.querySelector(".play-btn-trending5");
    const pauseBtn = document.querySelector(".pause-btn5");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-4.7rem";
    pauseBtn.addEventListener("click", () => {
        musicTrending5.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnTrending6.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending6.play();
    const playBtn = document.querySelector(".play-btn-trending6");
    const pauseBtn = document.querySelector(".pause-btn6");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-4.7rem";
    pauseBtn.addEventListener("click", () => {
        musicTrending6.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnNews1.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicNews1.play();
    const playBtn = document.querySelector(".play-btn-news1");
    const pauseBtn = document.querySelector(".pause-btn7");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-5.8rem";
    pauseBtn.addEventListener("click", () => {
        musicNews1.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnNews2.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicNews2.play();
    const playBtn = document.querySelector(".play-btn-news2");
    const pauseBtn = document.querySelector(".pause-btn8");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-5.8rem";
    pauseBtn.addEventListener("click", () => {
        musicNews2.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnNews3.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicNews3.play();
    const playBtn = document.querySelector(".play-btn-news3");
    const pauseBtn = document.querySelector(".pause-btn9");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-5.8rem";
    pauseBtn.addEventListener("click", () => {
        musicNews3.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnNews4.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicNews4.play();
    const playBtn = document.querySelector(".play-btn-news4");
    const pauseBtn = document.querySelector(".pause-btn10");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-5.8rem";
    pauseBtn.addEventListener("click", () => {
        musicNews4.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnNews5.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicNews5.play();
    const playBtn = document.querySelector(".play-btn-news5");
    const pauseBtn = document.querySelector(".pause-btn11");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-5.8rem";
    pauseBtn.addEventListener("click", () => {
        musicNews5.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
playBtnNews6.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicNews6.play();
    const playBtn = document.querySelector(".play-btn-news6");
    const pauseBtn = document.querySelector(".pause-btn12");
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.right = "-5.8rem";
    pauseBtn.addEventListener("click", () => {
        musicNews6.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    })
});
