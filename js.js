const preload = document.querySelector(".preload");
const preloadedShapes = preload.querySelectorAll("img"),
i = 1;

//shapes at random on the page
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }





// With all the shapes inside the <div> read into an array, I can loop through each one:
preloadedShapes.forEach(function(shape) {   
    shape.style.position = "absolute";
    shape.style.width = getRandom(33,45)+"%";
    shape.style.left = getRandom(5,65)+"%";
    shape.style.right = getRandom(5,65)+"%";
    shape.style.top = getRandom(6,60)+"vh";
    shape.style.bottom = getRandom(6,60)+"vh";
    shape.style.transform = "scale(0.6) rotate(" + ( Math.random() * 20 - 10) + "deg)";
    shape.classList.add("hide");
})





