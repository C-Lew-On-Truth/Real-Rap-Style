let jRock = document.getElementById('jRock-audio');
let drake = document.getElementById('drake-audio');
let youngGotti = document.getElementById('yGotti-audio');
let pushaT = document.getElementById('pusha-audio');
let quik = document.getElementById('quik-audio');

let jRockBeats = document.getElementById('jRock-plays');
let drakeBeats = document.getElementById('drake-plays');
let yGottiBeats = document.getElementById('yGotti-plays');
let pushaBeats = document.getElementById('pusha-plays');
let quikBeats = document.getElementById('quik-plays');
let stopMusic2 = document.getElementById('stop-music2');

let grid = document.querySelector('.grid-container')

let jRockPlaying = false;

function playJayRock() {
    jRockPlaying = true
    jRock.play();
    drake.pause() || youngGotti.pause() || pushaT.pause() || quik.pause()
};

function playDrake() {
    drake.play();
    jRock.pause() || youngGotti.pause() || quik.pause() | pushaT.pause() 
};


function playKurupt() {
    youngGotti.play(); 
    jRock.pause() || drake.pause() || pushaT.pause()  || quik.pause() 
};

function playPushaT() {
    pushaT.play();
    jRock.pause() || drake.pause() || youngGotti.pause() || quik.pause() 
};

function playQuik() {
    quik.play() 
    jRock.pause() || drake.pause() || youngGotti.pause() || pushaT.pause() 
};

function stopAllMusic() {
    if(playJayRock || playDrake || playKurupt || playPushaT || playQuik) {
        jRock.pause() || drake.pause() || youngGotti.pause() || pushaT.pause() || quik.pause() 
    };
};

jRockBeats.addEventListener('click', playJayRock);
drakeBeats.addEventListener('click', playDrake);
yGottiBeats.addEventListener('click', playKurupt);
pushaBeats.addEventListener('click', playPushaT);
quikBeats.addEventListener('click', playQuik);
stopMusic2.addEventListener('click', stopAllMusic);

jRock.onplay = function() { jRockBeats.style.background = "red" }
jRock.onpause = function() { jRockBeats.style.background  = "black"}


drake.onplay = function() { drakeBeats.style.background = "red" }
drake.onpause = function() { drakeBeats.style.background = "black" }

youngGotti.onplay = function() { yGottiBeats.style.background = "red" }
youngGotti.onpause = function() { yGottiBeats.style.background = "black" }

pushaT.onplay = function() { pushaBeats.style.background = "red" }
pushaT.onpause = function() { pushaBeats.style.background = "black"}

quik.onplay = function() { quikBeats.style.background = "red" }
quik.onpause = function() { quikBeats.style.background = "black"}


export { jRock, jRockBeats, playJayRock };
export { drake, drakeBeats, playDrake };
export { youngGotti, yGottiBeats, playKurupt };
export { pushaT, pushaBeats, playPushaT };
export { quik, quikBeats, playQuik };