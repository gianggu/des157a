(function () {
"use strict";
console.log("readin js");

const madLibs = document.querySelector('#madLibs');
const myForm = document.querySelector('form');
const startBtn = document.querySelector('#game_start div');

startBtn.addEventListener('click', function(event) {

    event.preventDefault();
    game_start.className = "hidden";
    myForm.className = "showing";
})


myForm.addEventListener('submit', function(event) {

    event.preventDefault();
    alert('Form submitted');


    const q1 = document.querySelector('#q1').value;
        console.log(q1);
    const q2 = document.querySelector('#q2').value;
    const q3 = document.querySelector('#q3').value;
    const q4 = document.querySelector('#q4').value;
    const q5 = document.querySelector('#q5').value;
    const q6 = document.querySelector('#q6').value;
    const q7 = document.querySelector('#q7').value;
    const q8 = document.querySelector('#q8').value;
    const q9 = document.querySelector('#q9').value;
    
    let results;


    if (q1 =='') {

        results = "Please provide a verb";
        document.querySelector('#q1').focus();

    } else if (q2 =='') {

        results = "Please provide a verb";
        document.querySelector('#q2').focus();

    } else if (q3 =='') {

        results = "Please provide a continuous verb";
        document.querySelector('#q3').focus();

    } else if (q4 =='') {

        results = "Please provide an adjective";
        document.querySelector('#q4').focus();

    } else if (q5 =='') {

        results = "Please provide a verb";
        document.querySelector('#q5').focus();

    } else if (q6 =='') {

        results = "Please provide a verb";
        document.querySelector('#q6').focus();

    } else if (q7 =='') {

        results = "Please provide a continuous verb";
        document.querySelector('#q7').focus();

    } else if (q8 =='') {

        results = "Please provide an adjective";
        document.querySelector('#q8').focus();    

    } else if (q9 =='') {

        results = "Please provide an adjective";
        document.querySelector('#q9').focus();    
    } else {

        myForm.className = "hidden";
        madLibs.className = "showing";
        results = (`You typed the words ${q1} ${q2} ${q3} ${q4}`);
        // This empties input field after submission
        document.querySelector('#q1').value = '';
        document.querySelector('#q2').value = '';
        document.querySelector('#q3').value = '';
        document.querySelector('#q4').value = '';
        document.querySelector('#q5').value = '';
        document.querySelector('#q6').value = '';
        document.querySelector('#q7').value = '';
        document.querySelector('#q8').value = '';
        document.querySelector('#q9').value = '';


        // const textFields = document.querySelectorAll('input[type=text]');
        
        // for ( let i = 0; i>textFields.length; i++;) {

        //     textFields[i].value ='';
        // }

    }

    madLibs.innerHTML = results;
    // madLibs.style.
    // madLibs.createTextNode('p');
    // madLibs.appendChild.
})


})();