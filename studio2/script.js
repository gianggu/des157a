(function () {

    "use strict";
    console.log('running js');
    
    const enterLeft = [
        'left1.jpg',
        'left2.jpg',
        'left3.jpg'
    ];

    const enterRight = [
        'right1.jpg',
        'right2.jpg',
        'right3.jpg'
    ];

    const textInfo = [
        'Now: Flying',
        'Now: Eating ',
        'Now: ??'
    ];


    const main = document.querySelector('main');
    const info = document.querySelector('header p');

    const leftSlider = document.getElementById("left_slider");    
    const rightSlider = document.getElementById("right_slider");

    let counter  = 0;
    
    function changeSlide(leftSide, rightSide) {
        console.log('running function');
        const leftbg = leftSide[counter];
        const rightbg = rightSide[counter];
        const center = rightSide[counter];

        leftSlider.style.backgroundImage = `url(images/${leftbg})`;
        rightSlider.style.backgroundImage = `url(images/${rightbg})`;

        setTimeout(function(){
            //animate in the photos
            leftSlider.className = "animateLeftImg";
            rightSlider.className = "animateRightImg";
            //wait 3 seconds
            setTimeout(function(){
                //create a photo element
                const photo = document.createElement('img');
                //assign the src
                photo.src = `images/${center}`;
                //add the class
                photo.className = 'placed';
                //put the photo in the main element
                main.appendChild(photo);
                //change the text at the top of the page...
                info.textContent = textInfo[counter];
            }, 3000);
        }, 2000);
    }

    document.getElementById('next').addEventListener('click', function() {
        counter++;
        changeSlide(enterLeft, enterRight);
    });
    
    document.getElementById('previous').addEventListener('click', function() {
        counter --;
        changeSlide(enterLeft, enterRight);
    });

})();