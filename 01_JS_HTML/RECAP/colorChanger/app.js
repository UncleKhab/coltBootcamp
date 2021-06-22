const body = document.body;
const heading = document.querySelector("#color");
const button = document.querySelector(".btn");

const generateRandom = () => {
    const rgb = [];
    for(let i = 0; i < 3; i++)
    {
        rgb.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

const clickHandler = () => {
    const rgb = generateRandom(3);

    
    let sum = rgb.reduce((accumulator, value) => accumulator+value);
    
    
    if(sum < 200) heading.style.color = "#fff";
    else heading.style.color = "#000"
    
    
    heading.innerText = str;
    body.style.backgroundColor = str;
}

// setInterval(clickHandler, 300);


button.addEventListener('click', clickHandler);