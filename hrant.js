
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
// weather = 'summer'

socket.on('send weather', function (data) {
    currentWeather = data
})


function narisovat(matrix) {



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix.length; x++) {

            var obj = matrix[y][x]

            if (obj == 1) {
                if (currentWeather == 'summer') fill("#00E605")
                else if (currentWeather == 'automn') fill("#F5B43A")
                else if (currentWeather == 'winter') fill("#FFFFFF")
                else if (currentWeather == 'spring') fill("#DFE366")
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
            else if (obj == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            } else if (obj == 6) {
                fill("aqua");
                rect(x * side, y * side, side, side);
            } else if (obj == 7) {
                fill("#8BFCA2")
                rect(x * side, y * side, side, side);
            }
        }
    }
}






function logGrass(a) {
    console.log(a.length)
} socket.on('send grass', logGrass)


function logGrassEater(a) {
    console.log(a.length)
} socket.on('send grasseater', logGrassEater)


function logPredator(a) {
    console.log(a.length)
} socket.on('send predator', logPredator)


function logDid(a) {
    console.log(a.length)
} socket.on('send did', logDid)


function logBust(a) {
    console.log(a.length)
} socket.on('send bust', logBust)


function logXot(a) {
    console.log(a.length)
} socket.on('send xot', logXot)

        socket.on('send matrix', narisovat)

    



function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addGrassEater() {
    socket.emit("add grassEater")
}