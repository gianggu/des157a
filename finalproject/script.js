(function () {
    "use strict";

    const madLibs = document.querySelector('#madLibs');
    const myForm = document.querySelector('form');
    const mail = document.querySelector('mail');
    const startBtn = document.querySelector('#stardew_madlibs');
    const body = document.querySelector('body');
    const bgm = new Audio('sounds/bgm.mp3');
    const playMusic = document.querySelector('.toggleMusic'); 

    let notPlaying = true;

    playMusic.addEventListener('click', function(){
        if(notPlaying == false){
            bgm.pause();
            notPlaying = true;
        } else {
            bgm.play();
            notPlaying = false;
        }
    });

    function createReturnButton() {
        // return to start button
        const returnToStartBtn = document.createElement('button');
        returnToStartBtn.textContent = "Return To Start";

         // Position the button in the top-left corner of myForm
         returnToStartBtn.style.position = 'absolute';
         returnToStartBtn.style.top = '1em';
         returnToStartBtn.style.left = '-10em';

         myForm.appendChild(returnToStartBtn);
         return returnToStartBtn;
    }

    function createBackBtn() {
        const backBtn = document.createElement('button');
        backBtn.textContent = "Back";
        backBtn.className = "back-button";

        backBtn.style.position = 'relative';
        backBtn.style.top = '10%';
        backBtn.style.left = '65%';

        backBtn.addEventListener('click', function() {

            const clickSound = new Audio('sounds/clickSound.mp3');
            clickSound.play();

            myForm.className = "showing";
            madLibs.className = "hidden";
        });

        return backBtn;
    }


    startBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const clickSound = new Audio('sounds/clickSound.mp3');
        clickSound.play();
        
        game_start.className = "hidden";
        myForm.className = "showing";

        const returnToStartBtn = createReturnButton();
        
        document.body.style.backgroundImage = `url('images/community-center1.jpg')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';

        returnToStartBtn.addEventListener('click', function(event) {
            event.preventDefault();


            const clickSound = new Audio('sounds/clickSound.mp3');
            clickSound.play();
        
            myForm.className = "hidden";
            game_start.className = "showing";
        });

    });

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const clickSound = new Audio('sounds/clickSound.mp3');
        clickSound.play();

        const q1 = document.querySelector('#q1').value;
        const q2 = document.querySelector('#q2').value;
        const q3 = document.querySelector('#q3').value;
        const q4 = document.querySelector('#q4').value;
        const q5 = document.querySelector('#q5').value;
        const q6 = document.querySelector('#q6').value;
        const q7 = document.querySelector('#q7').value;
        const q8 = document.querySelector('#q8').value;
        
        let results;

        if (q1 == '') {
            document.querySelector('#q1').focus();
        } else if (q2 == '') {
            document.querySelector('#q2').focus();
        } else if (q3 == '') {
            document.querySelector('#q3').focus();
        } else if (q4 == '') {
            document.querySelector('#q4').focus();
        } else if (q5 == '') {
            document.querySelector('#q5').focus();
        } else if (q6 == '') {
            document.querySelector('#q6').focus();
        } else if (q7 == '') {
            document.querySelector('#q7').focus();
        } else if (q8 == '') {
            document.querySelector('#q8').focus();    
        } else {
            myForm.className = "hidden";
            document.body.style.backgroundImage = `url(images/my-home.jpeg)`;
            body.className = "my-home";
            
            results = `
            Dear ${q1},<br><br>I have much to update you on.
            Since moving here, I been very busy with getting the farm goin' that it's already been 2 years!
            Recently, I've taken a likin' to Haley despite her ${q2} personality and interest in ${q3}.
            One problem though, I'm already married to Elliot! Our ${q4} is very romantic, but I crave Haley's spice.
            I know it ain't right, but I gift her ${q5} every day to win her love...
            The mayor once caught us ${q6}, but he won't say anything because I know of his relationship with Maggie! I found his ${q7}  in her room. Haha! It's quite spicy 'ere in Pelican Town ;)
            <br>
            <br>
            I've been wondering, how's that ${q8} problem of yours doin'? Can't wait to hear back from ya! 
            <br>
            <br>
            From,
            <br> 
            your ol' bud
            `;

            madLibs.innerHTML = results;
            madLibs.className = "showing";
            
            document.querySelector('#q1').value = '';
            document.querySelector('#q2').value = '';
            document.querySelector('#q3').value = '';
            document.querySelector('#q4').value = '';
            document.querySelector('#q5').value = '';
            document.querySelector('#q6').value = '';
            document.querySelector('#q7').value = '';
            document.querySelector('#q8').value = '';

            const backBtn = createBackBtn();
            madLibs.appendChild(backBtn);
        }
    });
    setupBackgroundMusic();

})();