let audio = document.getElementById('audio');
let countDown= false;
let answersSelected = false;
let rightSelect = false
//let correct = true;

let realTime = document.querySelector('.timer');
let pause = document.querySelector('.pause');
pause.hidden = true;
let start = document.querySelector('.start');
let time = 10;
let rappers = document.querySelector('.choices')

function timer() {
    let counter = setInterval(() => {
        if (countDown === true && answersSelected === false) {
            realTime.style.color = "green";
            realTime.innerHTML = time;
            time--
            if (time <= -1) {
                clearInterval(counter)
                realTime.style.color = "red";
                realTime.innerHTML = 'YOU FUCKED UP!'
                rightSelect = true;
                alert('Now you gotta start over buddy')
                window.location.href = "index.html"
            };
        };
    }, 1000);
};

timer()

pause.onclick = function () {
    audio.pause();
}

start.onclick = function () {
    audio.play();

}

audio.onplay = () => {
    pause.hidden = false;
    start.hidden = true;
}

audio.onpause = () => {
    pause.hidden = true;
    start.hidden = false;
}

audio.onended = () => {
    if (rightSelect === true && answersSelected === true) {
        countDown= false;
    } else  {
        countDown = true;
    } 
    pause.hidden = true;
    start.hidden = false;
}


rappers.onclick = event => {
    countDown = true;
    let target = event.target.className
    if (rightSelect === false) {
        switch (target) {
            case 'choice_1':
                document.querySelector('.choice_1').classList.add('wrong-choice')
                document.querySelector('.choice_1').innerHTML = "NOT EVEN CLOSE";
                break
            case 'choice_2':
                document.querySelector('.choice_2').classList.add('right')
                document.querySelector('.choice_2').innerHTML = "YOU KNOW WHATS GOOD!"
                countDown = false;
                rightSelect = true;
                answersSelected = true;
                setTimeout(() => {window.location.href="winner.html"},2000)
                break
            case 'choice_3':
                document.querySelector('.choice_3').classList.add('wrong-choice')
                document.querySelector('.choice_3').innerHTML = "THATS NOT EVEN HIS STYLE"
                break
            case 'choice_4':
                document.querySelector('.choice_4').classList.add('wrong-choice');
                document.querySelector('.choice_4').innerHTML = "YOU CANT BE SERIOUS!"
                break
            case 'choice_5':
                document.querySelector('.choice_5').classList.add('wrong-choice')
                document.querySelector('.choice_5').innerHTML = "YOU HIGH BRO...."
                break
        }
    }

}

