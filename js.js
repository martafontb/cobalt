const preload = document.querySelector(".preload");
const preloadedShapes = preload.querySelectorAll("img"),
i = 1;

//shapes at random on the page
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// With all the shapes inside the <div> read into an array, I can loop through each one:
Array.prototype.forEach.call(preloadedShapes, function(shape) {   
        shape.style.position = "absolute";
        shape.style.width = getRandom(33,45)+"%";
        shape.style.left = getRandom(-5,65)+"%";
        shape.style.right = getRandom(-5,65)+"%";
        shape.style.top = getRandom(-6,60)+"vh";
        shape.style.bottom = getRandom(-6,60)+"vh";
        shape.classList.add("hide");
        // setTimeout(()=> {
        //     shape.classList.add("hide");
        //         }, 1500 * i)
})
