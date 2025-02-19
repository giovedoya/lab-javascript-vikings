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
        return (`${this.name} has received ${theDamage} points of damage`);
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
            return (`A Saxon has received ${theDamage} points of damage`);
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
        this.vikingArmy.push(viking)
    ]
    
    }
    addSaxon(saxon){ [
        this.saxonArmy.push(saxon)
    ]
    }
    vikingAttack () {
        const result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.shift();
        }
        return result;
    }

    saxonAttack(){
        const attackSaxon = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
        if (this.vikingArmy[0].health <= 0){
            this.vikingArmy.shift();
        }
        return attackSaxon;
    }
    showStatus (){
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        }
       if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
       }

       return 'Vikings and Saxons are still in the thick of battle.'
    }
}
