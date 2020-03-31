//Wrong Rapper Choice Events
let earlSweatShirt = document.getElementById('rapper1')
let tylerTheCreator = document.getElementById('rapper2')
let childishGambino = document.getElementById('rapper3')
let vinceStaples = document.getElementById('rightRapper')
let boogie = document.getElementById('rapper4')

earlSweatShirt.onclick = function() {
    alert('Nope!')
}

tylerTheCreator.onclick = function() {
    alert('Wrong!')
}

childishGambino.onclick = function() {
    alert('Way off')
}

boogie.onclick = function() {
    alert('Negative')
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
    $('button').click(function() {
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
    let vinceRight = setTimeout(rapGameSlides, 3000);

    vinceStaples.onclick = function() {
        clearTimeout(vinceRight);
        alert('You know about Vince Staples!')
    }
}
document.addEventListener('DOMContentLoaded', rapGameSlides)