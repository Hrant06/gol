class Did extends LivingCreature {
    constructor(x, y, ) {
       super(x,y)
        this.multiplay = 0;
        this.energy = 5
    }
    die() {
        this.energy -= 10
    }
}