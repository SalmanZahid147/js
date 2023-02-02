//Q36

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

//code:


// function makeShirt(size, message) {
//     console.log(`The shirt is size ${size} and has the message "${message}" printed on it.`);
// }

// makeShirt("L", "Hello World");


//Q37

//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//code:


// function makeShirt(size = "L", message = "I love JavaScript") {
//     console.log(`The shirt is size ${size} and has the message "${message}" printed on it.`);
// }

// makeShirt(); // Large with default message
// makeShirt("M"); // Medium with default message
// makeShirt("S", "JavaScript Rocks!"); // Small with custom message


//Q38

//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
//Call your function for three different cities, at least one of which is not in the default country.

//code:


// function describeCity(city, country = "the United States") {
//     console.log(`${city} is in ${country}.`);
// }

// describeCity("New York"); // New York is in the United States
// describeCity("Karachi", "Pakistan"); // Karachi is in Pakistan
// describeCity("London", "England"); // London is in England


//Q39

// City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

//code:


// function cityCountry(city, country) {
//     return `${city}, ${country}`;
// }

// let city1 = cityCountry("Lahore", "Pakistan");
// let city2 = cityCountry("London", "England");
// let city3 = cityCountry("New York", "United States");

// console.log(city1); // Lahore, Pakistan
// console.log(city2); // London, England
// console.log(city3); // New York, United States

//Q40

//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.

//code:


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
    




