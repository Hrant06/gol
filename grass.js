let LivingCreature = require('./class.js')

module.exports = class Grass extends LivingCreature {
    constructor(x, y,) {
        super(x, y)
        this.multiplay = 0;

    }

    
    mul() {
        this.multiplay++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
       
        if (newCell && this.multiplay >= 2) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiplay = 0;
        }
    }


}