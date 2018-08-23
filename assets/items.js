Game.ItemRepository = new Game.Repository('items', Game.Item);

Game.ItemRepository.define('apple', {
    name: 'apple',
    character: '%',
    foreground: 'red',
    foodValue: 50,
    isGeneric: true,
    value: 10,
    buyPrice: 10,
    sellPrice: 5,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Edible,Game.ItemMixins.Basic,Game.ItemMixins.Value]
});

Game.ItemRepository.define('Water', {
	name: 'Water',
	character: 'W',
	foreground: 'blue',
	thirstValue: 25,
	consumptions: 10,
	isPoison: false,
	isGeneric: true,
    value: 15,
    buyPrice: 16,
    sellPrice: 8,
    setCatagory: 'food',
	mixins: [Game.ItemMixins.Drinkable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
});
Game.ItemRepository.define('Bleach', {
	name: 'Bleach',
	character: 'B',
	foreground: 'lightblue',
	thirstValue: 25,
	consumptions: 10,
	isPoison: true,
	isGeneric: true,
    value: 20,
    buyPrice: 15,
    sellPrice: 5,
    setCatagory: 'food',
	mixins: [Game.ItemMixins.Drinkable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
});
Game.ItemRepository.define('melon', {
    name: 'Melon',
    character: 'M',
    foreground: 'lightGreen',
    foodValue: 35,
    consumptions: 4,
    isGeneric: true,
    value: 5,
    buyPrice: 5,
    sellPrice: 2,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Edible,Game.ItemMixins.Basic,Game.ItemMixins.Value]
});

Game.ItemRepository.define('pumpkin', {
    name: 'pumpkin',
    character: '%',
    foreground: 'orange',
    foodValue: 50,
    attackValue: 2,
    defenseValue: 2,
    wearable: true,
    wieldable: true,
    isGeneric: true,
    value: 5,
    buyPrice: 5,
    sellPrice: 2,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Edible, Game.ItemMixins.Equippable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
});

Game.ItemRepository.define('corpse', {
    name: 'corpse',
    character: '%',
    foodValue: 75,
    consumptions: 1,
    isGeneric: true,
    value: 1,
    buyPrice: 1,
    sellPrice: 0,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Edible,Game.ItemMixins.Basic,Game.ItemMixins.Value]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('rock', {
    name: 'rock',
    character: '*',
    foreground: 'white',
    isGeneric: true,
    value: 1,
    buyPrice: 1,
    sellPrice: 0,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Basic,Game.ItemMixins.Value]
});

// Weapons
Game.ItemRepository.define('dagger', {
    name: 'dagger',
    character: 'ᵻ',
    foreground: 'gray',
    attackValue: 5,
    wieldable: true,
    isGeneric: true,
    value: 25,
    buyPrice: 20,
    sellPrice: 10,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Equippable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('whip', {
   name: 'whip',
   character: 'ƾ',
	foreground: 'brown',
	attackValue: 4.5,
	wieldable: true,
	isGeneric: true,
    value: 20,
    buyPrice: 15,
    sellPrice: 10,
    setCatagory: 'food',
	mixins: [Game.ItemMixins.Equippable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
}, {
	disableRandomCreation: false
});

Game.ItemRepository.define('sword', {
    name: 'sword',
    character: '!',
    foreground: 'white',
    attackValue: 10,
    wieldable: true,
    isGeneric: true,
    value: 30,
    buyPrice: 20,
    sellPrice: 10,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Equippable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('staff', {
    name: 'staff',
     character: '}',
    foreground: 'yellow',
    attackValue: 5,
    defenseValue: 3,
    wieldable: true,
    isGeneric: true,
    value: 18,
    buyPrice: 18,
    sellPrice: 9,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Equippable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
}, {
    disableRandomCreation: true
});

// Wearables
Game.ItemRepository.define('tunic', {
    name: 'tunic',
    character: '[',
    foreground: 'green',
    defenseValue: 2,
    wearable: true,
    isGeneric: true,
    value: 22,
    buyPrice: 22,
    sellPrice: 11,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Equippable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('chainmail', {
    name: 'chainmail',
     character: '{',
    foreground: 'white',
    defenseValue: 4,
    wearable: true,
    isGeneric: true,
    value: 25,
    buyPrice: 25,
    sellPrice: 15,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Equippable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('platemail', {
    name: 'platemail',
    character: '&',
    foreground: 'aliceblue',
    defenseValue: 6,
    wearable: true,
    isGeneric: true,
    value: 30,
    buyPrice: 30,
    sellPrice: 0,
    setCatagory: 'food',
    mixins: [Game.ItemMixins.Equippable,Game.ItemMixins.Basic,Game.ItemMixins.Value]
}, {
    disableRandomCreation: true
});
