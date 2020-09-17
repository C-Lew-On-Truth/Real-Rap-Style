
let game = document.querySelector('.game-container')
let musicPlaying = false

let realTime = document.querySelector('.timer');
let pause = document.querySelector('.pause');
let start = document.querySelector('.start')
let time = 60;

function timer() {
    

    let counter = setInterval(() => {
        if (musicPlaying === false) {
            realTime.innerHTML = time;
            time--
            if( time <= -1) {
                clearInterval(counter)
                alert('you fucked up')
            } 
        }
    }, 1000)
  
}

//timer()
pause.onclick = function() {
    musicPlaying = false;
    audio.pause()
}

start.onclick = function() {
    musicPlaying = true;
    audio.play()
}

let audio = document.getElementById('audio');

audio.onplay = () => {
    
}

timer()

