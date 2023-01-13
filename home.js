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

//news music should be okey

