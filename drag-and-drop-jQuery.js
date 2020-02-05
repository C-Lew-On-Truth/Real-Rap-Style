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

/*
$(document).ready(function(){
  $("#click").click(function(){
    $("#hide").toggle();
  });
});
*/

$(document).ready(function() {
  $(function() {
    $('#yGotti-plays').droppable({
      drop: function(event, ui) {
        $this().find("#gottiDrag")
      }
    });
  });
  
})


