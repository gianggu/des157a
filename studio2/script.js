(function () {

    "use strict";
    console.log('running js');
    
    const enterLeft = [
        'left1.png',
        'left2.png',
        'left3.png'
    ];

    const enterRight = [
        'right1.png',
        'right2.png',
        'right3.png'
    ];

    const main = document.querySelector('main');
    const info = document.querySelector('header p');

    let leftImage, rightImage = 0;
    const leftSlider = document.getElementById("left_slider");    const rightSlider = document.getElementById("right_slider");

    
    document.getElementById('next').addEventListener('click', nextSlide);

    function nextSlide() {
        console.log('running function');
        leftImage++; 
        rightImage++;
        //increment the counter
        //set the source for the slide to the next image
        if (leftImage > enterLeft.length - 1 && rightImage > enterRight.length - 1) {
            //If the user is at the end of the array...
            leftImage = 0; 
            rightImage = 0;
        }
        //how can i best write my js so I can have both sides enter at the same time, and also increment when the "next" button is pressed?
        leftSlider.src = `images/${enterLeft[leftImage]}`;
        rightSlider.src = `images/${enterRight[rightImage]}`;

    }

    document.getElementById('previous').addEventListener('click', previousSlide);

    function previousSlide() {
        leftImage--; 
        rightImage--; 
        //decrement the counter
        //set the source for the slide to the next image

        if (leftImage < 0 && rightImage < 0) {
            //If the user is at the beginning of the array...
            leftImage = enterLeft.length - 1;
            rightImage = enterRight.length - 1;
        }
        leftSlider.src = `images/${enterLeft[leftImage]}`;
        rightSlider.src = `images/${enterRight[rightImage]}`;
    }

})();