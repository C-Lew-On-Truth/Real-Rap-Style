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

westside.onplay = () => {

    spinWheel.onclick = event => {
        let target = event.target.className;
        if (target === 'rap1' || target === 'westRap') {
            console.log(target);
            westAns = true;
            artist1.style.color = 'green';
            rap1.style.backgroundColor = 'green';
            rap1.style.color = 'white';
            rapTracker.push('Westside')
        }
        if (westAns === false) {
            target = event.target;
            console.log('wrong')
            target.style.backgroundColor = 'red';
            target.style.color = 'black';
        }
    }
}

larry.onplay = () => {

    spinWheel.onclick = event => {
        let target = event.target.className;
        if (target === 'rap2' || target === 'larryRap') {
            console.log(target);
            larryAns = true;
            artist4.style.color = 'green';
            rap2.style.backgroundColor = 'green';
            rap2.style.color = 'white';
            rapTracker.push('Larry June')
        }
        if (larryAns === false) {
            target = event.target;
            console.log('wrong')
            target.style.backgroundColor = 'red';
            target.style.color = 'black';
        }
    }
}

asap.onplay = () => {

    spinWheel.onclick = event => {
        let target = event.target.className;
        if (target === 'rap4' || target === 'asapRap') {
            console.log(target);
            asapAns = true;
            artist3.style.color = 'green';
            rap4.style.backgroundColor = 'green';
            rap4.style.color = 'white';
            rapTracker.push('Asap Rocky')
        }
        if (asapAns === false) {
            target = event.target;
            console.log('wrong')
            target.style.backgroundColor = 'red';
            target.style.color = 'black';
        }
    }
}


action.onplay = () => {

    spinWheel.onclick = event => {
        let target = event.target.className;
        if (target === 'rap3' || target === 'actionRap') {
            console.log(target);
            actionAns = true;
            artist2.style.color = 'green';
            rap3.style.backgroundColor = 'green';
            rap3.style.color = 'white';
            rapTracker.push('Action Bronson')
        }
        if (actionAns === false) {
            target = event.target;
            console.log('wrong')
            target.style.backgroundColor = 'red';
            target.style.color = 'black';
        }
    }
}

const rapTracker = [];
console.log(rapTracker)


window.onclick = function () {
    if (rapTracker.length === 4) {
        document.querySelector('#spinner').classList.remove('spin-wheel');
        document.querySelector('#spinner').classList.add('stop-spin');
        console.log('you named all the rappers')
        console.log(rapTracker)
    }
};

