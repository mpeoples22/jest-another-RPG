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
          // console.log(this.currentEnemy, this.player);
              this.startNewBattle();
           });
    };
     

    Game.prototype.startNewBattle = function() {
        if(this.player.agility > this.currentEnemy.agility) {
            this.isPlayerTurn = true;
        } else{
            this.isPlayerTurn = false;
        }
        console.log('Your stat are as follows:');
        console.table(this.player.getStats());
        battle();
    }
    Game.prototype.battle = function() {
        if (this.isPlayerTurn) {
            //player prompts will go here
            inquirer
              .prompt({
                  type: 'list',
                  messages: 'What would you like to do ?',
                  name: 'action',
                  choices: ['Attack', 'Use potion']
              })
              .then(({action}) => {
                  if (action === 'Use potion') {
                      if(!this.player.getInventory()) {
                          console.log("You don't have any potions!");
                          return;
                      }
                      inquirer
                        .prompt({
                            type: 'list',
                            message: 'Which potion would you like to use?',
                            name: 'aciton',
                            choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}` )
                        })
                        .then(({action}) => {
                            const potionDetails = action.split(': ');
                            this.player.usePotion(potionDetails[0] -1);
                            console.log(`You used a ${potionDetails[1]} potion.`);
                        });
                  }else {
                      const damage = this.player.getAttackValue();
                      this.currentEnemy.reduceHealth(damage);
                
                      console.log(`You attacked the  ${this.currentEnemy.name}`);
                      console.log(this.currentEnemy.getHealth());
                  }
              });
        } else {
            const damage = this.currentEnemy.getAttackValue();
            this.player.reduceHealth(damage);
            console.log(`You were attacked by the ${this.currentEnemy.name}`);
            console.log(this.player.getHealth());
        }
    
    
    };
};
module.exports = Game;