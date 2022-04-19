const Potion = require('../lib/Potion');

// PLAYER CONSTRUCTOR FUNCTION
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

}

// PROTOTYPE SYNTAX OF COMMENTED OUT FUNCTIONS FOR getStats AND getInventory
// use this instead of method below to only create the method once on the constructor itself
// new player objects INHERIT the method rather than having individual instances of the method
// returns object with various player properties
// syntax [ConstructorName].prototype.[AssignedNameForPrototypeMethod] = function()
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// returns inventory array or false if empty
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }

    return false;
};

// returns player health in a string
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

// checks if a player is alive (true) or not (false)
Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }

    return true;
};

// reduce players health
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    // if health is less than zero, set to zero to avoid negative values
    if (this.health < 0) {
        this.health = 0;
    }
};

module.exports = Player;