const preload = document.querySelector(".preload")
const preloadedShapesTopLeft = preload.querySelectorAll(".top-left")
const preloadedShapesTopRight = preload.querySelectorAll(".top-right")
const preloadedShapesBottomLeft = preload.querySelectorAll(".bottom-left")
const preloadedShapesBottomRight = preload.querySelectorAll(".bottom-right")

//random num generator
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

// With all the shapes inside the <div> read into an array, I can loop through each one:
preloadedShapesTopLeft.forEach((shape) => {  
    shape.style.position = "absolute";
    shape.style.transform = "scale(0.55) rotate(" + ( Math.random() * 20 - 10) + "deg)";
    shape.style.width = getRandom(33, 65)+"%";
    shape.style.left = 0;
    shape.style.top = getRandom(-20, 100)+"vh"; 
})

// With all the shapes inside the <div> read into an array, I can loop through each one:
preloadedShapesTopRight.forEach((shape) => {  
    shape.style.position = "absolute";
    shape.style.transform = "scale(0.55) rotate(" + ( Math.random() * 20 - 10) + "deg)";
    shape.style.width = getRandom(33, 65)+"%";
    shape.style.right = getRandom(-20, 100)+"%";
    shape.style.top = 0;
})

// With all the shapes inside the <div> read into an array, I can loop through each one:
preloadedShapesBottomLeft.forEach((shape) => {  
    shape.style.position = "absolute";
    shape.style.transform = "scale(0.55) rotate(" + ( Math.random() * 20 - 10) + "deg)";
    shape.style.width = getRandom(33, 65)+"%";
    shape.style.left = getRandom(-20, 100)+"%";
    shape.style.bottom = 0;
})

// With all the shapes inside the <div> read into an array, I can loop through each one:
preloadedShapesBottomRight.forEach((shape) => {  
    shape.style.position = "absolute";
    shape.style.transform = "scale(0.55) rotate(" + ( Math.random() * 20 - 10) + "deg)";
    shape.style.width = getRandom(33, 65)+"%";
    shape.style.right = 0;
    shape.style.bottom = getRandom(-20, 100)+"vh"; 
})

const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
    preloadedShapes.forEach(function(shape) {  
        shape.style.transform = "scale(1.3) rotate(" + ( Math.random() * 20 - 10) + "deg)";
    })
}
