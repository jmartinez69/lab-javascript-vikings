// Soldier
function Soldier(health, strength) {
  this.health=health;
  this.strength=strength;
  this.attack=function(){
    return this.strength; 
  };  
  this.receiveDamage=function(damage){
    this.health = this.health - damage;
  };
}

// Viking
function Viking(name, health, strength) {
     Soldier.call(this, health, strength);
     this.name=name;
     this.receiveDamage=function(damage){
         this.health=this.health-damage;
         if (this.health > 0){
           return name + " has received " + damage + " points of damage"
         } else {
           return name + " has died in act of combat" 
         }
     }
     this.battleCry=function(){
         return "Odin Owns You All!";
     };

 }
  Viking.prototype =Object.create(Soldier.prototype);
  Viking.prototype.constructor=Viking;
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage=function(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return "A Saxon has received " + damage + " points of damage"
    } else {
      return "A Saxon has died in combat" 
    }
  };
}
Saxon.prototype =Object.create(Soldier.prototype);
Saxon.prototype.constructor=Saxon;
// War
function War() {
  this.vikingArmy=[];
  this.saxonArmy=[];
  this.addViking=function(viking){
    this.vikingArmy.push(viking);
  };
  this.addSaxon=function(saxon){
    this.saxonArmy.push(saxon);
  };
  this.vikingAttack=function(){
    var indexViking = parseInt(Math.random()*this.vikingArmy.length);
    var indexSaxon = parseInt(Math.random()*this.saxonArmy.length);
    var vikatReturn=this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].health);
     if (this.saxonArmy[indexSaxon].health <= 0){
      this.saxonArmy.splice(indexSaxon, 1);
    }
    return vikatReturn;
      
  };
  this.saxonAttack=function(){
    var indexViking = parseInt(Math.random()*this.vikingArmy.length);
    var indexSaxon = parseInt(Math.random()*this.saxonArmy.length);
    var saxatReturn=this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].health);
     if (this.vikingArmy[indexViking].health <= 0){
      this.vikingArmy.splice(indexViking, 1);
    }
    return saxatReturn;
  };
}
