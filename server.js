var express = require('express');
var app = express();
var server = require('http').Server(app)
var io = require("socket.io")(server)
var fs = require("fs");
app.use(express.static("."))

app.get('/', function (req, res) {
    res.redirect('index.html')
})
server.listen(8080)

matrix = []

grassArr = []
grassEaterArr = []
predatorArr = []
didArr = []
qarArr = []
bustArr = []
xotArr = []


Grass = require("./grass")
GrassEater = require("./grasseater")
Predator = require("./predator")
Qar = require("./qar")
Did = require("./did")
Xot = require("./xot")
Bust = require("./Bust")




function createObject(matrix) {
    // frameRate(5);
    // createCanvas(matrix[0].length * side, matrix.length * side);
    // background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                var predat = new Predator(x, y)
                predatorArr.push(predat)
            }
            else if (matrix[y][x] == 4) {
                var did = new Did(x, y)
                didArr.push(did)
            }
            else if (matrix[y][x] == 5) {
                var qar = new Qar(x, y)
                qarArr.push(qar)
            } else if (matrix[y][x] == 6) {
                var bust = new Bust(x, y)
                bustArr.push(bust)
            } else if (matrix[y][x] == 7) {
                var xot = new Xot(x, y)
                xotArr.push(xot)
            }
        }
    }

    io.sockets.emit('send grass', grassArr)
    io.sockets.emit('send predator', predatorArr)
    io.sockets.emit('send grasseater', grassEaterArr)
    io.sockets.emit('send did', didArr)
    io.sockets.emit('send bust', bustArr)
    io.sockets.emit('send xot', xotArr)
    io.sockets.emit('send matrix', matrix)
}
function generator(matLen, gr, grEat, pre, d, q, bust, xot) {
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
    } for (let i = 0; i < bust; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    } for (let i = 0; i < xot; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }
    return matrix;
}

weather = "summer"

setInterval(function () {
        if(weather == 'summer') weather='automn'
       else if(weather == 'automn') weather='winter'
       else if(weather == 'winter') weather='spring'
       else if(weather == 'spring') weather='summer'

       io.sockets.emit('send weather', weather);

}, 4000)

matrix = generator(30, 250, 200, 35, 50, 40, 30, 60);


io.sockets.emit("send matrix", matrix);

function game() {


    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].mul();
        predatorArr[i].eat();
    }
    for (var i in didArr) {
        didArr[i].die()
    }
    for (var i in bustArr) {
        bustArr[i].die()
    } for (var i in xotArr) {
        xotArr[i].mul()
    }
    io.sockets.emit("send matrix", matrix);
    io.sockets.emit('send grass', grassArr)
    io.sockets.emit('send predator', predatorArr)
    io.sockets.emit('send grasseater', grassEaterArr)
    io.sockets.emit('send did', didArr)
    io.sockets.emit('send bust', bustArr)
    io.sockets.emit('send xot', xotArr)
}
setInterval(game, 500)

let flag = true


io.on('connection', function (socket) {
    if (flag) {
        createObject(matrix)
        flag = false
    }
})




var statistics = {}

setInterval(function () {

    statistics.grass = grassArr.length
    statistics.grassEater = grassEaterArr.length
    statistics.predator = predatorArr.length
    statistics.did = didArr.length
    statistics.bust = bustArr.length
    statistics.xot = xotArr.length



    fs.writeFileSync("statistic.json",
        JSON.stringify(statistics))
}, 1000)

