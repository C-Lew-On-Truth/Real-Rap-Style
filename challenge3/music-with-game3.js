//Toggle Player
let userSelect = document.querySelector('.rapSelect');
let playVince = document.querySelector('#vinceStaples');
let playButton = document.getElementById('play');
let stopButton = document.getElementById('stop');

playButton.onclick = function () {
    playVince.play()
}

stopButton.onclick = function () {
    playVince.pause()
}

$(document).ready(function () {
    $('#play, #stop').click(function () {
        $('.playStopButton').toggle()
    })
})

function musicOver() {
    stopButton.style.display = "none";
    playButton.style.display = "inline-block";
    playButton.style.textAlign = "center";
    console.log('seen');
}
