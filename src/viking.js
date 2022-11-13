// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;

    }
    receiveDamage(theDamage){       
       this.health -= theDamage            
    }    
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength)
        this.name = name;       
    }
    function(){
        return this.Viking
    }
    receiveDamage(theDamage){        
        this.health -= theDamage  
        if (this.health > 0){
        return (`${this.name} has received ${this.theDamage} points of damage`);
    } else {
        return (`${this.name} has died in act of combat`)
    }
}
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    function(){
        return this.strength
    }
    receiveDamage(theDamage){
        this.health -= theDamage 
        if (this.health > 0){
            return (`A Saxon has received ${this.theDamage} points of damage`);
        } else {
            return ('A Saxon has died in combat')
        }
    }
}

// War
class War {
    constructor(vikingArmy = [], saxonArmy = []) {
        this.vikingArmy = vikingArmy;
        this.saxonArmy = saxonArmy;
    }
    addViking(viking){ [
        this.Viking.push(viking1),
        this.Viking.push(viking2),
        this.Viking.push(viking3),
        this.Viking.push(viking4),
        this.Viking.push(viking5),
        this.Viking.push(viking6),
        this.Viking.push(viking7),
        this.Viking.push(viking8),
        this.Viking.push(viking9),
        this.Viking.push(viking10)
    ]
    this.vikingArmy = vikingArmy
    }
    addSaxon(saxon){ [

    ]


    }
    vikingAttack(){

    }
    saxonAttack(){

    }
    showStatus(){

    }
}
