let LivingCreature = require('./class.js')

module.exports = class Xot extends LivingCreature {
    constructor(x, y,) {
        super(x, y)
        this.multiplay = 0;

    }

    
    mul() {
        this.multiplay++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

       
        if (newCell && this.multiplay >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 7;

            var newXot = new Xot(newX, newY, 7);
            xotArr.push(newXot);
            this.multiplay = 0;
        }
    }


}