//Wrong Rapper Choice Events
let earlSweatShirt = document.getElementById('rapper1');
let tylerTheCreator = document.getElementById('rapper2');
let childishGambino = document.getElementById('rapper3');
let vinceStaples = document.getElementById('rightRapper');
let boogie = document.getElementById('rapper4');

//Alert Box Responses 
let wrongAnsKey = document.getElementById('ansWrong');
let rapSelect = document.querySelector('.rapSelect');
let alertBox = document.querySelector('.alertBoxes');
let rapName = document.querySelector('.rapperName');
let alertGo = document.querySelector('.alertGos');
let alertMessage = document.querySelector('.alertMessage');


let wrongMessages = [
    'SMH...You seriously thought that was the answer?',
    'Wow dude. Your pretty wack!!!',
    'Nah nah...you should had quit a long time ago...',
    'Sorry Buddy....try again...'
];


earlSweatShirt.onclick = function() {    
    alertBox.style.display = "block";
    alertMessage.innerHTML = wrongMessages[0]  
}
tylerTheCreator.onclick = function() {    
    alertBox.style.display = "block";
    alertMessage.innerHTML = wrongMessages[2]  
}
boogie.onclick = function() {    
    alertBox.style.display = "block";
    alertMessage.innerHTML = wrongMessages[1]  
}
childishGambino.onclick = function() {    
    alertBox.style.display = "block";
    alertMessage.innerHTML = wrongMessages[3]  
}

alertGo.onclick = function() {
    alertBox.style.display = "none";
}

//Toggle Player
let playStopBtn = document.querySelector('.playStopButton');
let userSelect = document.querySelector('.rapSelect');
let playVince = document.querySelector('#vinceStaples');
let playButton = document.getElementById('play');
let stopButton = document.getElementById('stop');

playButton.onclick = function() {
    playVince.play()
}

stopButton.onclick = function() {
    playVince.pause()
}

$(document).ready(function() {
    $('#play, #stop').click(function() {
        $('.playStopButton').toggle()
    })
})

function musicOver() {
    stopButton.style.display = "none";
    playButton.style.display = "inline-block";
    playButton.style.textAlign = "center";
    console.log('seen');
}


//Infinte Carousel for Challenge 3 Selection
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
    let vinceRight = window.setTimeout(rapGameSlides, 3000);

    vinceStaples.onclick = function() {
        clearTimeout(vinceRight);
        alertBox.style.display = "block";
        alertMessage.innerHTML = "You know about Vince Staple!";
        alertGo.innerHTML = "Exit";
    }
}
window.addEventListener('DOMContentLoaded', rapGameSlides)