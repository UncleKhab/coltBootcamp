let maximum = prompt("Enter the maximum number!");
let numberToGuess = Math.round(Math.random() * maximum + 1);
let display = document.getElementById("congrats");
let input = "";
let maxTries = initialTries = 3;
while(input != numberToGuess)
{
    if(input === 'q') break;
    else if(!input)
    {
        input = prompt(`Enter a number between 1 and ${maximum}`);
    }
    else if(!parseInt(input))
    {
        input = prompt("You need to enter a number!!")
    }
    else if(input < numberToGuess)
    {
        input = prompt(`Too Low. You have ${maxTries} left! Try Again!`)
        maxTries--;
    }
    else if(input > numberToGuess)
    {
        input = prompt(`Too High. You have ${maxTries} left! Try Again!`);
        maxTries--;
    }
    if(maxTries === 0)
    {
        display.innerHTML = `<h1>The number was ${numberToGuess}, but you failed.</h1>`
        break;
    }
}

if(input == numberToGuess)
{
    display.innerHTML = `<h1>GOOD JOB! ${numberToGuess} got you out of trouble! It took you ${10 - maxTries} tries.</h1>`
}
if(input == 'q')
{
    display.innerHTML = `<h1>You're a chicken! the number was ${numberToGuess}</h1>`
}