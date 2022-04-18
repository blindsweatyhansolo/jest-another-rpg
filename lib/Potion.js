function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    // if name is TRUTHY, then this.name = name / if not truthy then this.name = random type of potion
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;