/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// GameObject
function GameObject(attributes) {
  this.name = attributes.name;
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

// CharacterStats
function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

// Humanoid
function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// Hero
function Hero(attributes) {
  Humanoid.call(this, attributes);
  this.name = attributes.name;
  this.weapons = attributes.weapons;
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.slap = function(target) {
  target.healthPoints = target.healthPoints - 10;
  console.log(`${target.name} @ ${target.healthPoints} HP`);
  return `${this.name} just slapped you with great force.`;
};
Hero.prototype.powerSit = function() {
  return `You are suffocating because ${this.name} just sat on you.`;
};
Hero.prototype.revival = function() {
  return `Death was close, but revival occurred for ${this.name}.`;
};
Hero.prototype.victoryDance = function() {
  return `${this.name} wins!!!`;
};
Hero.prototype.gotHurt = function() {
  return this.healthPoints - 20;
};
Hero.prototype.death = function(target) {
  if (this.healthPoints === 0) {
    return this.destroy();
  } else {
    return `${target.name} is not quite dead yet.`;
  }
};

// Villain
function Villain(attributes) {
  Humanoid.call(this, attributes);
  this.name = attributes.name;
  this.weapons = attributes.weapons;
}

Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.block = function() {
  return `Whatever happened didn't happen because ${this.name} blocked it.`;
};
Villain.prototype.attack = function(weapon1, weapon2) {
  return `${this.name} is coming at you with ${this.weapons[weapon1]} and ${
    this.weapons[weapon2]
  }.`;
};
Villain.prototype.tearGas = function(weapon) {
  return `${this.name} dropped ${
    this.weapons[weapon]
  } in the air vents; now you are crying.`;
};
Villain.prototype.standOff = function() {
  return `${this.name} enters the room to take you down.`;
};
Villain.prototype.reallyHurt = function() {
  return this.healthPoints - this.healthPoints * 0.9;
};
Villain.prototype.death = function(target) {
  if (this.healthPoints <= 0) {
    return this.destroy();
  } else {
    return `${target.name} is not quite dead yet.`;
  }
};

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const johnny = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 3,
    height: 4
  },
  healthPoints: 150,
  name: "Johnny Cash",
  team: "His Own Team",
  weapons: ["determination", "powerful words"],
  language: "Good Country English"
});

const depression = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 10,
    height: 10
  },
  healthPoints: 150,
  name: "Depression",
  team: "Team Taking Over",
  weapons: ["whisky", "isolation"],
  language: "the language of destroyed dreams"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// COMPLETE * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// COMPLETE * Create two new objects, one a villain and one a hero and fight it out with methods!

console.log(johnny.createdAt);
console.log(johnny.greet());
console.log(depression.standOff());
console.log(johnny.slap(depression));
console.log(depression.attack(0, 1));
console.log(depression.tearGas(0));
console.log(johnny.gotHurt());
console.log(johnny.healthPoints);
console.log(depression.tearGas(1));
console.log(johnny.slap(depression));
console.log(depression.block());
console.log(johnny.revival());
console.log(johnny.powerSit());
console.log(johnny.slap(depression));
console.log(johnny.slap(depression));
console.log(johnny.slap(depression));
console.log(johnny.slap(depression));
console.log(depression.takeDamage(), depression.reallyHurt());
console.log(johnny.slap(depression));
console.log(depression.death(depression));
console.log(johnny.slap(depression));
console.log(johnny.slap(depression));
console.log(johnny.slap(depression));
console.log(johnny.slap(depression));
console.log(johnny.slap(depression));
console.log(johnny.slap(depression));
console.log(depression.death(depression));
console.log(johnny.slap(depression));
console.log(johnny.slap(depression));
console.log(depression.death(depression));
console.log(johnny.victoryDance());
