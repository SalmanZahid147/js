
//2

// var name = "Eric";
// console.log(`Hello ${name},  would you like to learn some Python today?`)

//3

//var name = "khubaib";
//console.log(`${name.toUpperCase()}`);
//var name1 = "KHUBAIB";
//console.log(`${name1.toLowerCase()}`);

// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  document.write(sentence.join(" "));
//  return sentence;
//  }
//  titleCase("khubAIB HAMMAD waqaR");

//4

//document.write("Albert Einstein once said, “Try not to become a man of success. Rather become a man of value.”")


//5

// var name = "Albert Einstein";
// var quote = " “Try not to become a man of success. Rather become a man of value.”";
// document.write(`${name},${quote}`);


//6

// let name = "\t John Smith \n";
// console.log(name); // prints "\t John Smith \n"
// console.log(name.trim()); // prints "John Smith"





//7,8

// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);

//9

// var num = 1;
// console.log(`my fav number is ${num}`);


//10

// program for a simple calculator
//let result;

// take the operator input
//const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// };



//11

// let names = ["Alice", "Bob", "Charlie", "David"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


//12

// let names = ["Alice", "Bob", "Charlie", "David"];

// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello, ${names[i]}!`);
// }



//13



// let modes = ["Honda motorcycle", "Tesla Model S", "BMW i8", "Yamaha R6"];

// for (let i = 0; i < modes.length; i++) {
//     console.log(`I would like to own a ${modes[i]}.`);
// }




// var vichle = prompt("enter transportation").toLowerCase();

// var transportation = ['car','motorcycle','cycle'];
// if (vichle === transportation[0]){
//     console.log("i would like to own toyota car");
// }else if(vichle === transportation[1]){
//     console.log("i would like to own honda motorcycle");
// }else if(vichle === transportation[2]){
// console.log("i would like to own BMX cycle")
// }else{
//     console.log("invalid transportation")
// };



//14



// let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Malala Yousafzai"];

// for (let i = 0; i < guestList.length; i++) {
//   console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
// }

//let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Malala Yousafzai"];

//console.log("Original guest list: " + guestList);


//15



// // Let's say Malala Yousafzai can't make it
// let index = guestList.indexOf("Malala Yousafzai");
// if (index > -1) {
//     guestList.splice(index, 1);
// }

// // Adding new guest
// guestList.push("Marie Curie");

// console.log("New guest list: " + guestList);

// for (let i = 0; i < guestList.length; i++) {
//   console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
// }

// //let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Malala Yousafzai"];

// console.log("Original guest list: " + guestList);

// // Let's say Malala Yousafzai can't make it
// //slet index = guestList.indexOf("Malala Yousafzai");
// if (index > -1) {
//     let removedGuest = guestList.splice(index, 1);
//     console.log(`${removedGuest} can not make it`);
// }

// // Adding new guest
// guestList.push("Marie Curie");

// console.log("New guest list: " + guestList);

// for (let i = 0; i < guestList.length; i++) {
//   console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
// }

// //let index = guestList.indexOf("Malala Yousafzai");
// if (index > -1) {
//     guestList[index] = "Marie Curie";
// }

// console.log("New guest list: " + guestList);

// for (let i = 0; i < guestList.length; i++) {
//   console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
// }

// let guestList1 = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie"];

// console.log("Guest list: " + guestList1);

// console.log("First Set of Invitations: ");
// for (let i = 0; i < guestList1.length; i++) {
//   console.log("Dear " + guestList1[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
// }

// console.log("Second Set of Invitations: ");
// for (let i = 0; i < guestList1.length; i++) {
//   console.log("Dear " + guestList1[i] + ", I hope you are still able to make it to dinner. I look forward to hosting you.")
// };



//16



// let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie"];

// console.log("Original guest list: " + guestList);

// // Adding new guests
// guestList.push("Stephen Hawking", "Nelson Mandela", "Bill Gates");

// console.log("New guest list: " + guestList);

// for (let i = 0; i < guestList.length; i++) {
//   console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
// };

// let guestList2 = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie", "Stephen Hawking", "Nelson Mandela", "Bill Gates"];

// console.log("Original guest list: " + guestList2);

// for (let i = 0; i < guestList2.length; i++) {
//   console.log("Dear " + guestList2[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
// }
// console.log("Great News! I just found a bigger dinner table, so more space is available now.")


