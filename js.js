const preload = document.querySelector(".preload")
const preloadedShapes = preload.querySelectorAll("img")


//random num generator
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


// With all the shapes inside the <div> read into an array, I can loop through each one:
preloadedShapes.forEach((shape) => {  
    preload.appendChild(shape.cloneNode(true));
    shape.style.position = "absolute";
    shape.style.transform = "scale(0.55) rotate(" + ( Math.random() * 20 - 10) + "deg)";
    shape.style.width = getRandom(33, 75)+"%";
    shape.style.left = getRandom(-20, 100)+"%";
    shape.style.top = getRandom(-20, 100)+"vh"; 
})



const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
    preloadedShapes.forEach(function(shape) {  
        shape.style.transform = "scale(1.3) rotate(" + ( Math.random() * 20 - 10) + "deg)";
    })
}

