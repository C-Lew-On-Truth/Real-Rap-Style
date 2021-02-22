//Imported Data from Music
import {pacMusic, pacBeats, pacBegins} from './music-with-game.js';
import {fortyMusic, fortyBeats, playForty} from './music-with-game.js';
import { kuruptMusic, kuruptBeats, playKurupt } from './music-with-game.js';
import { outkastMusic, outkastBeats, playOutkast } from './music-with-game.js';
import { jayMusic, jayBeats, playJayZ } from './music-with-game.js';
import { stopMusic } from './music-with-game.js';

//Variables for game
let reStartBtn = document.getElementById('restart');
let nextLevel = document.getElementById('next-challenge');
let directions = document.getElementById('directions');
let rightAnsMessage = document.getElementById('rightAns1');

let wrongPac = document.createElement('div');
let wrongKurupt = document.createElement('div');
let wrongOutkast = document.createElement('div');
let wrongJay = document.createElement('div');

nextLevel.hidden = true;
stopMusic.hidden = true;
rightAnsMessage.hidden = true;

//User Selection Functions and the Variables to Identify Them.

let pacWrong = document.getElementById('imageSwitch1');
let kuruptWrong = document.getElementById('imageSwitch2');
let outkastWrong = document.getElementById('imageSwitch3');
let jayWrong = document.getElementById('imageSwitch4');
let fortyRight = document.getElementById('imageRight');


function displayWrongPac() {
  pacWrong.replaceChild(wrongPac, pacBeats);
  pacWrong.style.border = "red dashed 6px";
  wrongPac.innerHTML = "Your WRONG!";
  wrongPac.classList.add("wrong")
}

function displayWrongKurupt() {
  kuruptWrong.replaceChild(wrongKurupt, kuruptBeats);
  kuruptWrong.style.border = "red dashed 6px";
  wrongKurupt.innerHTML = "<span class='wrong-message'>Nah Doggy</span>";
  wrongKurupt.classList.add("wrong")
}

function displayWrongOutkast() {
  outkastWrong.replaceChild(wrongOutkast, outkastBeats);
  outkastWrong.style.border = "red dashed 6px";
  wrongOutkast.innerHTML = "Try Again Friend";
  wrongOutkast.classList.add("wrong")
}

function displayWrongJayZ() {
  jayWrong.replaceChild(wrongJay, jayBeats);
  jayWrong.style.border = "red dashed 6px";
  wrongJay.innerHTML = "You don't know anything...";
  wrongJay.classList.add("wrong")
}

function restartPage() {
  window.location.reload(true);
}

function rightAnswer() {
  if (fortyBeats) {
    nextLevel.hidden = false;
    directions.hidden = true;
    rightAnsMessage.hidden = false;
    fortyRight.style.border = "white 5px dashed";
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
reStartBtn.addEventListener('click', restartPage);


nextLevel.onclick = function() {
  window.location.href = "challenge2.html"
};

