const stopMusic = document.querySelector('.stop-music');

let artist1 = document.querySelector('.artist-1');
let artist2 = document.querySelector('.artist-2');
let artist3 = document.querySelector('.artist-3');
let artist4 = document.querySelector('.artist-4');

let westside = document.getElementById('westside');
let asap = document.getElementById('asap');
let action = document.getElementById('action');
let larry = document.getElementById('larry');

artist1.onclick = function () {
    westside.play();
    action.pause() || asap.pause() || larry.pause()
    console.log('Westside Gunn playing')
 }

 artist2.onclick = function () {
    action.play()
    westside.pause() || asap.pause() || larry.pause()
    console.log('Action Bronson playing')
 }
 
 artist3.onclick = function () {
    asap.play()
    action.pause() || westside.pause() || larry.pause()
    console.log('Asap Rockey playing')
 }
 
 artist4.onclick = function () {
    larry.play()
    action.pause() || asap.pause() || westside.pause()
    console.log('Larry June playing')
 }

stopMusic.onclick = () => {
    westside.pause() ||
    asap.pause() ||
    action.pause() ||
    larry.pause()
}


export { 
    westside, 
    asap, 
    action, 
    larry,
    artist1, 
    artist2, 
    artist3, 
    artist4 
 }