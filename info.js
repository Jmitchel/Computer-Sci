var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
var item6 = document.getElementById("item6");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

//This is the code that gives you the first step when you click the first image
item1.addEventListener("click", function(){
    info1.innerHTML = "White Side";
    info2.innerHTML = "To solve the white side of a Rubik's Cube takes spatial thinking rather than a actual algorithm, just remember to focus only on solving the white side. Once you are done make sure that all the edges are aligned like in the picture and move on to the next step.";
});

//This gives you step two when you click on the second image
item2.addEventListener("click", function(){
    info1.innerHTML = "Second Layer";
    info2.innerHTML = "";
});

//This gives you step three when you click on the third image
item3.addEventListener("click", function(){
    info1.innerHTML = "Yellow Cross";
    info2.innerHTML = "";
});

//This gives you step four when you click on the fourth image
item4.addEventListener("click", function(){
    info1.innerHTML = "Yellow Corners";
    info2.innerHTML = "";
});

//This gives you step five when you click on the fifth image
item5.addEventListener("click", function(){
    info1.innerHTML = "Third Layer";
    info2.innerHTML = "After this there is just one more step, so please bear with me just a little longer.";
});

//This gives you the final step when you click on the fifth image, it also tells you that what you feel is a insane accomplishment is actually pathetic in comparison to the feats other people have accomplished in the world of Rubik's Cubes
item6.addEventListener("click", function(){
    info1.innerHTML = "Final Step";
    info2.innerHTML = "The final step is to get better, as the picture implies solving the basic Rubik's Cube is nothing.";
});