//Imported Variables and functions
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
const quikContainer = document.getElementById('quikStartBox');


//Drag Rapper Ids
let drakeAns = document.getElementById('drakeDrag');
let pushaAns = document.getElementById('pushaDrag');
let kuruptAns = document.getElementById('gottiDrag');
let quikAns = document.getElementById('quikDrag');
let jRockAns = document.getElementById('jRockDrag');


//Declartion for next challenge button
let nextPage = document.getElementById('nextPage');
nextPage.hidden = true;
nextPage.onclick = function() {
    window.location.href = "../challenge3/challenge3.html"
    //alert('Yes you know some things!')
}

const wrongRapDrag = [
    '<br><br>NO NO NO!', 
    '<br><br>Seriously Bro...?', 
    '<br><br>WTF are you smoking!?', 
    '<br><br>Fake ass Rap Fan', 
    '<br>You call <br>yourself a <br>contender?'
];


let rightRapAns = {
    drakeRight: function() {
        drakeBeats.innerHTML = "<br>Yuuup Thats Drizzy!";
        drakeBeats.style.backgroundColor = "white";
        drakeBeats.style.color = "black";
        this.rightMusicPlays()
        
    },
    jRockRight: function() {
        jRockBeats.innerHTML = "<br>Yuuup!<br>Thats Jay Rock<br>Straight Thugged Out!";
        jRockBeats.style.backgroundColor = "white";
        jRockBeats.style.color = "black";
        this.rightMusicPlays()
        
    },

    quikRight: function() {
        quikBeats.innerHTML = "<br>DJ Quik! <br><br>Thats Old Skool!";
        quikBeats.style.backgroundColor = "white";
        quikBeats.style.color = "black";
        this.rightMusicPlays()
    },

    pushaRight: function() {
        pushaBeats.innerHTML = "<br><br>Pusha Push!";
        pushaBeats.style.backgroundColor = "white";
        pushaBeats.style.color = "black";
        this.rightMusicPlays()
    },

    kuruptRight: function() {
        yGottiBeats.innerHTML = "<br><br>Kurupt Young Gotti!";
        yGottiBeats.style.backgroundColor = "white";
        yGottiBeats.style.color = "black";
        this.rightMusicPlays()
    },

    rightMusicPlays: function() {
        if(playJayRock || playDrake || playKurupt || playPushaT || playQuik) {
            jRock.pause() || drake.pause() || youngGotti.pause() || pushaT.pause() || quik.pause() 
        }
    }


};


const returnRapDrags = {
    returnJrock: function() {
        jRockContainer.innerHTML = "<p draggable='true' id='jRockDrag'>Jay Rock</p>";
    },

    returnDrake: function() {
        drakeContainer.innerHTML = "<p draggable='true' id='drakeDrag'> Drake </p>";
    },

    returnPusha: function() {
        pushaContainer.innerHTML = "<p draggable='true' id='pushaDrag'> Pusha T </p>";
    },

    returnQuik: function() {
        quikContainer.innerHTML = "<p draggable='true' id='quikDrag'> Dj Quik </p>";
    },

    returnKurupt: function() {
        kuruptContainer.innerHTML = "<p draggable='true' id='gottiDrag'> Kurupt </p>";
    }

};




document.ondragstart = function (event) {
    event.dataTransfer.setData('text', event.target.id);
    console.log('dragstart');
};

document.ondragover = function (event) {
    event.preventDefault();
    console.log('dragover');
};


