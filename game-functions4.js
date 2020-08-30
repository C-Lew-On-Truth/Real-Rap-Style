let spinWheel = document.querySelector('#spinner');
let artist1 = document.querySelector('.artist-1');
let artist2 = document.querySelector('.artist-2');
let artist3 = document.querySelector('.artist-3');
let artist4 = document.querySelector('.artist-4');

let rap1 = document.querySelector('.rap1');
let rap2 = document.querySelector('.rap2');
let rap3 = document.querySelector('.rap3');
let rap4 = document.querySelector('.rap4');

artist1.onclick = function() {
   rap1.style.backgroundColor = 'red'
}
artist2.onclick = function() {
   rap2.style.backgroundColor = 'green'
}
artist3.onclick = function() {
   rap3.style.backgroundColor = 'blue'
}
artist4.onclick = function() {
   rap4.style.backgroundColor = 'purple'
}

/*
spinWheel.onclick = function() {
   document.querySelector('#spinner').classList.remove('spin-wheel')
   document.querySelector('#spinner').classList.add('stop-spin')
}
*/