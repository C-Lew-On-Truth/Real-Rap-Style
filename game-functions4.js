import { westside, asap, action, larry } from './music-with-game4.js'

let spinWheel = document.querySelector('#spinner');

const rap1 = document.querySelector('.rap1');
const rap2 = document.querySelector('.rap2');
const rap3 = document.querySelector('.rap3');
const rap4 = document.querySelector('.rap4');

let right = true;
let answered = false

function westSideRight() {

    console.log('westside is playing');

    function westSpin(event) {
        let target = event.target.id

        if (target === 'westRap' && right === true || target === 'westRight' && right === true) {
            rap1.classList.add('right')
            answered = true
        }  else if (target !== 'westRap' && answered === false || target !== 'westRight' && answered === false) {
            target = event.target;
            target.classList.add('wrong')   
        }
    }
    spinWheel.addEventListener('click', westSpin)
}

function larryRight() {

    console.log('larry is playing')

    function larrySpin(event) {
        let target = event.target.id
        if (target === 'larryRap' && right === true || target === 'larryRight' && right === true) {
            rap2.classList.add('right')
            answered = true
        } else if (target !== 'larryRap' && answered === false || target !== 'larryRight' && answered === false) {
            target = event.target;
            target.classList.add('wrong')
        }
    }
    spinWheel.addEventListener('click', larrySpin)
}
/*
function actionRight() {
    console.log('action is playing')

    function larrySpin(event) {
        let target = event.target.id
        if (target === 'actionRap' && rightAction  === true || target === 'actionRight' && rightAction === true) {
            rap3.classList.add('right')
            actionAns = true
        } else if (target !== 'actionRap' && actionAns  === false || target !== 'actionRight' && actionAns  === false) {
            target = event.target;
            target.classList.add('wrong')
        }
    }
    spinWheel.addEventListener('click', larrySpin)
}


function asapRight() {

    console.log('asap is playing')

    function asapSpin(event) {
        let target = event.target.id
        if (target === 'asapRap' && rightAsap === true || target === 'asapRight' && rightAsap === true) {
            rap4.classList.add('right')
            asapAns = true
        } else if (target !== 'asapRap' && asapAns === false || target !== 'asapRight' && asapAns === false) {
            target = event.target;
            target.classList.add('wrong')
        }
    }
    spinWheel.addEventListener('click', asapSpin)
}
*/

westside.addEventListener('play', westSideRight)
larry.addEventListener('play', larryRight)
//action.addEventListener('play', actionRight)
//asap.addEventListener('play', asapRight)

/*
spinWheel.onclick = function() {
   document.querySelector('#spinner').classList.remove('spin-wheel')
   document.querySelector('#spinner').classList.add('stop-spin')
}
*/
