let playStopBtn = document.querySelector('.playStopButton');
let userSelect = document.querySelector('.rapSelect');
let playVince = document.querySelector('#vinceStaples')
let stopButton = "stop";
let playButton = "play";

playStopBtn.onclick = function() {
    playVince.play()
    playStopBtn.innerHTML = "<p id='stop'>Stop</p>"
}

stopButton.onclick = function() {
    playVince.pause()
    playStopBtn.innerHTML = "<p id='play'>Play</p>"
}

let rapPicIndex = 0;

function rapGameSlides() {
    let i;
    let rapPics = document.getElementsByClassName('rapSelect');

    for(i = 0; i < rapPics.length; i++) {
        rapPics[i].style.display = "none";
    }

    rapPicIndex++;
    if (rapPicIndex > rapPics.length) {
        rapPicIndex = 1;
    }

    rapPics[rapPicIndex - 1].style.display = "block";
    let vinceRight = setTimeout(rapGameSlides, 3000);

    vinceStaples.onclick = function() {
        clearTimeout(vinceRight);
        alert('You know about Vince Staples!')
    }
}

window.onload = rapGameSlides;


let earlSweatShirt = document.getElementById('rapper1')
let tylerTheCreator = document.getElementById('rapper2')
let childishGambino = document.getElementById('rapper3')
let vinceStaples = document.getElementById('rightRapper')
let boogie = document.getElementById('rapper4')









