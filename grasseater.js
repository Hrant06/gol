let LivingCreature = require('./class.js')

module.exports = class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.multiply = 0
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell && this.multiply >= 5) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newGrass = new GrassEater(newX, newY);
            grassEaterArr.push(newGrass);
            this.multiply = 0;
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    eat() {
        var emptyCells = this.chooseCell(1)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        var emptyCells1 = this.chooseCell(4)
        var newCell1 = emptyCells1[Math.floor(Math.random() * emptyCells1.length)]
        var emptyCells2 = this.chooseCell(6)
        var newCell2 = emptyCells2[Math.floor(Math.random() * emptyCells2.length)]
        var emptyCells3 = this.chooseCell(7)
        var newCell3 = emptyCells3[Math.floor(Math.random() * emptyCells3.length)]

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break
                }
            }
        } else if (newCell1) {
            {
                
                var newX = newCell1[0]
                var newY = newCell1[1]

                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
                for (var i in didArr) {
                    if (newX == didArr[i].x && newY == didArr[i].y) {
                        didArr.splice(i, 1)
                        break
                    }
                }
                this.die();
            }
        }else if (newCell2) {
            {
                this.energy += 5
                var newX = newCell2[0]
                var newY = newCell2[1]

                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
                for (var i in bustArr) {
                    if (newX == bustArr[i].x && newY == bustArr[i].y) {
                        bustArr.splice(i, 1)
                        break
                    }
                }
            }
        }else if (newCell3) {
            var newX = newCell3[0]
            var newY = newCell3[1]
            
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break
                }
            }
            this.die()
        }
        else {
            this.move()
        }

    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}