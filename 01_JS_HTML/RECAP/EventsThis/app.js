const generateRandomColor = () => {
    const rgb = [];
    for(let i = 0; i < 3; i++)
    {
        rgb.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', colorize);
}

function colorize()
{
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
}

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log('up');
            break;
        case 'ArrowDown':
            console.log('down');
            break;
        case 'ArrowLeft':
            console.log('left');
            break;
        case 'ArrowRight': 
            console.log('right');
            break;
        default:
            break;
    }
})