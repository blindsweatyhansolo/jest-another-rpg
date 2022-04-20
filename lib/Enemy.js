const Potion = require('./Potion');
const Character = require('./Character');

// ES6 class function
// extends keyword sets inheritance (from Character)
class Enemy extends Character {
    constructor(name, weapon) {
        // MUST CALL super() CONSTRUCTOR BEFORE ACCESSING 'this', references the parent object
        // passes name argument to constructor() of Character class, where properties are defined, Enemy class then adds any additional properties
        super(name);

        // MOVED TO CHARACTER.js
        // this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();

        // MOVED TO CHARACTER
        // this.health = Math.floor(Math.random() * 10 + 85);
        // this.strength = Math.floor(Math.random() * 5 + 5);
        // this.agility = Math.floor(Math.random() * 5 + 5);
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
};

// function Enemy(name, weapon){
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health = Math.floor(Math.random() * 10 + 85);
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     this.agility = Math.floor(Math.random() * 5 + 5);
// };

// Enemy.prototype.getHealth = function() {
//     return `${this.name}'s health is now ${this.health}!`;
// };

// Enemy.prototype.isAlive = function() {
//     if (this.health === 0) {
//         return false;
//     }

//     return true;
// };

// Enemy.prototype.getAttackValue = function() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
// };

// Enemy.prototype.reduceHealth = function(health) {
//     this.health -= health;

//     if (this.health < 0) {
//         this.health = 0;
//     }    
// // };

// // inherit prototype methods from Character using Object.create()
// Enemy.prototype = Object.create(Character.prototype);

// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };

module.exports = Enemy;