const rapperDrop = {

    jRockDrop: function(event) {
        event.preventDefault();
        let jdata = event.dataTransfer.getData('text');
        event.target.appendChild(document.getElementById(jdata));
        console.log('Jay Rock does not play');
        //jRock.pause();

       if(event.target.querySelector('#jRockDrag')) {
       //jRockBeats.innerHTML = rightRapDrag[3];
       rightRapAns.jRockRight()
       rightRapTracker.push('point')
       jRockBeats.removeEventListener('drop', rapperDrop.jRockDrop);
       playJayRock() 

        } else if (event.target.querySelector('#drakeDrag')) {
            jRockBeats.innerHTML = wrongRapDrag[2];
            returnRapDrags.returnJrock();
            returnRapDrags.returnDrake();
           
        } else if (event.target.querySelector('#pushaDrag')) {
            jRockBeats.innerHTML = wrongRapDrag[2]   
            returnRapDrags.returnJrock();
            returnRapDrags.returnPusha();
         
        } else if (event.target.querySelector('#quikDrag')) {
            jRockBeats.innerHTML = wrongRapDrag[2]
            returnRapDrags.returnJrock();
            returnRapDrags.returnQuik();
            
        } else if (event.target.querySelector('#gottiDrag')) {
            jRockBeats.innerHTML = wrongRapDrag[2]
            returnRapDrags.returnJrock();
            returnRapDrags.returnKurupt();
            
        }
       },

    drakeDrop: function(event) {
        event.preventDefault();
        let drakeData = event.dataTransfer.getData('text');
        event.target.appendChild(document.getElementById(drakeData));
        console.log('Drake does not playing');
        //drake.pause();

        if(event.target.querySelector('#drakeDrag')) {
            //drakeBeats.innerHTML = rightRapDrag[0];
            rightRapAns.drakeRight();
            rightRapTracker.push('point')
            drakeBeats.removeEventListener('drop', rapperDrop.drakeDrop);
            playDrake()

        } else if (event.target.querySelector('#jRockDrag')) {
            drakeBeats.innerHTML = wrongRapDrag[3]
            returnRapDrags.returnDrake();
            returnRapDrags.returnJrock();
            
        } else if (event.target.querySelector('#pushaDrag')) {
            drakeBeats.innerHTML = wrongRapDrag[3]
            returnRapDrags.returnDrake();
            returnRapDrags.returnPusha();
           
        } else if (event.target.querySelector('#quikDrag')) {
            drakeBeats.innerHTML = wrongRapDrag[3]
            returnRapDrags.returnDrake();
            returnRapDrags.returnQuik();
         
        } else if (event.target.querySelector('#gottiDrag')) {
            drakeBeats.innerHTML = wrongRapDrag[3]
            returnRapDrags.returnDrake();
            returnRapDrags.returnKurupt();
          
        }
       },


       pushaDrop: function(event) {
        event.preventDefault() 
         let pushaTData = event.dataTransfer.getData('text');  
         event.target.appendChild(document.getElementById(pushaTData)); 
         console.log('pusha T stops playing')
         //pushaT.pause()

         if(event.target.querySelector('#pushaDrag')) {
             rightRapAns.pushaRight();
             rightRapTracker.push('point');
             pushaBeats.removeEventListener('drop', rapperDrop.pushaDrop);
             playPushaT()

         } else if (event.target.querySelector('#drakeDrag')) {
             pushaBeats.innerHTML = wrongRapDrag[0];
             returnRapDrags.returnPusha();
             returnRapDrags.returnDrake();
          
         } else if (event.target.querySelector('#jRockDrag')) {
            pushaBeats.innerHTML = wrongRapDrag[0];
            returnRapDrags.returnPusha();
            returnRapDrags.returnJrock();
       
         } else if (event.target.querySelector('#quikDrag')) {
            pushaBeats.innerHTML = wrongRapDrag[0];
            returnRapDrags.returnPusha();
            returnRapDrags.returnQuik();
    
         } else if (event.target.querySelector('#gottiDrag')) {
            pushaBeats.innerHTML = wrongRapDrag[0];
            returnRapDrags.returnPusha();
            returnRapDrags.returnKurupt();
       
         }
    },

    quikDrop: function(event) {
        event.preventDefault() 
         let pushaTData = event.dataTransfer.getData('text');  
         event.target.appendChild(document.getElementById(pushaTData)); 
         console.log('pusha T stops playing');
         //quik.pause();

         if(event.target.querySelector('#quikDrag')) {
            rightRapAns.quikRight();
            rightRapTracker.push('Point');
            quikBeats.removeEventListener('drop', rapperDrop.quikDrop);
            quik.play()

         } else if (event.target.querySelector('#jRockDrag')) {
            quikBeats.innerHTML =  wrongRapDrag[1];
            returnRapDrags.returnQuik();
            returnRapDrags.returnJrock();
           
         } else if (event.target.querySelector('#drakeDrag')) {
            quikBeats.innerHTML =  wrongRapDrag[1];
            returnRapDrags.returnQuik();
            returnRapDrags.returnDrake();
          
         } else if(event.target.querySelector('#pushaDrag')) {
            quikBeats.innerHTML =  wrongRapDrag[1];
            returnRapDrags.returnQuik();
            returnRapDrags.returnPusha();
         
         } else if(event.target.querySelector('#gottiDrag')) {
            quikBeats.innerHTML =  wrongRapDrag[1];
            returnRapDrags.returnQuik();
            returnRapDrags.returnKurupt();
         
         }
    },

     kuruptDrop: function(event) {
        event.preventDefault(); 
         let pushaTData = event.dataTransfer.getData('text');  
         event.target.appendChild(document.getElementById(pushaTData)); 
         console.log('pusha T stops playing');
        

         if(event.target.querySelector('#gottiDrag')) {
            rightRapAns.kuruptRight();
            rightRapTracker.push('Kurupt Young Gotti!');
            yGottiBeats.removeEventListener('drop', rapperDrop.kuruptDrop);
            playKurupt()
          
         } else if (event.target.querySelector('#jRockDrag')) {
             yGottiBeats.innerHTML = wrongRapDrag[4];
             returnRapDrags.returnKurupt();
             returnRapDrags.returnJrock();
         
         } else if (event.target.querySelector('#drakeDrag')) {
             yGottiBeats.innerHTML = wrongRapDrag[4];
             returnRapDrags.returnKurupt();
             returnRapDrags.returnDrake();
             
         } else if (event.target.querySelector('#pushaDrag')) {
            yGottiBeats.innerHTML = wrongRapDrag[4];
            returnRapDrags.returnKurupt();
            returnRapDrags.returnPusha();
        
         } else if (event.target.querySelector('#quikDrag')) {
             yGottiBeats.innerHTML = wrongRapDrag[4];
             returnRapDrags.returnKurupt();
             returnRapDrags.returnQuik();
    
         }
    }
};


jRockBeats.addEventListener('drop', rapperDrop.jRockDrop);
drakeBeats.addEventListener('drop', rapperDrop.drakeDrop);
pushaBeats.addEventListener('drop', rapperDrop.pushaDrop);
quikBeats.addEventListener('drop', rapperDrop.quikDrop);
yGottiBeats.addEventListener('drop', rapperDrop.kuruptDrop);

//Holder for when user drops all right answers
const rightRapTracker = [];

window.addEventListener('drop', function() {
    if (rightRapTracker.length === 5) {
        nextPage.hidden = false;
    }

})


        

