class Grass extends LivingCreature {
    constructor(x, y,) {
        super(x, y)
        this.multiplay = 0;

    }

    
    mul() {
        this.multiplay++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        console.log(emptyCells);
        if (newCell && this.multiplay >= 5) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiplay = 0;
        }
    }


}