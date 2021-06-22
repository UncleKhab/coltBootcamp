const pokemonsContainer = document.getElementById('pokemons');
const formElement = document.getElementById("form");
function createPokemonElement(id)
{
    const pokeBox = document.createElement('div');
    const pokeText = document.createElement('span');
    const pokeImg = document.createElement('img');

    pokeBox.classList.add('pokemon');
    pokeText.classList.add('pokemon-text');
    pokeText.innerText = `#${id}`
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    pokeBox.appendChild(pokeImg);
    pokeBox.appendChild(pokeText);
    return pokeBox;
}

function appendPokemons(nr)
{   
    for(let i = 1; i <= nr; i++)
    {
        pokemonsContainer.appendChild(createPokemonElement(i));
    }
}


formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    let number = formData.get('number');
    pokemonsContainer.innerHTML = "";
    appendPokemons(number);
})