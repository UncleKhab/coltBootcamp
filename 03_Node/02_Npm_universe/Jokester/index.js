const jokes = require('give-me-a-joke');
const colors = require('colors');
jokes.getRandomCNJoke(function (joke) {
    console.log(joke.rainbow);
})