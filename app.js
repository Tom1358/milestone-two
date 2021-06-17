document.addEventListener('DOMContentLoaded', function() { 

    document.getElementById('play-game').style.cursor = 'pointer';

    // define butterfly images in game
    const butterflies = document.getElementsByClassName('butterflies');
    const butterflyImageOne = document.getElementById("butterfly_image_one");
    const butterflyImageTwo = document.getElementById("butterfly_image_two");
    const butterflyImageThree = document.getElementById("butterfly_image_three");
    const butterflyImageFour = document.getElementById("butterfly_image_four");

    // RANDOM BUTTERFLY IMAGE STEP ONE: create random numbers
    let randomNum = Math.floor(Math.random()*4)+1;

    // RANDOM BUTTERFLY IMAGE STEP TWO: Change source of images to change picture (ref https://thisinterestsme.com/change-src-image-javascript/)
    function randomButterflyImage() {
        if (randomNum === 1) {
            butterflyImageOne.src ='assets/images/brown_argus.jpg';
            butterflyImageTwo.src ='assets/images/comma.jpg';
            butterflyImageThree.src ='assets/images/dark_green_fritillary.jpg';
            butterflyImageFour.src ='assets/images/marbled_white.jpg';
        } else if (randomNum === 2) {
            butterflyImageOne.src ='assets/images/marbled_white.jpg';
            butterflyImageTwo.src ='assets/images/brown_argus.jpg';
            butterflyImageThree.src ='assets/images/comma.jpg';
            butterflyImageFour.src ='assets/images/dark_green_fritillary.jpg';
        } else if (randomNum === 3) {
            butterflyImageOne.src ='assets/images/marbled_white.jpg';
            butterflyImageTwo.src ='assets/images/dark_green_fritillary.jpg';
            butterflyImageThree.src ='assets/images/brown_argus.jpg';
            butterflyImageFour.src ='assets/images/comma.jpg';
        } else {
            butterflyImageOne.src ='assets/images/dark_green_fritillary.jpg';
            butterflyImageTwo.src ='assets/images/marbled_white.jpg';
            butterflyImageThree.src ='assets/images/comma.jpg';
            butterflyImageFour.src ='assets/images/brown_argus.jpg';
        };
    };

    // run function to apply randomly generated images
    randomButterflyImage();

    // Variables used in game
    let level = 0;
    let round = 3;
    let roundOrder = [];
    let runningSequence = [];
    let playerOrder = [];

    // random number pushed into the 'round order' array
    function compTurn() {
        $('#level').text('Level'+' '+level);
        for (i = 0; i < round; i++) {
            roundOrder.push(Math.floor(Math.random()*4)+1);
            };
        setTimeout(function() {
            for (i = 0; i < roundOrder.length; i++) {
                butterflyFlash(i);
            }
        }, 500);
    } 

    // access each value in the 'round order' array, add a delay, and change the color of the background -n.b. https://stackoverflow.com/questions/37497872/how-to-save-clear-settimeouts-array-using-loops-index (was used to solve issue of everything flashing at once)
    function butterflyFlash(i) {
        setTimeout (function() {
            if (roundOrder[i] === 1) {
                    runningSequence.push(i);
                    butterflyOne();
                } if (roundOrder[i] === 2) {
                    runningSequence.push(i);
                    butterflyTwo();
                } if (roundOrder[i] === 3) {
                    runningSequence.push(i);
                    butterflyThree();
                } if (roundOrder[i] === 4) {
                    runningSequence.push(i);
                    butterflyFour();
                };
                if (runningSequence.length === roundOrder.length) {
                    setTimeout (function() {
                        playerTurn();
                    }, 1200);
                };   
        }, 1000 * i);
    };


    // Butterfly images to flash for half a second
    function butterflyOne() {
        butterflyImageOne.style.backgroundColor = '#00FF00';
        playerOrder.push[1];
        setTimeout(function () {
        butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 500);
    };

    function butterflyTwo() {
        butterflyImageTwo.style.backgroundColor = '#800000';
        playerOrder.push[2];
        setTimeout(function () {
            butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 500);
    };

    function butterflyThree() {
        butterflyImageThree.style.backgroundColor = '#FFFF00';
        playerOrder.push[3];
        setTimeout(function () {
            butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 500);
    };

    function butterflyFour() {
        butterflyImageFour.style.backgroundColor = '#0000FF';
        playerOrder.push[4];
        setTimeout(function () {
            butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 500);
    };

    // click functions to confirm functionality, and change background color of butterfly images
    

    function clearColor() {
        butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
    };

    function playerTurn() {
        $('.butterflies').css("cursor", "pointer");
        $('.butterflies').on('click', () => {setTimeout ( () => {$('.butterflies').css("cursor", ""); compareOrders();}), 600});
        butterflyImageOne.addEventListener('click', butterflyOne);
        butterflyImageTwo.addEventListener('click', butterflyTwo);
        butterflyImageThree.addEventListener('click', butterflyThree);
        butterflyImageFour.addEventListener('click', butterflyFour);
        setTimeout(function() {
            document.getElementById('play-game').style.display='';
        })
    };

    function compareOrders() {
        if (playerOrder === roundOrder) {
            alert('nice!');
            } else {
            alert('oh dear...');
            };
        };

    // Click start button to play game
    document.getElementById('play-game').addEventListener('click', () => {startGame();});

    function startGame() {
        level++;
        compTurn();
        clearColor();
        document.getElementById('play-game').style.display='none';
    }

    
    
        
       

    

})
