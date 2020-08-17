//Main Container
let holder = document.querySelector(".carousel-holder")

//Wrong Rapper Choice Events
let wrongRapper = document.querySelector('.choice')

let rightRapper =  document.getElementById('rightRapper')

//Alert Box Data 
let rapSelect = document.querySelector('.rapSelect');
let alertBox = document.querySelector('.alertBoxes');
let alertGo = document.querySelector('.alertGos');
let alertMessage = document.querySelector('.alertMessage');


//User next level data
const nextLevel = document.querySelector('.nextLevel')
nextLevel.hidden = true;

let wrongMessages = [
    'SMH...You seriously thought that was the answer?',
    'Wow dude. Your pretty wack!!!',
    'Nah nah...you should had quit a long time ago...',
    'Sorry Buddy....try again...'
];

//Infinte Carousel for Challenge 3 Selection
let rapPicIndex = 0;
let slidesMoving = true;

function rapGameSlides() {
    let i;
    let rapPics = document.getElementsByClassName("rapSelect");

        if (slidesMoving === true) {
            for (i = 0; i < rapPics.length; i++) {
                rapPics[i].style.display = "none";
            }

            rapPicIndex++;
            if (rapPicIndex > rapPics.length) {
                rapPicIndex = 1;
            }
        }
        rapPics[rapPicIndex - 1].style.display = "block";
}

let rapSlides = setInterval(rapGameSlides, 1000);

holder.onclick = event => {

    let target = event.target

    if(target.classList.contains("wrongChoice")) {
        console.log("been seen")
        alertBox.style.display = "block";
        alertMessage.innerHTML = wrongMessages[Math.floor(Math.random() * wrongMessages.length)]
        slidesMoving = false;
    } else if (target.classList.contains("rightChoice")) {
        alertMessage.innerHTML = "You know about Vince Staples!"
        alertBox.style.display = "block";
        alertGo.style.display = "none"
        slidesMoving = false
        nextLevel.innerHTML = "Next Level"
        nextLevel.hidden = false;
    }
}


alertGo.onclick = event => { 
    alertBox.style.display = "none";
    let target = event.target 
    if (target.classList.contains("alertGos")) {
        slidesMoving = true;
        console.log("Alert Box Goes Away")
    }
}

    nextLevel.onclick = function () {
        window.location.href = "../challenge4/challenge4.html"
    }
    



