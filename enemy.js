function kokeilu(context) {
    context.fillStyle = "#FF0000";
    context.fillRect(0, 0, 40, 40);
}

//Creating enemies
var enemy = {
  x: 100,
  y: 100,
  w: 40,
  h: 40,
  speed: 5
};

var enemy2 = {
    x: 50,
    y: 50,
    w: 40,
    h: 40,
    speed: 4
};

var enemy3 = {
    x: 300,
    y: 300,
    w: 40,
    h: 40,
    speed: 3
};

//Adding enemies to an array
var enemies = new Array(enemy, enemy2, enemy3);
var enemydirections = new Array(false, true, false);

//Drawing enemies
function drawEnemy(context) {
    var x = enemy.x - (enemy.w / 2);
    var y = enemy.y - (enemy.h / 2);
    var x2 = enemy2.x - (enemy2.w /2);
    var y2 = enemy2.y - (enemy2.h / 2);
    var x3 = enemy3.x - (enemy3.w /2);
    var y3 = enemy3.x - (enemy3.w /2);
    context.fillStyle = "#FF0000";
    context.fillRect(enemy.x, enemy.y, 40, 40);
    context.fillStyle = "#5cf442";
    context.fillRect(enemy2.x, enemy2.y, 40, 40);
    context.fillStyle = "#d442f4";
    context.fillRect(enemy3.x, enemy3.y, 40, 40);
}


var i = 0;

//Moving enemies
function moveEnemies() {
    while (i <= 2) {
        if (enemies[i].y < 0) {
            enemies[i].y = 0;
            enemydirections[i] = true;
        } else if (enemies[i].y > 360) {
            enemies[i].y = 360;
            enemydirections[i] = false;
        } else {
            if (enemydirections[i] === true) {
                enemies[i].y += enemies[i].speed;
            } else {
                enemies[i].y -= enemies[i].speed;
            }
        }
        
        i += 1;
    }
}

function resetI() {
    i = 0;
}