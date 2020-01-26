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

function playJayRock() {
    jRock.play();
    console.log('Jay Rock is Playing');
    drake.pause() || youngGotti.pause() || pushaT.pause() || quik.pause()
};

function playDrake() {
    drake.play();
    console.log('drake is playing');
    jRock.pause() || youngGotti.pause() || quik.pause() | pushaT.pause() 
};


function playKurupt() {
    youngGotti.play(); 
    console.log('Kurupt! Ride or Die!');
    jRock.pause() || drake.pause() || pushaT.pause()  || quik.pause() 
};

function playPushaT() {
    pushaT.play();
    console.log('Pusha Push')
    jRock.pause() || drake.pause() || youngGotti.pause() || quik.pause() 
};

function playQuik() {
    quik.play() 
    console.log('play DJ quik');
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


export { jRock, jRockBeats, playJayRock };
export { drake, drakeBeats, playDrake };
export { youngGotti, yGottiBeats, playKurupt };
export { pushaT, pushaBeats, playPushaT };
export { quik, quikBeats, playQuik };