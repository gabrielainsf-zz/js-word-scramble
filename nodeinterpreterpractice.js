// Declare a variable greeting and assign to it a phrase.
// > const greeting = 'Morning!'

// Split a string into an array of characters (see the .split() method)
// > const anotherGreeting = greeting.split('')

// > const anotherGreeting = greeting.split('')
// undefined
// > anotherGreeting
// [ 'M', 'o', 'r', 'n', 'i', 'n', 'g', '!' ]
// > const joinGreeting = anotherGreeting.join('')
// undefined
// > joinGreeting
// 'Morning!'

// Select a random item from an array (Read up on Math.random() to figure out how to choose a random item from your array. JavaScript doesn’t have Python’s random.choice() function at the ready, so we get to do it ourselves!)
// > const arrOfAnimals = ['cat', 'dog', 'bird']

// > const randomAnimal = arrOfAnimals[Math.floor(Math.random() * arrOfAnimals.length)];
// undefined
// > randomAnimal
// 'bird'

// > function getRandomIndex (yourArray) {
// ... return Math.floor(Math.random() * yourArray.length);}
// undefined
// > getRandomIndex(arrOfAnimals)
// 2

// Select two random items from an array and swap them
// > const arrOfAnimals = ['cat', 'dog', 'fish', 'bird', 'lizard']
// undefined
// > function getRandomIndex (yourArray) {
// ... return Math.floor(Math.random() * yourArray.length);
// ... }

// > const firstIndex = getRandomIndex(arrOfAnimals);
// undefined
// > firstIndex
// 1
// > const secondIndex = getRandomIndex(arrOfAnimals);
// undefined
// > secondIndex
// 2
// > const firstAnimal = arrOfAnimals[firstIndex]
// undefined
// > firstAnimal
// 'dog'
// > const secondAnimal = arrOfAnimals[secondIndex]
// undefined
// > secondAnimal
// 'fish'
// > arrOfAnimals[firstIndex] = secondAnimal
// 'fish'
// > arrOfAnimals[secondIndex] = firstAnimal
// 'dog'
// > arrOfAnimals
// [ 'cat', 'fish', 'dog', 'bird', 'lizard' ]


// Write a function that takes a color and the candy map. It should return the flavor or if it’s not in the map, console log “Sorry, that color doesn’t have a flavor” and return nothing.
// > const candy = new Map()
// undefined
// > candy
// Map {}
// > candy.set('purple', 'grape')
// Map { 'purple' => 'grape' }
// > candy.set('red', 'apple')
// Map { 'purple' => 'grape', 'red' => 'apple' }
// > candy.set('yellow', 'lemon')
// Map { 'purple' => 'grape', 'red' => 'apple', 'yellow' => 'lemon' }
// > candy.set('orange', 'orange')
// Map {
//   'purple' => 'grape',
//   'red' => 'apple',
//   'yellow' => 'lemon',
//   'orange' => 'orange' }
// > candy.set('green', 'lime')
// Map {
//   'purple' => 'grape',
//   'red' => 'apple',
//   'yellow' => 'lemon',
//   'orange' => 'orange',
//   'green' => 'lime' }
// > for (let [color, flavor] of candy) {
// ... console.log(`The ${flavor} is colored ${color}`);
// ... }
// The grape is colored purple
// The apple is colored red
// The lemon is colored yellow
// The orange is colored orange
// The lime is colored green
