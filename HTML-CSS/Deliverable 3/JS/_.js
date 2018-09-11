var image = new Array("IMG/images/1.jpg", "IMG/images/2.jpg", "IMG/images/3.jpg");
var imageNumber = 0;
var imageLength = image.length - 1;
var interval = setInterval(function() {changeImage(1)}, 2000);

var buttonLeft = document.querySelector(".button--left");
console.log(buttonLeft);

var buttonRight = document.querySelector(".button--right");
console.log(buttonRight);

var buttonPlay = document.querySelector(".button--play");
console.log(buttonPlay);

var buttonPause = document.querySelector(".button--pause");
console.log(buttonPause);

buttonLeft.addEventListener("click", function(){changeImage(-1)} );
buttonRight.addEventListener("click", function(){changeImage(1)} );
buttonPlay.addEventListener("click", play);
buttonPause.addEventListener("click", pause);

document.onkeyup = function(e) {
    var image = document.getElementById('x');

    if (event.keyCode == 37) {
        changeImage(-1);

    } else if (event.keyCode == 39) {
        changeImage(1);
    }
};
// Next + Previous
function changeImage(num) {

    imageNumber = imageNumber + num;

    if (imageNumber > imageLength){

        imageNumber = 0;

    }

    if (imageNumber < 0){

        imageNumber = imageLength
    }

    document.slideshow.src= image[imageNumber];

    return false;

}
// Play
function play() {
    if (!interval){
        interval = setInterval(function() {changeImage(1)}, 2000);
    }
}
// Pause
function pause() {
    clearInterval(interval);
    interval = false;
}
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);