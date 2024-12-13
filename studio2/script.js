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
        'Now Landing...',
        'Now Eating :3 ',
        'Now Adventuring!'
    ];


    const main = document.querySelector('main');
    const info = document.querySelector('header p');

    const leftSlider = document.getElementById("left_slider");    
    const rightSlider = document.getElementById("right_slider");
    const prevBtn = document.getElementById('previous');
    const nextBtn = document.getElementById('next');


    let counter = 0;
    
    function changeSlide(leftSide, rightSide) {
        console.log('running function');
        const leftbg = leftSide[counter];
        const rightbg = rightSide[counter];
        const center = rightSide[counter];

        leftSlider.style.backgroundImage = `url(images/${leftbg})`;
        rightSlider.style.backgroundImage = `url(images/${rightbg})`;

        setTimeout(function() {
            info.textContent = textInfo[counter];
        }, 1000);

        setTimeout(function() {
            //animate in the photos
            leftSlider.className = "animateLeftImg";
            rightSlider.className = "animateRightImg";
            //wait 3 seconds
            setTimeout(function() {
                //create a photo element
                const photo = document.createElement('img');
                //assign the src
                photo.src = `images/${center}`;
                //add the class
                photo.className = 'placed';
                //put the photo in the main element
                main.appendChild(photo);
                //change the text at the top of the page...
                // info.textContent = textInfo[counter];
            }, 1200);
        }, 1000);
    }
    changeSlide(enterLeft, enterRight);


    nextBtn.addEventListener('click', function() {
        if (counter == enterLeft.length) {
            counter = 0;
            alert(`You're at the end of the presentation!`);

        }
        else {
            counter++;
        }

        document.querySelector('.placed').remove();
        leftSlider.removeAttribute('class');
        rightSlider.removeAttribute('class');

        changeSlide(enterLeft, enterRight);
    });
      
    prevBtn.addEventListener('click', function() {
        if (counter < 0) {
            counter = enterLeft.length - 1;
            alert(`You're at the start of the presentation!`);
        }
        else {
            counter--;
        }

        // if (counter == 0) {
        //     prevBtn.classList.add('hidden');
        // }
        // else {
        //     prevBtn.classList.add('showing');
        // }
        document.querySelector('.placed').remove();
        leftSlider.removeAttribute('class');
        rightSlider.removeAttribute('class');
        changeSlide(enterLeft, enterRight);
    });

})();