// //let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie", "Stephen Hawking", "Nelson Mandela", "Bill Gates"];
// console.log("Original guest list: " + guestList2);

// // Adding new guest to the beginning of the array
// guestList2.unshift("Isaac Newton");

// console.log("New guest list: " + guestList2);

// for (let i = 0; i < guestList2.length; i++) {
//   console.log("Dear " + guestList2[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
// }

// // Adding new guest to the middle of the array
// guestList2.splice(3, 0, "Thomas Edison");

// // Adding new guest to the end of the list
// guestList.push("Steve Jobs");
// console.log("New guest list: " + guestList2);

// console.log("New Set of Invitations:");
// for (let i = 0; i < guestList2.length; i++) {
//   console.log("Dear " + guestList2[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
// }



//17



// let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie", "Stephen Hawking", "Nelson Mandela", "Bill Gates", "Thomas Edison", "Steve Jobs"];
// console.log("Original guest list: " + guestList);
// console.log("Unfortunately, my new dinner table won't arrive in time and I can invite only two people for dinner.");

// // Removing guests one at a time until only two names remain in the list
// while (guestList.length > 2) {
//   let removedGuest = guestList.pop();
//   console.log("Sorry, " + removedGuest + " I can't invite you to dinner.")
// }

// console.log("I'm happy to inform that " + guestList[0] + " and " + guestList[1] + " are still invited for dinner.");

// // Removing the last two names from the list
// guestList.pop();
// guestList.pop();

// console.log("Final guest list: " + guestList);



//18


// //Original array
// var locations = ["Paris", "Santorini", "Maui", "Cape Town", "Sydney"];
// console.log("Original array: " + locations);

// //Alphabetically sorted array
// var sortedLocations = locations.slice().sort();
// console.log("Alphabetically sorted array: " + sortedLocations);

// //Original array still in original order
// console.log("Original array still in original order: " + locations);

// //Reverse alphabetically sorted array
// var reverseSortedLocations = locations.slice().sort().reverse();
// console.log("Reverse alphabetically sorted array: " + reverseSortedLocations);

// //Original array still in original order
// console.log("Original array still in original order: " + locations);

// //Reversed array
// locations.reverse();
// console.log("Reversed array: " + locations);

// //Original array in original order
// locations.reverse();
// console.log("Original array in original order: " + locations);

// //Sorted array
// locations.sort();
// console.log("Sorted array: " + locations);

// //Reverse sorted array
// locations.sort().reverse();
// console.log("Reverse sorted array: " + locations);



//19


// let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie"];

// console.log("I am inviting " + guestList.length + " people to dinner.");



//20

// //Create an array of mountains
// var mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

// //Print the array
// console.log("List of mountains: " + mountains);


// //Create an array of rivers
// var rivers = ["Nile", "Amazon", "Yangtze", "Mississippi", "Yenisei"];

// //Print the array
// console.log("List of rivers: " + rivers);


// //Create an array of countries
// var countries = ["India", "USA", "China", "Russia", "Brazil"];

// //Print the array
// console.log("List of countries: " + countries);


//21

// // Create an object for a car
// var car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2022,
//     color: "black",
//     hasSunroof: true
// };

// // Print the object
// console.log(car);


//22


// var fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits[3]); // This will cause an "IndexError: Array index out of range"

// var fruits = ["Apple", "Banana", "Cherry"];

// // Checking the index before trying to access it
// if (3 < fruits.length) {
//     console.log(fruits[3]);
// } else {
//     console.log("Index out of range");
// };


//23

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');

// console.log("Is car == 'toyota'? I predict False.");
// console.log(car == 'toyota');

// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === 'subaru');

// console.log("Is car != 'toyota'? I predict True.");
// console.log(car != 'toyota');

// console.log("Is car !== 'toyota'? I predict True.");
// console.log(car !== 'toyota');

// console.log("Is car > 'toyota'? I predict False.");
// console.log(car > 'toyota');

// console.log("Is car < 'toyota'? I predict True.");
// console.log(car < 'toyota');

// console.log("Is car >= 'subaru'? I predict True.");
// console.log(car >= 'subaru');

// console.log("Is car <= 'subaru'? I predict True.");
// console.log(car <= 'subaru');

// console.log("Is car.length == 6? I predict True.");
// console.log(car.length == 6);



//24


// let car = 'subaru';
// let num = 5;
// let fruits = ['apple', 'banana', 'orange'];

// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');

// console.log("Is car == 'Subaru'? I predict False.");
// console.log(car == 'Subaru');

// console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
// console.log(car.toLowerCase() == 'subaru');

// console.log("Is num == 5? I predict True.");
// console.log(num == 5);

// console.log("Is num > 4 and num < 6? I predict True.");
// console.log(num > 4 && num < 6);

// console.log("Is num > 6 or num < 4? I predict False.");
// console.log(num > 6 || num < 4);

// console.log("Is fruits array contains 'apple'? I predict True.");
// console.log(fruits.includes('apple'));

// console.log("Is fruits array contains 'mango'? I predict False.");
// console.log(fruits.includes('mango'));

// console.log("Is fruits array not contains 'mango'? I predict True.");
// console.log(!fruits.includes('mango'));



//25



// // Alien Colors #1:
// // Passing version:


// alien_color = 'green'
// if (alien_color === 'green'){
//     console.log("The player just earned 5 points.")
// };

// //Failing version:

// alien_color = 'yellow'
// if (alien_color === 'green'){
//     console.log("The player just earned 5 points.")
// };


// // Alien Colors #2:
// // Running if block version:

// alien_color = 'green'
// if (alien_color === 'green'){
//     console.log("The player just earned 5 points for shooting the alien.")
// }else{
//     console.log("The player just earned 10 points.")
// };


// //Running else block version:

// alien_color = 'yellow'
// if (alien_color === 'green'){
//     console.log("The player just earned 5 points for shooting the alien.")
// }else{
//     console.log("The player just earned 10 points.")
// };


// //Alien Colors #3:
// //Green version:

// alien_color = 'green'
// if (alien_color === 'green'){
//     console.log("The player earned 5 points.")
// }else if (alien_color === 'yellow'){
//     console.log("The player earned 10 points.")
// }else if (alien_color === 'red'){
//     console.log("The player earned 15 points.")
// };


// //Yellow version:    


// alien_color = 'yellow'
// if (alien_color === 'green'){
//     console.log("The player earned 5 points.")
// }else if (alien_color === 'yellow'){
//     console.log("The player earned 10 points.")
// }else if (alien_color === 'red'){
//     console.log("The player earned 15 points.")
// };


// //Red version:

// alien_color = 'red'
// if (alien_color === 'green'){
//     console.log("The player earned 5 points.")
// }else if (alien_color === 'yellow'){
//     console.log("The player earned 10 points.")
// }else if (alien_color === 'red'){
//     console.log("The player earned 15 points.")
// };


//28

// let age = 17;

// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }


//29

// let favorite_fruits = ["apple", "banana", "mango"];

// if (favorite_fruits.indexOf("apple") !== -1) {
//     console.log("You really like apples!");
// }

// if (favorite_fruits.indexOf("banana") !== -1) {
//     console.log("You really like bananas!");
// }

// if (favorite_fruits.indexOf("mango") !== -1) {
//     console.log("You really like mangoes!");
// }

// if (favorite_fruits.indexOf("orange") !== -1) {
//     console.log("You really like oranges!");
// }

// if (favorite_fruits.indexOf("grapes") !== -1) {
//     console.log("You really like grapes!");
// };


//30


// let users = ["admin", "Eric", "Amy", "John", "Sara"];

// for (let i = 0; i < users.length; i++) {
//     if (users[i] === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${users[i]}, thank you for logging in again.`);
//     }
// }



//31

// let users = [];

// if (users.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let i = 0; i < users.length; i++) {
//         console.log(users[i]);
//     }
// };



//32


// let current_users = ["John", "Jane", "Jim", "Jenny", "Jake"];
// let new_users = ["john", "Sarah", "Jane", "Jordan", "Jim"];

// for (let i = 0; i < new_users.length; i++) {
//     let newUsername = new_users[i].toLowerCase();
//     if (current_users.includes(newUsername)) {
//         console.log(`Username "${new_users[i]}" is already taken, please enter a new username.`);
//     } else {
//         console.log(`Username "${new_users[i]}" is available.`);
//     }
// };



//33


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//     let ordinal = "";
//     let number = numbers[i];
//     if (number === 1) {
//         ordinal = "st";
//     } else if (number === 2) {
//         ordinal = "nd";
//     } else if (number === 3) {
//         ordinal = "rd";
//     } else {
//         ordinal = "th";
//     }
//     console.log(number + ordinal);
// };


