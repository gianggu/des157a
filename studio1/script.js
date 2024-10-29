(function () {
"use strict";
console.log("readin js");

const madLibs = document.querySelector('#madLibs');
const myForm = document.querySelector('form');
const startBtn = document.querySelector('#game_start div');

startBtn.addEventListener('click', function(event) {

    event.preventDefault();
    // make startscreen fade out and questions overlay fade in  
    game_start.className = "hidden";
    myForm.className = "showing";
})


myForm.addEventListener('submit', function(event) {

    event.preventDefault();
    myForm.className = "hidden";
    madLibs.className = "showing";
    
})


})();