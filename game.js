var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');
var bullets = [];
var bullets2 = [];
//This is the blue box
var box = {
    xPos:245,
    yPos:400,
    goLeft:false,
    goRight:false,
    goUp:false,
    goDown:false,
    toRemove:false,
    move: function(){
        console.log(box.goLeft);
        if(box.goLeft && box.xPos>0){
            box.xPos = box.xPos - 5;
        }
        console.log(box.goRight);
        if(box.goRight && box.xPos<490){
            box.xPos += 5;
        }
        console.log(box.goUp);
        if(box.goUp && box.yPos>300){
            box.yPos -= 5;
        }
        console.log(box.goDown);
        if(box.goDown && box.yPos<490){
            box.yPos += 5;
        }
        console.log(box.xPos);
    },
    draw: function(){
        if(box.toRemove === false){
        ctx.beginPath();
        ctx.strokeStyle="blue";
        ctx.strokeRect(box.xPos,box.yPos,10,10);
        ctx.stroke();
        }
    }
};
//This is the red box
var boss = {
    xPos:245,
    yPos:100,
    width:10,
    height:10,
    goLeft:false,
    goRight:false,
    goUp:false,
    goDown:false,
    toRemove:false,
    move: function(){
        console.log(boss.goLeft);
        if(boss.goLeft && boss.xPos>0){
            boss.xPos -= 5;
        }
        console.log(boss.goRight);
        if(boss.goRight && boss.xPos<490){
            boss.xPos += 5;
        }
        console.log(boss.goDown);
        if(boss.goDown && boss.yPos<200){
            boss.yPos += 5;
        }
        console.log(boss.goUp);
        if(boss.goUp && boss.yPos>0){
            boss.yPos -= 5;
        }
        console.log(boss.xPos);
    },
    draw: function(){
        if(boss.toRemove === false){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.strokeRect(boss.xPos,boss.yPos,boss.width,boss.height);
        ctx.stroke();
        }
    },
};

//This is the collision detector
function isColliding(obj1, obj2){
    console.log(obj1);
    console.log(obj2);
    var isAbove = obj1.yPos + obj1.height < obj2.yPos;
    var isBelow = obj1.yPos > obj2.height + obj2.yPos;
    var isRight = obj1.xPos > obj2.width + obj2.xPos;
    var isLeft = obj1.xPos + obj1.width < obj2.xPos;
    
    return !(isAbove||isBelow||isRight||isLeft);
}

//This moves the boxes to their original position
function restart(){
    box.xPos = 245;
    box.yPos = 400;
    box.toRemove = false;
    boss.xPos = 245;
    boss.yPos = 100;
    boss.toRemove = false;
}

//Constructs blue bullets
function Bullet(xPos, yPos){
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = 10;
    this.width = 5;
    this.height = 10;
    this.toRemove = false;
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle="blue";
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
        ctx.fill();
    };
    this.move = function(){
        this.yPos -= 10;
        if(this.yPos < 0){
            this.toRemove = true;
        }
    };
}

//Constructs red bullets
function Bullet2(xPos, yPos){
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = 10;
    this.width = 5;
    this.height = 10;
    this.toRemove = false;
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
        ctx.fill();
    };
    this.move = function(){
        this.yPos += 10;
        if(this.yPos > 500){
            this.toRemove = true;
        }
    };
}

//Makes you shoot when the "h" key is pressed
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 72){
        bullets.push(new Bullet(box.xPos, box.yPos));
    }
});

//Makes the boss shoot when the "shift" key is pressed
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 16){
        bullets2.push(new Bullet2(boss.xPos, boss.yPos));
    }
});

//Alows box to move in specific direction when arrow key is pushed down
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 74){
        box.goLeft = true;
    }
    if(evt.keyCode === 73){
        box.goUp = true;
    }
    if(evt.keyCode === 76){
        box.goRight = true;
    }
    if(evt.keyCode === 75){
        box.goDown = true;
    }
});

//Makes box stop moving when arrow key is released
document.addEventListener("keyup", function(evt){
    if(evt.keyCode === 74){
        box.goLeft = false;
    }
    if(evt.keyCode === 73){
        box.goUp = false;
    }
    if(evt.keyCode === 76){
        box.goRight = false;
    }
    if(evt.keyCode === 75){
        box.goDown = false;
    }
});

//Makes boss stop moving when the arrow key is pushed down
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 65){
        boss.goLeft = true;
    }
    if(evt.keyCode === 68){
        boss.goRight = true;
    }
    if(evt.keyCode === 83){
        boss.goDown = true;
    }
    if(evt.keyCode === 87){
        boss.goUp = true;
    }
});

//Makes boss stop moving when the arrow key is released
document.addEventListener("keyup", function(evt){
    if(evt.keyCode === 65){
        boss.goLeft = false;
    }
    if(evt.keyCode === 68){
        boss.goRight = false;
    }
    if(evt.keyCode === 83){
        boss.goDown = false;
    }
    if(evt.keyCode === 87){
        boss.goUp = false;
    }
});

//This is the game loop
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
            bullets[i].toRemove = true;
            boss.toRemove = true;
        }
        if(bullets[i].toRemove){
            bullets.splice(i, 1);
        }
    }
    boss.move();
    boss.draw();
    for(i = 0; i < bullets2.length; i++){
        bullets2[i].draw();
        bullets2[i].move();
        if(isColliding(bullets2[i], box)){
            bullets2[i].toRemove = true;
            box.toRemove = true;
        }
        if(bullets2[i].toRemove){
            bullets2.splice(i, 1);
        }
    }
    window.requestAnimationFrame(gameLoop);
}
gameLoop();