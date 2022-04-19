const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

// checks if creating a new player object returns specified values
test('creates player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

// check if getPlayer() returns an object with the four specified properties
test('gets players stats as object', () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

// checks if getInventory() returns array containing potions, or returns false if empty
test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

// checks if getHealth() returns a string containing the player object's health value
test('get players health value', () => {
    const player = new Player('Dave');

    // expect.stringContaining method makes sure the string includes the players health value
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));

});

// checks if isAlive() returns true
test('checks if player is alive or not', () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();

    // updates player health to check for both true and false conditions
    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

// checks if reduceHealth() subtracts the correct amount of health from the player
test('subtracts from players health', () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});