import { westside, asap, action, larry } from './music-with-game4.js';

let spinWheel = document.querySelector('#spinner');

const rap1 = document.querySelector('.rap1');
const rap2 = document.querySelector('.rap2');
const rap3 = document.querySelector('.rap3');
const rap4 = document.querySelector('.rap4');

let westAns = false;
let actionAns = false;

westside.onplay = () => {

    spinWheel.onclick = event => {
        let target = event.target.className;
        if (target === 'rap1' || target === 'westRap') {
            console.log(target);
            westAns = true;
            rap1.style.backgroundColor = 'green';
            rap1.style.color = 'white';
        }
        if (westAns === false) {
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
            rap3.style.backgroundColor = 'green';
            rap3.style.color = 'white';
        }
        if (actionAns === false) {
            target = event.target;
            console.log('wrong')
            target.style.backgroundColor = 'red';
            target.style.color = 'black';
        }
    }
}

//westside.addEventListener('play', westSideRight);
//larry.addEventListener('play', larryRight);
//action.addEventListener('play', actionRight);
//asap.addEventListener('play', asapRight);

/*
spinWheel.onclick = function() {
   document.querySelector('#spinner').classList.remove('spin-wheel');
   document.querySelector('#spinner').classList.add('stop-spin');
};
*/

