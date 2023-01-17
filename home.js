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

const poster1 = document.querySelector(".poster1");

const singer1 = document.querySelector(".singer1");
const singer2 = document.querySelector(".singer2");
const singer3 = document.querySelector(".singer3");
const singer4 = document.querySelector(".singer4");
const singer5 = document.querySelector(".singer5");
const singer6 = document.querySelector(".singer6");

const closeBtn = document.querySelector(".close-btn");

playBtnTrending1.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending1.play();
    const musicBar = document.createElement("div");
    const content = document.querySelector(".content");
    content.appendChild(musicBar);
    musicBar.classList.add("music-bar");

    const musicNameSingerImg = document.createElement("div");
    musicBar.appendChild(musicNameSingerImg);
    musicNameSingerImg.classList.add("music-name-singer-img");
    
    const musicNameSinger = document.createElement("div");
    musicNameSingerImg.appendChild(musicNameSinger);
    musicNameSinger.classList.add("music-name-singer");

    const musicName = document.createElement("p");
    const musicNameContent = document.createTextNode("Bloody Mary");
    musicName.appendChild(musicNameContent);
    musicNameSinger.appendChild(musicName);
    musicName.classList.add("music-name");

    const musicSinger = document.createElement("p");
    const musicSingerContent = document.createTextNode("Lady Gaga");
    musicSinger.appendChild(musicSingerContent);
    musicNameSinger.appendChild(musicSinger);
    musicSinger.classList.add("music-singer");
    
    const musicSingerImg = document.createElement("img");
    musicSingerImg.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b273a47c0e156ea3cebe37fdcab8");
    musicNameSingerImg.appendChild(musicSingerImg);
    musicSingerImg.classList.add("music-bar-img");

    const musicBarBtns = document.createElement("div");
    musicBar.appendChild(musicBarBtns);
    musicBarBtns.classList.add("music-bar-btns");

    const musicBarForwardBtn = document.createElement("img");
    musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarForwardBtn);
    musicBarForwardBtn.classList.add("music-bar-forward");

    const musicBarPauseBtn = document.createElement("img");
    musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarPauseBtn);
    musicBarPauseBtn.classList.add("music-bar-pause");
    
    musicBarPauseBtn.addEventListener("click", () => {
        musicTrending1.pause();
        const musicBarPlay = document.createElement("img");
        musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPlay);
        musicBarBackBtn.classList.add("music-bar-play");
        musicBarPauseBtn.style.display = "none";
        musicBarPlay.addEventListener("click", () => {
            musicTrending1.play();
            musicBarPlay.style.display = "none";
            musicBarPauseBtn.style.display = "block";
        })
    })

    const musicBarBackBtn = document.createElement("img");
    musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarBackBtn);
    musicBarBackBtn.classList.add("music-bar-back");
    
    musicTrending1.addEventListener("ended", () => {
        musicTrending1.currentTime = 0;
        musicTrending1.play();
    });

    musicBar.addEventListener("click", () => {
        const musicPage = document.createElement("div");
        content.appendChild(musicPage);
        musicPage.classList.add("music-page");
    })
})

