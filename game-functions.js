//Imported Data from Music
import {pacMusic, pacBeats, pacBegins} from './music-with-game.js';
import {fortyMusic, fortyBeats, playForty} from './music-with-game.js';
import { kuruptMusic, kuruptBeats, playKurupt } from './music-with-game.js';
import { outkastMusic, outkastBeats, playOutkast } from './music-with-game.js';
import { jayMusic, jayBeats, playJayZ } from './music-with-game.js';
import { stopMusic } from './music-with-game.js';

//Variables for data events
let pacWrong = document.getElementById('imageSwitch1');
let kuruptWrong = document.getElementById('imageSwitch2');
let outkastWrong = document.getElementById('imageSwitch3');
let jayWrong = document.getElementById('imageSwitch4');
let fortyRight = document.getElementById('imageRight');
let reStartBtn = document.getElementById('restart');
let nextLevel = document.getElementById('next-challenge');
let questionsGos = document.getElementById('noMoreQuestions');
let rightAnsMessage = document.getElementById('rightAns1');

let wrongPac = document.createElement('div');
let wrongKurupt = document.createElement('div');
let wrongOutkast = document.createElement('div');
let wrongJay = document.createElement('div');

nextLevel.hidden = true;
stopMusic.hidden = true;
rightAnsMessage.hidden = true;

//functions for user choices
function displayWrongPac() {
  pacWrong.replaceChild(wrongPac, pacBeats);
  pacWrong.style.border = "red dashed 6px";
  wrongPac.innerHTML = "<br><br><br>Your<br> WRONG!";
  wrongPac.style.backgroundColor = "black";
  wrongPac.style.height = "100%";
  wrongPac.style.width = "100%";
  console.log('This worked');
}

function displayWrongKurupt() {
  kuruptWrong.replaceChild(wrongKurupt, kuruptBeats);
  kuruptWrong.style.border = "red dashed 6px";
  wrongKurupt.innerHTML = "<br><br><br>Nah <br> Doggy";
  wrongKurupt.style.backgroundColor = "black";
  wrongKurupt.style.color = "white";
  wrongKurupt.style.height = "100%";
  wrongKurupt.style.width = "100%";
  console.log('Kurupt is Wrong');
}

function displayWrongOutkast() {
  outkastWrong.replaceChild(wrongOutkast, outkastBeats);
  outkastWrong.style.border = "red dashed 6px";
  wrongOutkast.innerHTML = "<br><br><br>Try Again<br> Friend";
  wrongOutkast.style.backgroundColor = "black";
  wrongOutkast.style.color = "white";
  wrongOutkast.style.height = "100%";
  wrongOutkast.style.width = "100%";
  console.log("OutKast Wrong");

}

function displayWrongJayZ() {
  jayWrong.replaceChild(wrongJay, jayBeats);
  jayWrong.style.border = "red dashed 6px";
  wrongJay.innerHTML = "<br><br><br>You don't <br>know<br> anything...";
  wrongJay.style.backgroundColor = "black";
  wrongJay.style.color = "white";
  wrongJay.style.height = "100%";
  wrongJay.style.width = "100%";
  console.log('Jay Z is Wrong');
}

function nextPage() {
  window.location.reload(true);
  console.log('you see me')
}

function rightAnswer() {
  if (fortyBeats) {
    nextLevel.hidden = false;
    questionsGos.hidden = true;
    rightAnsMessage.hidden = false;
    fortyRight.style.border = "white 6px dashed";
    pacBeats.removeEventListener('click', displayWrongPac);
    pacBeats.removeEventListener('click', pacBegins);
    kuruptBeats.removeEventListener('click', displayWrongKurupt);
    kuruptBeats.removeEventListener('click', playKurupt);
    jayBeats.removeEventListener('click', playJayZ);
    jayBeats.removeEventListener('click', displayWrongJayZ);
    outkastBeats.removeEventListener('click', displayWrongOutkast);
    outkastBeats.removeEventListener('click', playOutkast);
  }
}


//Events for User Selections
pacBeats.addEventListener('click', displayWrongPac);
kuruptBeats.addEventListener('click', displayWrongKurupt);
outkastBeats.addEventListener('click', displayWrongOutkast);
jayBeats.addEventListener('click', displayWrongJayZ);
fortyBeats.addEventListener('click', rightAnswer);
reStartBtn.addEventListener('click', nextPage);

nextLevel.onclick = function() {
  window.location.href = "Challenge2.html"
};

