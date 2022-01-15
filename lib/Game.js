function Game() {
   const inquirer = require('inquirer');
   const Enemy =  require('./Enemy');
   const Player = require('./Player');
   this.roundNumber =0; 
   this.isPlayerTurn = false;
   this.enemies = [];
   this.currentEnemy;
   this.player;


   Game.prototype.initializeGame = function() {
       this.enemies.push(new Enemy('goblin', 'sword'));
       this.enemies.push(new Enemy('orc', 'baseball bat'));
       this.enemies.push(new Enemy('skeleton','axe'));
       this.currentEnemy = this.enemies[0];

       inquirer
          .prompt({
              type: 'text',
              name: 'name',
              message: 'What is your name ?'
           })
          //destructure the name from the prompt
          .then(({name}) => {
              this.player = new Player(name);
          //test object creation
           console.log(this.currentEnemy, this.player);
           });
    };

};
module.exports = Game;