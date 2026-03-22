// instalize veriabels
let songIndex = 0;
let audioElement = new Audio('songs/3.mp3');
let masterPlay = document.getElementById('masterPlay');
let mypbar = document.getElementById('mypbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    { songname: " kina", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songname: " 1", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songname: " you", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songname: " kina", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songname: " kina", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songname: " kina", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songname: " kina", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songname: " kina", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songname: " kina", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songname: " kina", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    mypbar.value = progress;
})

mypbar.addEventListener('change', () => {
    audioElement.currentTime = mypbar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.scr = 'songs/3.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })
})