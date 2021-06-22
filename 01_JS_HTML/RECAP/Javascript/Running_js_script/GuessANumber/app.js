let maximum = parseInt(prompt("Enter the maximum number"));
while(!maximum)
{
    maximum = parseInt(prompt("Enter the maximum number"));
} 

const targetNum = Math.floor(Math.random() * maximum + 1);
let guess = parseInt(prompt("Enter your first guess"));
attempts = 1;
while(parseInt(guess) !== targetNum)
{   
    attempts++;
    if(guess > targetNum)
    {
        guess = prompt("Too high! Enter a new guess");
    }
    else
    {
        guess = prompt("Too Low! Enter a new guess")
    }
    if(guess === 'q') break;

}

if(guess === 'q') {
    alert("You quit!");
}
else
{   
    alert("YOU WIN!")
    alert(`it took you ${attempts} guesses`);
}