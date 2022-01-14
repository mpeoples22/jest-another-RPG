
const Potion = require('../lib/Potion');
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random()* 5 + 7);
    this.agility = Math.floor(Math.random()* 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
  // returns the inventory array or false if empty
    this.getInventory = function() {
      if (this.inventory.length) {
        return this.inventory;
      }
      return false;
    };
  /*/returns an oject with various player properties
    this.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility,

        };
    };*/
    ///
    /*Player.prototype.getStats = function() {
        if(this.inventory.length){
            return this.inventory;
        }
        return false;
    };*/
    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility,
        };
    };
    Player.prototype.getHealth = function() {
      return `${this.name}'s health is now ${this.health}!`;
    };

    Player.prototype.isAlive = function() {
      if (this.health === 0) {
        return false;
      }
      return true;
    };
    //
    Player.prototype.reduceHealth = function(health) {
      this.health -= health;
      if (this.health < 0) {
        this.health = 0;
      }
    };

}
module.exports = Player;



