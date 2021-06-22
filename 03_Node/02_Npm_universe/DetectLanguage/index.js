const franc = require('franc');
const langs = require('langs');
const figlet = require('figlet');
const colors = require('colors');
const userInput = process.argv[2];

const languageCode = franc(userInput);
if (languageCode === 'und') {
    console.log("Sorry, language not found");
} else {
    const language = langs.where('3', languageCode);
    figlet(language.name, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(`-------------------------------------`)
        console.log(`Our Best Guess is:`)
        console.log(data.green)
    });
}

