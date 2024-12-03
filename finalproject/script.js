(function () {
"use strict";
console.log("readin js");

const madLibs = document.querySelector('#madLibs');
const myForm = document.querySelector('form');
const startBtn = document.querySelector('#game_start div');
const body = document.querySelector('body');

startBtn.addEventListener('click', function(event) {

    event.preventDefault();
    game_start.className = "hidden";
    myForm.className = "showing";
    document.body.style.backgroundImage = `url('images/community-center1.jpg')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
})


myForm.addEventListener('submit', function(event) {

    event.preventDefault();
// advnced madlibs hw to make it more concise
    const q1 = document.querySelector('#q1').value;
        console.log(q1);
    const q2 = document.querySelector('#q2').value;
    const q3 = document.querySelector('#q3').value;
    const q4 = document.querySelector('#q4').value;
    const q5 = document.querySelector('#q5').value;
    const q6 = document.querySelector('#q6').value;
    const q7 = document.querySelector('#q7').value;
    const q8 = document.querySelector('#q8').value;
    
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

    } else {

        myForm.className = "hidden";
        document.body.style.backgroundImage = `url(images/my-home.jpeg)`;
        body.removeAttribute('community-center');
        body.className = "my-home";
        results = `
        Dear ${q1},<br><br>I have much to update you on.
        Since moving here, I have been very busy with settling down. I make a lot of money by ${q2}.
        Recently, I have taken a liking to Haley despite her ${q3} personality and interest in ${q4}.
        One problem though, I'm already married to Elliot! Our ${q5} is very romantic, but I crave Haley's spice.
        I know it isn't right, but I gift her ${q6} every day to win her love...
        The mayor once caught us ${q7}, but he won't say anything because I know of his relationship with Maggie! His ${q8} are in her room. Haha! 

        It's quite spicy here in Pelican Town ;)
		
        `;
        madLibs.innerHTML = results;
        madLibs.className = "showing";
        
        // This empties input field after submission
        document.querySelector('#q1').value = '';
        document.querySelector('#q2').value = '';
        document.querySelector('#q3').value = '';
        document.querySelector('#q4').value = '';
        document.querySelector('#q5').value = '';
        document.querySelector('#q6').value = '';
        document.querySelector('#q7').value = '';
        document.querySelector('#q8').value = '';


        // const textFields = document.querySelectorAll('input[type=text]');
        
        // for ( let i = 0; i>textFields.length; i++;) {

        //     textFields[i].value ='';
        // }

    }

    
    // madLibs.style.
    // madLibs.createTextNode('p');
    // madLibs.appendChild.
})


})();