
// var side = 30;
// var matrix = []

// for(var i = 0; i < 30; i++){
//     matrix[i] = []
//     for(var j = 0; j < 50; j++){
//         matrix[i][j] = Math.floor(Math.random()*4)
//     }
// }

var socket = io();



let side = 20;

// let matrix = generator(30, 0, 1, 0, 0, 0,0,1000);


function setup() {
    // frameRate(5);
    createCanvas(30 * side, 30 * side);
    background('#acacac');



}
function narisovat(matrix) {


 
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
           
            
        socket.on('send matrix', narisovat)
        },1000
    )


