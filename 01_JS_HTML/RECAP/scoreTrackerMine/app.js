const score = {
    playerOne: 0,
    playerTwo: 0,
    maxScore: 7
}
const scoreDisplay = document.querySelector('#score');
const selectUpTo = document.querySelector('#upTo');
const btnPlayerOne = document.querySelector('.playerOne');
const btnPlayerTwo = document.querySelector('.playerTwo');
const btnResetScore = document.querySelector('.resetScore');

btnPlayerOne.addEventListener('click', handleClick)
btnPlayerTwo.addEventListener('click', handleClick)
btnResetScore.addEventListener('click', handleClick)
selectUpTo.addEventListener('change', function(e) {
    const selectedValue = parseInt(selectUpTo.selectedOptions[0].value);
    score.maxScore = selectedValue;
})
function handleClick(e){
   const elem = this.dataset.value;
   changeScore(elem);
}

function changeScore(elem)
{
    if(elem === 'resetScore')
    {
        resetScore();
        changeHeader();
    }
    else
    {
        score[elem]++;
        changeHeader();
        if(score[elem] === score.maxScore)
        {
            handleWin(elem);
        }
    }

}

const changeHeader = () => {
    const newString = `${score.playerOne} to ${score.playerTwo}`;
    scoreDisplay.innerText = newString;
}
const handleWin = (elem) =>
{
    const newString = `${elem} has won the game!! Reset to play Again!`
    resetScore();
    scoreDisplay.innerText = newString;
}

const resetScore = () =>
{
    score.playerOne = 0;
    score.playerTwo = 0;
}