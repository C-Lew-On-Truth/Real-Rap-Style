import { westside, asap, action, larry, artist1, artist2, artist3, artist4 } from './music-with-game4.js';

let spinWheel = document.querySelector('#spinner');

const rap1 = document.querySelector('.rap1');
const rap2 = document.querySelector('.rap2');
const rap3 = document.querySelector('.rap3');
const rap4 = document.querySelector('.rap4');

let westAns = false;
let actionAns = false;
let larryAns = false;
let asapAns = false;

const wrongWords = [
    'NEGATIVE!',
    'NO WAY!',
    'WRONG!',
    'JUST QUIT!',
    'BUSTER!',
    'NOPE!'
]

// Music choice functions //
westside.onplay = () => {

    spinWheel.onclick = event => {
        let target = event.target.className;
        if (target === 'rap1' || target === 'westRap') {
            console.log(target);
            westAns = true;
            artist1.innerHTML = 'CORRECT!'
            setTimeout(() => artist1.innerHTML = 'Rapper 1', 2000)
            artist1.style.color = 'green';
            rap1.style.backgroundColor = 'green';
            rap1.style.color = 'white';
            rapTracker.push('Westside')

        }
        if (westAns === false) {
            target = event.currentTarget;
            console.log('wrong')
            artist1.classList.remove("artist1")
            artist1.classList.add("wrong")
            artist1.innerHTML = wrongWords[Math.floor(Math.random() * wrongWords.length)]
            target.style.backgroundColor = 'red';
            setTimeout(() => {
                target.style.backgroundColor = 'black';
                artist1.classList.add("artist1")
                artist1.classList.remove("wrong")
                artist1.innerHTML = 'Rapper 1'
            }, 2000)
        }
    }
}

larry.onplay = () => {

    spinWheel.onclick = event => {
        let target = event.target.className;
        if (target === 'rap2' || target === 'larryRap') {
            console.log(target);
            larryAns = true;
            artist4.innerHTML = 'CORRECT!'
            setTimeout(() => artist4.innerHTML = 'Rapper 4', 2000)
            artist4.style.color = 'green';
            rap2.style.backgroundColor = 'green';
            rap2.style.color = 'white';
            rapTracker.push('Larry June')
        }
        if (larryAns === false) {
            target = event.currentTarget;
            console.log('wrong')
            artist4.classList.remove("artist4")
            artist4.classList.add("wrong")
            artist4.innerHTML = wrongWords[Math.floor(Math.random() * wrongWords.length)]
            target.style.backgroundColor = 'red';
            setTimeout(() => {
                target.style.backgroundColor = 'black';
                artist4.classList.add("artist4")
                artist4.classList.remove("wrong")
                artist4.innerHTML = 'Rapper 4'
            }, 2000)
        }
    }
}

asap.onplay = () => {

    spinWheel.onclick = event => {
        let target = event.target.className;
        if (target === 'rap4' || target === 'asapRap') {
            console.log(target);
            asapAns = true;
            artist3.innerHTML = 'CORRECT!'
            setTimeout(() => artist3.innerHTML = 'Rapper 3', 2000)
            artist3.style.color = 'green';
            rap4.style.backgroundColor = 'green';
            rap4.style.color = 'white';
            rapTracker.push('Asap Rocky')
        }
        if (asapAns === false) {
            target = event.currentTarget;
            console.log('wrong')
            artist3.classList.remove("artist3")
            artist3.classList.add("wrong")
            artist3.innerHTML = wrongWords[Math.floor(Math.random() * wrongWords.length)]
            target.style.backgroundColor = 'red';
            setTimeout(() => {
                target.style.backgroundColor = 'black';
                artist3.classList.add("artist3")
                artist3.classList.remove("wrong")
                artist3.innerHTML = 'Rapper 3'
            }, 2000)
        }
    }
}



action.onplay = () => {

    spinWheel.onclick = event => {
        let target = event.target.className;
        if (target === 'rap3' || target === 'actionRap') {
            console.log(target);
            actionAns = true;
            artist2.innerHTML = 'CORRECT!'
            setTimeout(() => artist2.innerHTML = 'Rapper 2', 2000)
            artist2.style.color = 'green';
            rap3.style.backgroundColor = 'green';
            rap3.style.color = 'white';
            rapTracker.push('Action Bronson')
        }
        if (actionAns === false) {
            target = event.currentTarget;
            console.log('wrong')
            artist2.classList.remove("artist2")
            artist2.classList.add("wrong")
            artist2.innerHTML = wrongWords[Math.floor(Math.random() * wrongWords.length)]
            target.style.backgroundColor = 'red';
            setTimeout(() => {
                target.style.backgroundColor = 'black';
                artist2.classList.add("artist2")
                artist2.classList.remove("wrong")
                artist2.innerHTML = 'Rapper 2'
            }, 2000)
        }

    }
}

const rapTracker = [];
console.log(rapTracker)

//Answer Decider//
window.onclick = function () {
    if (rapTracker.length === 4) {
        document.querySelector('#spinner').classList.remove('spin-wheel');
        document.querySelector('#spinner').classList.add('stop-spin');
        console.log('you named all the rappers')
        console.log(rapTracker)
        newPage.style.display = "block"
    }
};

const newPage = document.querySelector('.new-page');
newPage.style.display = "none";

//Instructions 
const instructions = document.querySelector('.go-instructions');
let instructPopUp = document.querySelector('.instructions-alert')
const exitInstructPop = document.querySelector('.exit-instructions')
instructPopUp.style.display = "none";



instructions.onclick = () => {
    instructPopUp.style.display = "block";
    document.querySelector('#spinner').classList.remove('spin-wheel');
    document.querySelector('#spinner').classList.add('stop-spin');
}


exitInstructPop.onclick = () => {
    instructPopUp.style.display = "none";
    document.querySelector('#spinner').classList.add('spin-wheel');
    document.querySelector('#spinner').classList.remove('stop-spin');
}



newPage.onclick = () => {
    window.location.href = '/challenge5.html'
}