//This is the canvas
var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');
var bullets = [];
//This is the blue box
var box = {
    xPos:245,
    yPos:400,
    goLeft:false,
    goRight:false,
    goUp:false,
    goDown:false,
    move: function(){
        console.log(box.goLeft);
        if(box.goLeft && box.xPos>0){
            box.xPos = box.xPos - 5;
        }
        if(box.goRight && box.xPos<490){
            box.xPos += 5;
        }
        if(box.goUp && box.yPos>300){
            box.yPos -= 5;
        }
        if(box.goDown && box.yPos<490){
            box.yPos += 5;
        }
        console.log(box.xPos);
    },
    draw: function(){
        ctx.beginPath();
        ctx.strokeStyle="blue";
        ctx.strokeRect(box.xPos,box.yPos,10,10);
        ctx.stroke();
    }
};
//This is the red box
var boss = {
    xPos:245,
    yPos:100,
    goLeft:false,
    goRight:false,
    goUp:false,
    goDown:false,
    width:10,
    height:10,
    draw: function(){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.strokeRect(boss.xPos,boss.yPos,boss.width,boss.height);
    },
    move: function(){
        // if(isColliding(bullets[i], boss)){
        //     var i = boss.indexOf(this);
        //     boss.splice(i, 1);
        // }
    }
};

function isColliding(obj1, obj2){
    var isAbove = obj1.yPos + obj1.height < obj2.yPos;
    var isBelow = obj1.yPos > obj2.height + obj2.yPos;
    var isRight = obj1.xPos > obj2.width + obj2.width;
    var isLeft = obj1.xPos + obj1.Width > obj2.yPos;
    
    return !(isAbove||isBelow||isRight||isLeft);
}

//This moves the boxes to their original position
function restart(){
    box.xPos = 245;
    box.yPos = 400;
    boss.xPos = 245;
    boss.yPos = 100;
}

// Constructs bullets
function Bullet(xPos, yPos){
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = 10;
    this.width = 5;
    this.height = 10;
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle="white";
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
        ctx.fill();
    };
    this.move = function(){
        this.yPos -= 10;
        if(this.yPos < 0){
            var i = bullets.indexOf(this);
            bullets.splice(i, 1);
        }
    };
}

// use constructor      new Bullet(box.x);
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 65){
        bullets.push(new Bullet(box.xPos, box.yPos));
    }
});

//Alows box to move in specific direction when arrow keys are pushed down
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = true;
    }
    if(evt.keyCode === 38){
        box.goUp = true;
    }
    if(evt.keyCode === 39){
        box.goRight = true;
    }
    if(evt.keyCode === 40){
        box.goDown = true;
    }
});

//Makes box stop moving when arrow key is released
document.addEventListener("keyup", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = false;
    }
    if(evt.keyCode === 38){
        box.goUp = false;
    }
    if(evt.keyCode === 39){
        box.goRight = false;
    }
    if(evt.keyCode === 40){
        box.goDown = false;
    }
});

function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    ctx.stroke();
    box.move();
    box.draw();
    for(var i = 0; i < bullets.length; i++){
        bullets[i].draw();
        bullets[i].move();
        if(isColliding(bullets[i], boss)){
            
            // bullets.splice(i, 1);
        }
    }
    boss.draw();
    window.requestAnimationFrame(gameLoop);
}
gameLoop();