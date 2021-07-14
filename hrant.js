
// var side = 30;
// var matrix = []

// for(var i = 0; i < 30; i++){
//     matrix[i] = []
//     for(var j = 0; j < 50; j++){
//         matrix[i][j] = Math.floor(Math.random()*4)
//     }
// }

var socket = io();

function generator(matLen, gr, grEat, pre, d, q,bust,xot) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    } for (let i = 0; i < pre; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < d; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    } for (let i = 0; i < q; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }for (let i = 0; i < bust; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }for (let i = 0; i < xot; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }

    return matrix;
}

let side = 20;

let matrix = generator(30, 250, 200, 35, 50, 40,30,60);
// let matrix = generator(30, 0, 1, 0, 0, 0,0,1000);



var grassArr = []
var grassEaterArr = []
var predatorArr = []
var didArr = []
var qarArr = []
var bustArr = []
var xotArr = []



function setup() {
    // frameRate(5);
    createCanvas(30 * side, 30 * side);
    background('#acacac');



}
function nkarel() {
 

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x]

            if (obj == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (obj == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            } else if (obj == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            } else if (obj == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (obj == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (obj== 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }else if (obj == 6) {
                fill("white");
                rect(x * side, y * side, side, side);
            }else if (obj == 7) {
                fill("lime");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

setInterval(
    function () {

        
    socket.on('send matrix', nkarel)
    },1000
)