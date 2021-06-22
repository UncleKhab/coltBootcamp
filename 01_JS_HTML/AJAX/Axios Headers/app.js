const button = document.querySelector('button');
const jokesList = document.querySelector('#jokes');

const addNewJoke = async () =>
{
    const jokeText = await getDadJoke()
    const item = document.createElement('li');
    item.append(jokeText);
    jokesList.append(item);

}
const getDadJoke = async () => {
    try{
        const config = {headers:{ Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    }
    catch(e)
    {
        return 'No Jokes Available! Sorry';
    }
}

button.addEventListener('click', addNewJoke);