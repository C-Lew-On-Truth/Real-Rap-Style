import { jRock, jRockBeats, playJayRock } from './music-with-game2.js';
import { drake, drakeBeats, playDrake } from './music-with-game2.js';
import { youngGotti, yGottiBeats, playKurupt } from './music-with-game2.js';
import { pushaT, pushaBeats, playPushaT } from './music-with-game2.js';
import { quik, quikBeats, playQuik } from './music-with-game2.js';

//Rapper Containers 
const jRockContainer = document.getElementById('jRockStartBox');
const drakeContainer = document.getElementById('drakeStartBox');
const kuruptContainer = document.getElementById('kuruptStartBox');
const pushaContainer = document.getElementById('pushaStartBox');
const quikConatiner = document.getElementById('quikStartBox');

//Drag Rapper Ids
let drakeAns = document.getElementById('drakeDrag');
let pushaAns = document.getElementById('pushaTDrag');
let kuruptAns = document.getElementById('gottiDrag');
let quikAns = document.getElementById('quikDrag');
let jRockAns = document.getElementById('jRockDrag');

let nextPage = document.getElementById('nextPage');
nextPage.hidden = true;


document.ondragstart = function (event) {
    event.dataTransfer.setData('text', event.target.id);
    console.log('dragstart');
};

document.ondragover = function (event) {
    event.preventDefault();
    console.log('dragover');
};

function jRockDrop(event) {
    event.preventDefault();
    let jdata = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(jdata));
   console.log('Jay Rock does not play');
   //jRockBeats.removeEventListener('click',playJayRock );
   jRock.pause();
};


function drakeDrop(event) {
    event.preventDefault();
    let drakeData = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(drakeData));
    console.log('Drake does not playing');
    drake.pause();
}

function pushaDrop(event) {
    event.preventDefault() 
     let pushaTData = event.dataTransfer.getData('text');  
     event.target.appendChild(document.getElementById(pushaTData)); 
     console.log('pusha T stops playing')
     pushaT.pause()
}

function quikDrop(event) {
    event.preventDefault() 
     let pushaTData = event.dataTransfer.getData('text');  
     event.target.appendChild(document.getElementById(pushaTData)); 
     console.log('pusha T stops playing')
     quik.pause()
}

function kuruptDrop(event) {
    event.preventDefault() 
     let pushaTData = event.dataTransfer.getData('text');  
     event.target.appendChild(document.getElementById(pushaTData)); 
     console.log('pusha T stops playing')
     youngGotti.pause()
}


let allRappersDropped = document.ondrop = function(event) {
    event.preventDefault() 
    let allData = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(allData))
} 

function testAllDrop(event) {
        event.target.jRockBeats.querySelector('jRockDrag'); 
        console.log('function worked')
}

function test() {
    
    if(allRappersDropped) {
        nextPage.hidden = false;
    } else {
        nextPage.hidden = true;
    }
    console.log('right rapper')
}


jRockBeats.addEventListener('drop', jRockDrop);
drakeBeats.addEventListener('drop', drakeDrop);
pushaBeats.addEventListener('drop', pushaDrop);
quikBeats.addEventListener('drop', quikDrop);
yGottiBeats.addEventListener('drop', kuruptDrop);
//nextPage.addEventListener('drop', test);