playBtnTrending2.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending2.play();
    const musicBar = document.createElement("div");
    const content = document.querySelector(".content");
    content.appendChild(musicBar);
    musicBar.classList.add("music-bar");

    const musicNameSingerImg = document.createElement("div");
    musicBar.appendChild(musicNameSingerImg);
    musicNameSingerImg.classList.add("music-name-singer-img");
    
    const musicNameSinger = document.createElement("div");
    musicNameSingerImg.appendChild(musicNameSinger);
    musicNameSinger.classList.add("music-name-singer");

    const musicName = document.createElement("p");
    const musicNameContent = document.createTextNode("Hold That Heat");
    musicName.appendChild(musicNameContent);
    musicNameSinger.appendChild(musicName);
    musicName.classList.add("music-name");

    const musicSinger = document.createElement("p");
    const musicSingerContent = document.createTextNode("Travis Scott");
    musicSinger.appendChild(musicSingerContent);
    musicNameSinger.appendChild(musicSinger);
    musicSinger.classList.add("music-singer");
    
    const musicSingerImg = document.createElement("img");
    musicSingerImg.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b273935d8d5369bc55e74a39303e");
    musicNameSingerImg.appendChild(musicSingerImg);
    musicSingerImg.classList.add("music-bar-img");

    const musicBarBtns = document.createElement("div");
    musicBar.appendChild(musicBarBtns);
    musicBarBtns.classList.add("music-bar-btns");

    const musicBarForwardBtn = document.createElement("img");
    musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarForwardBtn);
    musicBarForwardBtn.classList.add("music-bar-forward");

    const musicBarPauseBtn = document.createElement("img");
    musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarPauseBtn);
    musicBarPauseBtn.classList.add("music-bar-pause");
    
    musicBarPauseBtn.addEventListener("click", () => {
        musicTrending2.pause();
        const musicBarPlay = document.createElement("img");
        musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPlay);
        musicBarBackBtn.classList.add("music-bar-play");
        musicBarPauseBtn.style.display = "none";
        musicBarPlay.addEventListener("click", () => {
            musicTrending2.play();
            musicBarPlay.style.display = "none";
            musicBarPauseBtn.style.display = "block";
        })
    })

    const musicBarBackBtn = document.createElement("img");
    musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarBackBtn);
    musicBarBackBtn.classList.add("music-bar-back");

    musicTrending2.addEventListener("ended", () => {
        musicTrending2.currentTime = 0;
        musicTrending2.play();
    });
})
playBtnTrending3.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending3.play();
    const musicBar = document.createElement("div");
    const content = document.querySelector(".content");
    content.appendChild(musicBar);
    musicBar.classList.add("music-bar");

    const musicNameSingerImg = document.createElement("div");
    musicBar.appendChild(musicNameSingerImg);
    musicNameSingerImg.classList.add("music-name-singer-img");
    
    const musicNameSinger = document.createElement("div");
    musicNameSingerImg.appendChild(musicNameSinger);
    musicNameSinger.classList.add("music-name-singer");

    const musicName = document.createElement("p");
    const musicNameContent = document.createTextNode("Waiting for nakhl...");
    musicName.appendChild(musicNameContent);
    musicNameSinger.appendChild(musicName);
    musicName.classList.add("music-name");

    const musicSinger = document.createElement("p");
    const musicSingerContent = document.createTextNode("Travis Scott");
    musicSinger.appendChild(musicSingerContent);
    musicNameSinger.appendChild(musicSinger);
    musicSinger.classList.add("music-singer");
    
    const musicSingerImg = document.createElement("img");
    musicSingerImg.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b2733e9c9181fb672f0a2e96f525");
    musicNameSingerImg.appendChild(musicSingerImg);
    musicSingerImg.classList.add("music-bar-img");

    const musicBarBtns = document.createElement("div");
    musicBar.appendChild(musicBarBtns);
    musicBarBtns.classList.add("music-bar-btns");

    const musicBarForwardBtn = document.createElement("img");
    musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarForwardBtn);
    musicBarForwardBtn.classList.add("music-bar-forward");

    const musicBarPauseBtn = document.createElement("img");
    musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarPauseBtn);
    musicBarPauseBtn.classList.add("music-bar-pause");
    
    musicBarPauseBtn.addEventListener("click", () => {
        musicTrending3.pause();
        const musicBarPlay = document.createElement("img");
        musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPlay);
        musicBarBackBtn.classList.add("music-bar-play");
        musicBarPauseBtn.style.display = "none";
        musicBarPlay.addEventListener("click", () => {
            musicTrending3.play();
            musicBarPlay.style.display = "none";
            musicBarPauseBtn.style.display = "block";
        })
    })

    const musicBarBackBtn = document.createElement("img");
    musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarBackBtn);
    musicBarBackBtn.classList.add("music-bar-back");

    musicTrending3.addEventListener("ended", () => {
        musicTrending3.currentTime = 0;
        musicTrending3.play();
    });
})
playBtnTrending4.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending4.play();
    const musicBar = document.createElement("div");
    const content = document.querySelector(".content");
    content.appendChild(musicBar);
    musicBar.classList.add("music-bar");

    const musicNameSingerImg = document.createElement("div");
    musicBar.appendChild(musicNameSingerImg);
    musicNameSingerImg.classList.add("music-name-singer-img");
    
    const musicNameSinger = document.createElement("div");
    musicNameSingerImg.appendChild(musicNameSinger);
    musicNameSinger.classList.add("music-name-singer");

    const musicName = document.createElement("p");
    const musicNameContent = document.createTextNode("Don't Blame Me");
    musicName.appendChild(musicNameContent);
    musicNameSinger.appendChild(musicName);
    musicName.classList.add("music-name");

    const musicSinger = document.createElement("p");
    const musicSingerContent = document.createTextNode("Taylor Swift");
    musicSinger.appendChild(musicSingerContent);
    musicNameSinger.appendChild(musicSinger);
    musicSinger.classList.add("music-singer");
    
    const musicSingerImg = document.createElement("img");
    musicSingerImg.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b");
    musicNameSingerImg.appendChild(musicSingerImg);
    musicSingerImg.classList.add("music-bar-img");

    const musicBarBtns = document.createElement("div");
    musicBar.appendChild(musicBarBtns);
    musicBarBtns.classList.add("music-bar-btns");

    const musicBarForwardBtn = document.createElement("img");
    musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarForwardBtn);
    musicBarForwardBtn.classList.add("music-bar-forward");

    const musicBarPauseBtn = document.createElement("img");
    musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarPauseBtn);
    musicBarPauseBtn.classList.add("music-bar-pause");
    
    musicBarPauseBtn.addEventListener("click", () => {
        musicTrending4.pause();
        const musicBarPlay = document.createElement("img");
        musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPlay);
        musicBarBackBtn.classList.add("music-bar-play");
        musicBarPauseBtn.style.display = "none";
        musicBarPlay.addEventListener("click", () => {
            musicTrending4.play();
            musicBarPlay.style.display = "none";
            musicBarPauseBtn.style.display = "block";
        })
    })

    const musicBarBackBtn = document.createElement("img");
    musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarBackBtn);
    musicBarBackBtn.classList.add("music-bar-back");

    musicTrending4.addEventListener("ended", () => {
        musicTrending4.currentTime = 0;
        musicTrending4.play();
    });
})
playBtnTrending5.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending5.play();
    const musicBar = document.createElement("div");
    const content = document.querySelector(".content");
    content.appendChild(musicBar);
    musicBar.classList.add("music-bar");

    const musicNameSingerImg = document.createElement("div");
    musicBar.appendChild(musicNameSingerImg);
    musicNameSingerImg.classList.add("music-name-singer-img");
    
    const musicNameSinger = document.createElement("div");
    musicNameSingerImg.appendChild(musicNameSinger);
    musicNameSinger.classList.add("music-name-singer");

    const musicName = document.createElement("p");
    const musicNameContent = document.createTextNode("In Mafia");
    musicName.appendChild(musicNameContent);
    musicNameSinger.appendChild(musicName);
    musicName.classList.add("music-name");

    const musicSinger = document.createElement("p");
    const musicSingerContent = document.createTextNode("Travis Scott");
    musicSinger.appendChild(musicSingerContent);
    musicNameSinger.appendChild(musicSinger);
    musicSinger.classList.add("music-singer");
    
    const musicSingerImg = document.createElement("img");
    musicSingerImg.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b273eba68473429f9f4eaf1943d0");
    musicNameSingerImg.appendChild(musicSingerImg);
    musicSingerImg.classList.add("music-bar-img");

    const musicBarBtns = document.createElement("div");
    musicBar.appendChild(musicBarBtns);
    musicBarBtns.classList.add("music-bar-btns");

    const musicBarForwardBtn = document.createElement("img");
    musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarForwardBtn);
    musicBarForwardBtn.classList.add("music-bar-forward");

    const musicBarPauseBtn = document.createElement("img");
    musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarPauseBtn);
    musicBarPauseBtn.classList.add("music-bar-pause");
    
    musicBarPauseBtn.addEventListener("click", () => {
        musicTrending5.pause();
        const musicBarPlay = document.createElement("img");
        musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPlay);
        musicBarBackBtn.classList.add("music-bar-play");
        musicBarPauseBtn.style.display = "none";
        musicBarPlay.addEventListener("click", () => {
            musicTrending5.play();
            musicBarPlay.style.display = "none";
            musicBarPauseBtn.style.display = "block";
        })
    })

    const musicBarBackBtn = document.createElement("img");
    musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarBackBtn);
    musicBarBackBtn.classList.add("music-bar-back");

    musicTrending5.addEventListener("ended", () => {
        musicTrending5.currentTime = 0;
        musicTrending5.play();
    });
})
playBtnTrending6.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(el => el.pause());
    musicTrending6.play();
    const musicBar = document.createElement("div");
    const content = document.querySelector(".content");
    content.appendChild(musicBar);
    musicBar.classList.add("music-bar");

    const musicNameSingerImg = document.createElement("div");
    musicBar.appendChild(musicNameSingerImg);
    musicNameSingerImg.classList.add("music-name-singer-img");
    
    const musicNameSinger = document.createElement("div");
    musicNameSingerImg.appendChild(musicNameSinger);
    musicNameSinger.classList.add("music-name-singer");

    const musicName = document.createElement("p");
    const musicNameContent = document.createTextNode("Lovely");
    musicName.appendChild(musicNameContent);
    musicNameSinger.appendChild(musicName);
    musicName.classList.add("music-name");

    const musicSinger = document.createElement("p");
    const musicSingerContent = document.createTextNode("Billie Eiish");
    musicSinger.appendChild(musicSingerContent);
    musicNameSinger.appendChild(musicSinger);
    musicSinger.classList.add("music-singer");
    
    const musicSingerImg = document.createElement("img");
    musicSingerImg.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b2738a3f0a3ca7929dea23cd274c");
    musicNameSingerImg.appendChild(musicSingerImg);
    musicSingerImg.classList.add("music-bar-img");

    const musicBarBtns = document.createElement("div");
    musicBar.appendChild(musicBarBtns);
    musicBarBtns.classList.add("music-bar-btns");

    const musicBarForwardBtn = document.createElement("img");
    musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarForwardBtn);
    musicBarForwardBtn.classList.add("music-bar-forward");

    const musicBarPauseBtn = document.createElement("img");
    musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarPauseBtn);
    musicBarPauseBtn.classList.add("music-bar-pause");
    
    musicBarPauseBtn.addEventListener("click", () => {
        musicTrending6.pause();
        const musicBarPlay = document.createElement("img");
        musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPlay);
        musicBarBackBtn.classList.add("music-bar-play");
        musicBarPauseBtn.style.display = "none";
        musicBarPlay.addEventListener("click", () => {
            musicTrending6.play();
            musicBarPlay.style.display = "none";
            musicBarPauseBtn.style.display = "block";
        })
    })

    const musicBarBackBtn = document.createElement("img");
    musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
    musicBarBtns.appendChild(musicBarBackBtn);
    musicBarBackBtn.classList.add("music-bar-back");
    
    musicTrending6.addEventListener("ended", () => {
        musicTrending6.currentTime = 0;
        musicTrending6.play();
    });
})
singer1.addEventListener("click", () => {
    const singerBillie = document.createElement("div");
    const contentDiv = document.querySelector(".content");
    contentDiv.appendChild(singerBillie);
    singerBillie.classList.add("singer-billie");
    singerBillie.style.display = "block";

    const singerHeader = document.createElement("div");
    singerBillie.appendChild(singerHeader);
    singerHeader.classList.add("singer-header");

    const textVerified = document.createElement("div");
    singerHeader.appendChild(textVerified);
    textVerified.classList.add("text-verified");

    const singerName = document.createElement("div");
    textVerified.appendChild(singerName);
    singerName.classList.add("singer-name");

    const singerNameP = document.createElement("p");
    const singerNamePContent = document.createTextNode("Billie Eilish");
    singerNameP.appendChild(singerNamePContent);
    singerName.appendChild(singerNameP);

    const singerNameImg = document.createElement("img");
    singerNameImg.setAttribute("src", "./media/icons/verified.svg");
    singerName.appendChild(singerNameImg);

    const listeners = document.createElement("p");
    const listenersContent = document.createTextNode("50,176,491 monthly listeners");
    listeners.appendChild(listenersContent);
    textVerified.appendChild(listeners);
    listeners.classList.add("listeners")

    const singerImg = document.createElement("img");
    singerImg.setAttribute("src", "./media/icons/play-all-btn.svg");
    singerHeader.appendChild(singerImg);

    const singerBackImg = document.createElement("div");
    singerBillie.appendChild(singerBackImg);
    singerBackImg.classList.add("singer-back-img");

    const singerBackImgShadow = document.createElement("div");
    singerBillie.appendChild(singerBackImgShadow);
    singerBackImgShadow.classList.add("background-shadow");

    const downloadShuffleBtn = document.createElement("div");
    singerBillie.appendChild(downloadShuffleBtn);
    downloadShuffleBtn.classList.add("download-shuffle-btn");

    const closeBtn = document.createElement("img");
    closeBtn.setAttribute("src", "./media/icons/close-btn.svg");
    singerBillie.appendChild(closeBtn);
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
        singerBillie.style.display = "none";
    })

    //music 1

    const singerMusic1 = document.createElement("div");
    singerBillie.appendChild(singerMusic1);
    singerMusic1.classList.add("singer-music");
    singerMusic1.classList.add("singer-music1");

    const singerMusicNameImg1 = document.createElement("div");
    singerMusic1.appendChild(singerMusicNameImg1);
    singerMusicNameImg1.classList.add("singer-music-name-img");
    singerMusicNameImg1.classList.add("singer-music-name-img1");

    const singerMusicPlay1 = document.createElement("img");
    singerMusicPlay1.setAttribute("src", "./media/icons/singer-music-play.svg");
    singerMusic1.appendChild(singerMusicPlay1);
    singerMusicPlay1.classList.add("singer-music-play");
    singerMusicPlay1.classList.add("singer-music-play1");

    const singerMusicImg1 = document.createElement("img");
    singerMusicImg1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/f/fa/Billie_Eilish_and_Khalid_-_Lovely.png");
    singerMusicNameImg1.appendChild(singerMusicImg1);
    singerMusicImg1.classList.add("singer-music-img");
    singerMusicImg1.classList.add("singer-music-img1");

    const singerMusicName1 = document.createElement("p");
    const singerMusicNameContent1 = document.createTextNode("Lovely");
    singerMusicName1.appendChild(singerMusicNameContent1);
    singerMusicNameImg1.appendChild(singerMusicName1);

    singerMusicPlay1.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
        const music = document.querySelector(".singer-billie-lovely");
        music.play();
        const musicBar = document.createElement("div");
        const content = document.querySelector(".content");
        content.appendChild(musicBar);
        musicBar.classList.add("music-bar");

        const musicNameSingerImg = document.createElement("div");
        musicBar.appendChild(musicNameSingerImg);
        musicNameSingerImg.classList.add("music-name-singer-img");
        
        const musicNameSinger = document.createElement("div");
        musicNameSingerImg.appendChild(musicNameSinger);
        musicNameSinger.classList.add("music-name-singer");

        const musicName = document.createElement("p");
        const musicNameContent = document.createTextNode("Lovely");
        musicName.appendChild(musicNameContent);
        musicNameSinger.appendChild(musicName);
        musicName.classList.add("music-name");

        const musicSinger = document.createElement("p");
        const musicSingerContent = document.createTextNode("Billie Eilish");
        musicSinger.appendChild(musicSingerContent);
        musicNameSinger.appendChild(musicSinger);
        musicSinger.classList.add("music-singer");
        
        const musicSingerImg = document.createElement("img");
        musicSingerImg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/f/fa/Billie_Eilish_and_Khalid_-_Lovely.png");
        musicNameSingerImg.appendChild(musicSingerImg);
        musicSingerImg.classList.add("music-bar-img");

        const musicBarBtns = document.createElement("div");
        musicBar.appendChild(musicBarBtns);
        musicBarBtns.classList.add("music-bar-btns");

        const musicBarForwardBtn = document.createElement("img");
        musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarForwardBtn);
        musicBarForwardBtn.classList.add("music-bar-forward");

        const musicBarPauseBtn = document.createElement("img");
        musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPauseBtn);
        musicBarPauseBtn.classList.add("music-bar-pause");
        
        musicBarPauseBtn.addEventListener("click", () => {
            music.pause();
            const musicBarPlay = document.createElement("img");
            musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
            musicBarBtns.appendChild(musicBarPlay);
            musicBarBackBtn.classList.add("music-bar-play");
            musicBarPauseBtn.style.display = "none";
            musicBarPlay.addEventListener("click", () => {
                music.play();
                musicBarPlay.style.display = "none";
                musicBarPauseBtn.style.display = "block";
            })
        })

        const musicBarBackBtn = document.createElement("img");
        musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarBackBtn);
        musicBarBackBtn.classList.add("music-bar-back");

        music.addEventListener("ended", () => {
            music.currentTime = 0;
            music.play();
        });
    })

    //music 2

    const singerMusic2 = document.createElement("div");
    singerBillie.appendChild(singerMusic2);
    singerMusic2.classList.add("singer-music");
    singerMusic2.classList.add("singer-music2");

    const singerMusicNameImg2 = document.createElement("div");
    singerMusic2.appendChild(singerMusicNameImg2);
    singerMusicNameImg2.classList.add("singer-music-name-img");
    singerMusicNameImg2.classList.add("singer-music-name-img2");

    const singerMusicPlay2 = document.createElement("img");
    singerMusicPlay2.setAttribute("src", "./media/icons/singer-music-play.svg");
    singerMusic2.appendChild(singerMusicPlay2);
    singerMusicPlay2.classList.add("singer-music-play");
    singerMusicPlay2.classList.add("singer-music-play2");

    const singerMusicImg2 = document.createElement("img");
    singerMusicImg2.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b2737a4781629469bb83356cd318");
    singerMusicNameImg2.appendChild(singerMusicImg2);
    singerMusicImg2.classList.add("singer-music-img");
    singerMusicImg2.classList.add("singer-music-img2");

    const singerMusicName2 = document.createElement("p");
    const singerMusicNameContent2 = document.createTextNode("TV");
    singerMusicName2.appendChild(singerMusicNameContent2);
    singerMusicNameImg2.appendChild(singerMusicName2);

    singerMusicPlay2.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
        const music = document.querySelector(".singer-billie-tv");
        music.play();
        const musicBar = document.createElement("div");
        const content = document.querySelector(".content");
        content.appendChild(musicBar);
        musicBar.classList.add("music-bar");

        const musicNameSingerImg = document.createElement("div");
        musicBar.appendChild(musicNameSingerImg);
        musicNameSingerImg.classList.add("music-name-singer-img");
        
        const musicNameSinger = document.createElement("div");
        musicNameSingerImg.appendChild(musicNameSinger);
        musicNameSinger.classList.add("music-name-singer");

        const musicName = document.createElement("p");
        const musicNameContent = document.createTextNode("TV");
        musicName.appendChild(musicNameContent);
        musicNameSinger.appendChild(musicName);
        musicName.classList.add("music-name");

        const musicSinger = document.createElement("p");
        const musicSingerContent = document.createTextNode("Billie Eilish");
        musicSinger.appendChild(musicSingerContent);
        musicNameSinger.appendChild(musicSinger);
        musicSinger.classList.add("music-singer");
        
        const musicSingerImg = document.createElement("img");
        musicSingerImg.setAttribute("src", "https://behmelody.in/wp-content/uploads/2022/07/Tv-500x500.jpg");
        musicNameSingerImg.appendChild(musicSingerImg);
        musicSingerImg.classList.add("music-bar-img");

        const musicBarBtns = document.createElement("div");
        musicBar.appendChild(musicBarBtns);
        musicBarBtns.classList.add("music-bar-btns");

        const musicBarForwardBtn = document.createElement("img");
        musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarForwardBtn);
        musicBarForwardBtn.classList.add("music-bar-forward");

        const musicBarPauseBtn = document.createElement("img");
        musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPauseBtn);
        musicBarPauseBtn.classList.add("music-bar-pause");
        
        musicBarPauseBtn.addEventListener("click", () => {
            music.pause();
            const musicBarPlay = document.createElement("img");
            musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
            musicBarBtns.appendChild(musicBarPlay);
            musicBarBackBtn.classList.add("music-bar-play");
            musicBarPauseBtn.style.display = "none";
            musicBarPlay.addEventListener("click", () => {
                music.play();
                musicBarPlay.style.display = "none";
                musicBarPauseBtn.style.display = "block";
            })
        })

        const musicBarBackBtn = document.createElement("img");
        musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarBackBtn);
        musicBarBackBtn.classList.add("music-bar-back");

        music.addEventListener("ended", () => {
            music.currentTime = 0;
            music.play();
        });
    })

    //music 3

    const singerMusic3 = document.createElement("div");
    singerBillie.appendChild(singerMusic3);
    singerMusic3.classList.add("singer-music");
    singerMusic3.classList.add("singer-music3");

    const singerMusicNameImg3 = document.createElement("div");
    singerMusic3.appendChild(singerMusicNameImg3);
    singerMusicNameImg3.classList.add("singer-music-name-img");
    singerMusicNameImg3.classList.add("singer-music-name-img3");

    const singerMusicPlay3 = document.createElement("img");
    singerMusicPlay3.setAttribute("src", "./media/icons/singer-music-play.svg");
    singerMusic3.appendChild(singerMusicPlay3);
    singerMusicPlay3.classList.add("singer-music-play");
    singerMusicPlay3.classList.add("singer-music-play3");

    const singerMusicImg3 = document.createElement("img");
    singerMusicImg3.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e");
    singerMusicNameImg3.appendChild(singerMusicImg3);
    singerMusicImg3.classList.add("singer-music-img");
    singerMusicImg3.classList.add("singer-music-img3");

    const singerMusicName3 = document.createElement("p");
    const singerMusicNameContent3 = document.createTextNode("Happier Than Ever");
    singerMusicName3.appendChild(singerMusicNameContent3);
    singerMusicNameImg3.appendChild(singerMusicName3);

    singerMusicPlay3.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
        const music = document.querySelector(".singer-billie-happier");
        music.play();
        const musicBar = document.createElement("div");
        const content = document.querySelector(".content");
        content.appendChild(musicBar);
        musicBar.classList.add("music-bar");

        const musicNameSingerImg = document.createElement("div");
        musicBar.appendChild(musicNameSingerImg);
        musicNameSingerImg.classList.add("music-name-singer-img");
        
        const musicNameSinger = document.createElement("div");
        musicNameSingerImg.appendChild(musicNameSinger);
        musicNameSinger.classList.add("music-name-singer");

        const musicName = document.createElement("p");
        const musicNameContent = document.createTextNode("Happier Than Ever");
        musicName.appendChild(musicNameContent);
        musicNameSinger.appendChild(musicName);
        musicName.classList.add("music-name");

        const musicSinger = document.createElement("p");
        const musicSingerContent = document.createTextNode("Billie Eilish");
        musicSinger.appendChild(musicSingerContent);
        musicNameSinger.appendChild(musicSinger);
        musicSinger.classList.add("music-singer");
        
        const musicSingerImg = document.createElement("img");
        musicSingerImg.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e");
        musicNameSingerImg.appendChild(musicSingerImg);
        musicSingerImg.classList.add("music-bar-img");

        const musicBarBtns = document.createElement("div");
        musicBar.appendChild(musicBarBtns);
        musicBarBtns.classList.add("music-bar-btns");

        const musicBarForwardBtn = document.createElement("img");
        musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarForwardBtn);
        musicBarForwardBtn.classList.add("music-bar-forward");

        const musicBarPauseBtn = document.createElement("img");
        musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPauseBtn);
        musicBarPauseBtn.classList.add("music-bar-pause");
        
        musicBarPauseBtn.addEventListener("click", () => {
            music.pause();
            const musicBarPlay = document.createElement("img");
            musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
            musicBarBtns.appendChild(musicBarPlay);
            musicBarBackBtn.classList.add("music-bar-play");
            musicBarPauseBtn.style.display = "none";
            musicBarPlay.addEventListener("click", () => {
                music.play();
                musicBarPlay.style.display = "none";
                musicBarPauseBtn.style.display = "block";
            })
        })

        const musicBarBackBtn = document.createElement("img");
        musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarBackBtn);
        musicBarBackBtn.classList.add("music-bar-back");
    })
    music.addEventListener("ended", () => {
        music.currentTime = 0;
        music.play();
    });
})
poster1.addEventListener("click", () => {
    const singerBillie = document.createElement("div");
    const contentDiv = document.querySelector(".content");
    contentDiv.appendChild(singerBillie);
    singerBillie.classList.add("singer-billie");
    singerBillie.style.display = "block";

    const singerHeader = document.createElement("div");
    singerBillie.appendChild(singerHeader);
    singerHeader.classList.add("singer-header");

    const textVerified = document.createElement("div");
    singerHeader.appendChild(textVerified);
    textVerified.classList.add("text-verified");

    const singerName = document.createElement("div");
    textVerified.appendChild(singerName);
    singerName.classList.add("singer-name");

    const singerNameP = document.createElement("p");
    const singerNamePContent = document.createTextNode("Billie Eilish");
    singerNameP.appendChild(singerNamePContent);
    singerName.appendChild(singerNameP);

    const singerNameImg = document.createElement("img");
    singerNameImg.setAttribute("src", "./media/icons/verified.svg");
    singerName.appendChild(singerNameImg);

    const listeners = document.createElement("p");
    const listenersContent = document.createTextNode("50,176,491 monthly listeners");
    listeners.appendChild(listenersContent);
    textVerified.appendChild(listeners);
    listeners.classList.add("listeners")

    const singerImg = document.createElement("img");
    singerImg.setAttribute("src", "./media/icons/play-all-btn.svg");
    singerHeader.appendChild(singerImg);

    const singerBackImg = document.createElement("div");
    singerBillie.appendChild(singerBackImg);
    singerBackImg.classList.add("singer-back-img");

    const singerBackImgShadow = document.createElement("div");
    singerBillie.appendChild(singerBackImgShadow);
    singerBackImgShadow.classList.add("background-shadow");

    const downloadShuffleBtn = document.createElement("div");
    singerBillie.appendChild(downloadShuffleBtn);
    downloadShuffleBtn.classList.add("download-shuffle-btn");

    const closeBtn = document.createElement("img");
    closeBtn.setAttribute("src", "./media/icons/close-btn.svg");
    singerBillie.appendChild(closeBtn);
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
        singerBillie.style.display = "none";
    })

    //music 1

    const singerMusic1 = document.createElement("div");
    singerBillie.appendChild(singerMusic1);
    singerMusic1.classList.add("singer-music");
    singerMusic1.classList.add("singer-music1");

    const singerMusicNameImg1 = document.createElement("div");
    singerMusic1.appendChild(singerMusicNameImg1);
    singerMusicNameImg1.classList.add("singer-music-name-img");
    singerMusicNameImg1.classList.add("singer-music-name-img1");

    const singerMusicPlay1 = document.createElement("img");
    singerMusicPlay1.setAttribute("src", "./media/icons/singer-music-play.svg");
    singerMusic1.appendChild(singerMusicPlay1);
    singerMusicPlay1.classList.add("singer-music-play");
    singerMusicPlay1.classList.add("singer-music-play1");

    const singerMusicImg1 = document.createElement("img");
    singerMusicImg1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/f/fa/Billie_Eilish_and_Khalid_-_Lovely.png");
    singerMusicNameImg1.appendChild(singerMusicImg1);
    singerMusicImg1.classList.add("singer-music-img");
    singerMusicImg1.classList.add("singer-music-img1");

    const singerMusicName1 = document.createElement("p");
    const singerMusicNameContent1 = document.createTextNode("Lovely");
    singerMusicName1.appendChild(singerMusicNameContent1);
    singerMusicNameImg1.appendChild(singerMusicName1);

    singerMusicPlay1.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
        const music = document.querySelector(".singer-billie-lovely");
        music.play();
        const musicBar = document.createElement("div");
        const content = document.querySelector(".content");
        content.appendChild(musicBar);
        musicBar.classList.add("music-bar");

        const musicNameSingerImg = document.createElement("div");
        musicBar.appendChild(musicNameSingerImg);
        musicNameSingerImg.classList.add("music-name-singer-img");
        
        const musicNameSinger = document.createElement("div");
        musicNameSingerImg.appendChild(musicNameSinger);
        musicNameSinger.classList.add("music-name-singer");

        const musicName = document.createElement("p");
        const musicNameContent = document.createTextNode("Lovely");
        musicName.appendChild(musicNameContent);
        musicNameSinger.appendChild(musicName);
        musicName.classList.add("music-name");

        const musicSinger = document.createElement("p");
        const musicSingerContent = document.createTextNode("Billie Eilish");
        musicSinger.appendChild(musicSingerContent);
        musicNameSinger.appendChild(musicSinger);
        musicSinger.classList.add("music-singer");
        
        const musicSingerImg = document.createElement("img");
        musicSingerImg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/f/fa/Billie_Eilish_and_Khalid_-_Lovely.png");
        musicNameSingerImg.appendChild(musicSingerImg);
        musicSingerImg.classList.add("music-bar-img");

        const musicBarBtns = document.createElement("div");
        musicBar.appendChild(musicBarBtns);
        musicBarBtns.classList.add("music-bar-btns");

        const musicBarForwardBtn = document.createElement("img");
        musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarForwardBtn);
        musicBarForwardBtn.classList.add("music-bar-forward");

        const musicBarPauseBtn = document.createElement("img");
        musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPauseBtn);
        musicBarPauseBtn.classList.add("music-bar-pause");
        
        musicBarPauseBtn.addEventListener("click", () => {
            music.pause();
            const musicBarPlay = document.createElement("img");
            musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
            musicBarBtns.appendChild(musicBarPlay);
            musicBarBackBtn.classList.add("music-bar-play");
            musicBarPauseBtn.style.display = "none";
            musicBarPlay.addEventListener("click", () => {
                music.play();
                musicBarPlay.style.display = "none";
                musicBarPauseBtn.style.display = "block";
            })
        })

        const musicBarBackBtn = document.createElement("img");
        musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarBackBtn);
        musicBarBackBtn.classList.add("music-bar-back");
        
        music.addEventListener("ended", () => {
            music.currentTime = 0;
            music.play();
        });
    })

    //music 2

    const singerMusic2 = document.createElement("div");
    singerBillie.appendChild(singerMusic2);
    singerMusic2.classList.add("singer-music");
    singerMusic2.classList.add("singer-music2");

    const singerMusicNameImg2 = document.createElement("div");
    singerMusic2.appendChild(singerMusicNameImg2);
    singerMusicNameImg2.classList.add("singer-music-name-img");
    singerMusicNameImg2.classList.add("singer-music-name-img2");

    const singerMusicPlay2 = document.createElement("img");
    singerMusicPlay2.setAttribute("src", "./media/icons/singer-music-play.svg");
    singerMusic2.appendChild(singerMusicPlay2);
    singerMusicPlay2.classList.add("singer-music-play");
    singerMusicPlay2.classList.add("singer-music-play2");

    const singerMusicImg2 = document.createElement("img");
    singerMusicImg2.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b2737a4781629469bb83356cd318");
    singerMusicNameImg2.appendChild(singerMusicImg2);
    singerMusicImg2.classList.add("singer-music-img");
    singerMusicImg2.classList.add("singer-music-img2");

    const singerMusicName2 = document.createElement("p");
    const singerMusicNameContent2 = document.createTextNode("TV");
    singerMusicName2.appendChild(singerMusicNameContent2);
    singerMusicNameImg2.appendChild(singerMusicName2);

    singerMusicPlay2.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
        const music = document.querySelector(".singer-billie-tv");
        music.play();
        const musicBar = document.createElement("div");
        const content = document.querySelector(".content");
        content.appendChild(musicBar);
        musicBar.classList.add("music-bar");

        const musicNameSingerImg = document.createElement("div");
        musicBar.appendChild(musicNameSingerImg);
        musicNameSingerImg.classList.add("music-name-singer-img");
        
        const musicNameSinger = document.createElement("div");
        musicNameSingerImg.appendChild(musicNameSinger);
        musicNameSinger.classList.add("music-name-singer");

        const musicName = document.createElement("p");
        const musicNameContent = document.createTextNode("TV");
        musicName.appendChild(musicNameContent);
        musicNameSinger.appendChild(musicName);
        musicName.classList.add("music-name");

        const musicSinger = document.createElement("p");
        const musicSingerContent = document.createTextNode("Billie Eilish");
        musicSinger.appendChild(musicSingerContent);
        musicNameSinger.appendChild(musicSinger);
        musicSinger.classList.add("music-singer");
        
        const musicSingerImg = document.createElement("img");
        musicSingerImg.setAttribute("src", "https://behmelody.in/wp-content/uploads/2022/07/Tv-500x500.jpg");
        musicNameSingerImg.appendChild(musicSingerImg);
        musicSingerImg.classList.add("music-bar-img");

        const musicBarBtns = document.createElement("div");
        musicBar.appendChild(musicBarBtns);
        musicBarBtns.classList.add("music-bar-btns");

        const musicBarForwardBtn = document.createElement("img");
        musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarForwardBtn);
        musicBarForwardBtn.classList.add("music-bar-forward");

        const musicBarPauseBtn = document.createElement("img");
        musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPauseBtn);
        musicBarPauseBtn.classList.add("music-bar-pause");
        
        musicBarPauseBtn.addEventListener("click", () => {
            music.pause();
            const musicBarPlay = document.createElement("img");
            musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
            musicBarBtns.appendChild(musicBarPlay);
            musicBarBackBtn.classList.add("music-bar-play");
            musicBarPauseBtn.style.display = "none";
            musicBarPlay.addEventListener("click", () => {
                music.play();
                musicBarPlay.style.display = "none";
                musicBarPauseBtn.style.display = "block";
            })
        })

        const musicBarBackBtn = document.createElement("img");
        musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarBackBtn);
        musicBarBackBtn.classList.add("music-bar-back");

        music.addEventListener("ended", () => {
            music.currentTime = 0;
            music.play();
        });
    })

    //music 3

    const singerMusic3 = document.createElement("div");
    singerBillie.appendChild(singerMusic3);
    singerMusic3.classList.add("singer-music");
    singerMusic3.classList.add("singer-music3");

    const singerMusicNameImg3 = document.createElement("div");
    singerMusic3.appendChild(singerMusicNameImg3);
    singerMusicNameImg3.classList.add("singer-music-name-img");
    singerMusicNameImg3.classList.add("singer-music-name-img3");

    const singerMusicPlay3 = document.createElement("img");
    singerMusicPlay3.setAttribute("src", "./media/icons/singer-music-play.svg");
    singerMusic3.appendChild(singerMusicPlay3);
    singerMusicPlay3.classList.add("singer-music-play");
    singerMusicPlay3.classList.add("singer-music-play3");

    const singerMusicImg3 = document.createElement("img");
    singerMusicImg3.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e");
    singerMusicNameImg3.appendChild(singerMusicImg3);
    singerMusicImg3.classList.add("singer-music-img");
    singerMusicImg3.classList.add("singer-music-img3");

    const singerMusicName3 = document.createElement("p");
    const singerMusicNameContent3 = document.createTextNode("Happier Than Ever");
    singerMusicName3.appendChild(singerMusicNameContent3);
    singerMusicNameImg3.appendChild(singerMusicName3);

    singerMusicPlay3.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(el => el.pause());
        const music = document.querySelector(".singer-billie-happier");
        music.play();
        const musicBar = document.createElement("div");
        const content = document.querySelector(".content");
        content.appendChild(musicBar);
        musicBar.classList.add("music-bar");

        const musicNameSingerImg = document.createElement("div");
        musicBar.appendChild(musicNameSingerImg);
        musicNameSingerImg.classList.add("music-name-singer-img");
        
        const musicNameSinger = document.createElement("div");
        musicNameSingerImg.appendChild(musicNameSinger);
        musicNameSinger.classList.add("music-name-singer");

        const musicName = document.createElement("p");
        const musicNameContent = document.createTextNode("Happier Than Ever");
        musicName.appendChild(musicNameContent);
        musicNameSinger.appendChild(musicName);
        musicName.classList.add("music-name");

        const musicSinger = document.createElement("p");
        const musicSingerContent = document.createTextNode("Billie Eilish");
        musicSinger.appendChild(musicSingerContent);
        musicNameSinger.appendChild(musicSinger);
        musicSinger.classList.add("music-singer");
        
        const musicSingerImg = document.createElement("img");
        musicSingerImg.setAttribute("src", "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e");
        musicNameSingerImg.appendChild(musicSingerImg);
        musicSingerImg.classList.add("music-bar-img");

        const musicBarBtns = document.createElement("div");
        musicBar.appendChild(musicBarBtns);
        musicBarBtns.classList.add("music-bar-btns");

        const musicBarForwardBtn = document.createElement("img");
        musicBarForwardBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarForwardBtn);
        musicBarForwardBtn.classList.add("music-bar-forward");

        const musicBarPauseBtn = document.createElement("img");
        musicBarPauseBtn.setAttribute("src", "./media/icons/pause-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarPauseBtn);
        musicBarPauseBtn.classList.add("music-bar-pause");
        
        musicBarPauseBtn.addEventListener("click", () => {
            music.pause();
            const musicBarPlay = document.createElement("img");
            musicBarPlay.setAttribute("src", "./media/icons/play-btn-music-bar.svg");
            musicBarBtns.appendChild(musicBarPlay);
            musicBarBackBtn.classList.add("music-bar-play");
            musicBarPauseBtn.style.display = "none";
            musicBarPlay.addEventListener("click", () => {
                music.play();
                musicBarPlay.style.display = "none";
                musicBarPauseBtn.style.display = "block";
            })
        })

        const musicBarBackBtn = document.createElement("img");
        musicBarBackBtn.setAttribute("src", "./media/icons/forward-back-btn-music-bar.svg");
        musicBarBtns.appendChild(musicBarBackBtn);
        musicBarBackBtn.classList.add("music-bar-back");

        music.addEventListener("ended", () => {
            music.currentTime = 0;
            music.play();
        });
    })

})