//34

// let pizzas = ["Pepperoni", "Margherita", "Hawaiian"];

// for (let i = 0; i < pizzas.length; i++) {
//     console.log(`I like ${pizzas[i]} pizza.`);
// }

// console.log("I really love pizza!");


//35

// let animals = ["Dog", "Cat", "Rabbit"];

// for (let i = 0; i < animals.length; i++) {
//     console.log(`A ${animals[i]} would make a great pet.`);
// }

// console.log("Any of these animals would make a great pet!");


//36


// function makeShirt(size, message) {
//     console.log(`The shirt is size ${size} and has the message "${message}" printed on it.`);
// }

// makeShirt("L", "Hello World");



//37


// function makeShirt(size = "L", message = "I love JavaScript") {
//     console.log(`The shirt is size ${size} and has the message "${message}" printed on it.`);
// }

// makeShirt(); // Large with default message
// makeShirt("M"); // Medium with default message
// makeShirt("S", "JavaScript Rocks!"); // Small with custom message



//38


// function describeCity(city, country = "the United States") {
//     console.log(`${city} is in ${country}.`);
// }

// describeCity("New York"); // New York is in the United States
// describeCity("Karachi", "Pakistan"); // Karachi is in Pakistan
// describeCity("London", "England"); // London is in England


//39


// function cityCountry(city, country) {
//     return `${city}, ${country}`;
// }

// let city1 = cityCountry("Lahore", "Pakistan");
// let city2 = cityCountry("London", "England");
// let city3 = cityCountry("New York", "United States");

// console.log(city1); // Lahore, Pakistan
// console.log(city2); // London, England
// console.log(city3); // New York, United States


//40

// function make_album(artist, album, tracks) {
//     let album_details = {
//       artist: artist,
//       album: album
//     };
//     if (tracks) {
//       album_details.tracks = tracks;
//     }
//     return album_details;
//   }
  
//   let album1 = make_album("Pink Floyd", "Dark Side of the Moon");
//   let album2 = make_album("Led Zeppelin", "IV", 8);
//   let album3 = make_album("The Beatles", "Abbey Road",10);
  
//   console.log(album1);
//   console.log(album2);
//   console.log(album3);


//41

// var magicians = ["Harry Houdini", "David Copperfield", "David Blaine", "Dynamo"];

// function showMagicians(magicians) {
//     for (var i = 0; i < magicians.length; i++) {
//         console.log(magicians[i]);
//     }
// }

// showMagicians(magicians);


//42


// let magicians = ["David Copperfield", "Criss Angel", "David Blaine"];

// function make_great(magicians) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = "The Great " + magicians[i];
//   }
// }

// function show_magicians(magicians) {
//   for (let i = 0; i < magicians.length; i++) {
//     console.log(magicians[i]);
//   }
// }

// make_great(magicians);
// show_magicians(magicians);


//43


// let magicians = ["David Copperfield", "Criss Angel", "David Blaine"];

// function make_great(names) {
//   let greatMagicians = [];
//   for (let name of names) {
//     greatMagicians.push("The Great " + name);
//   }
//   return greatMagicians;
// }

// let original = magicians;
// let greats = make_great(original.slice());

// function show_magicians(names) {
//   for (let name of names) {
//     console.log(name);
//   }
// }

// console.log("Original Magicians:");
// show_magicians(original);

// console.log("\nGreat Magicians:");
// show_magicians(greats);


//44


// function makeSandwich(...ingredients) {
//     console.log(`Your sandwich with ${ingredients.join(", ")} is being made.`);
//   }
  
//   makeSandwich("bread", "cheese", "lettuce", "tomato");
//   makeSandwich("bread", "ham", "egg");
//   makeSandwich("bread", "peanut butter", "jelly");



//45


// function carInfo(manufacturer, model, ...options) {
//     let car = {
//       manufacturer: manufacturer,
//       model: model
//     };
//     for (let i = 0; i < options.length; i += 2) {
//       car[options[i]] = options[i + 1];
//     }
//     return car;
//   }
  
//   let car1 = carInfo("Toyota", "Camry", "color", "red", "sunroof", true);
//   let car2 = carInfo("Honda", "Civic", "color", "blue", "remote start", false);
//   let car3 = carInfo("Tesla", "Model S", "color", "white", "autopilot", true);
  
//   console.log(car1);
//   console.log(car2);
//   console.log(car3);



  
  


  







