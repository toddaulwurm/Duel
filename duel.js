class Card{
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
        console.log(`${this.name} attacked ${target.name} for ${this.power} points!`);
    }
    print(){
        console.log(`NAME: ${this.name} POWER: ${this.power} RESILIENCE: ${this.res}`)
    }
}
class Effect extends Card{
    constructor(name, cost, text, powORres, magnitude) {
        super(name,cost);
        this.text = text;
        this.powORres = powORres;
        this.magnitude = magnitude;
    }
    play(target){
        if( target instanceof Unit ) {
            if(this.powORres = "res"){
                target.res += this.magnitude;
                console.log(`${this.name} changed ${this.powORres} of ${target.name} by ${this.magnitude}`);
            }
            else{
                target.power += this.magnitude;
                console.log(`${this.name} changed ${this.powORres} of ${target.name} by ${this.magnitude}`);
            }
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const Red = new Unit("Red", 3, 3, 4);
const Black = new Unit("Black", 4,5,4);
const HardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
const BrokenPromise = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
const Pair = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

Red.print();
Black.print();
Red.attack(Black);
HardAlgo.play(Black);
Black.print();
Pair.play(Red);
Red.print();
BrokenPromise.play(Red);
Red.print();
Black.print();



