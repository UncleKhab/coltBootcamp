const form = document.querySelector('#searchForm');
const showsList = document.querySelector("#showsList");
let prevList = '';

form.addEventListener('submit', async function(e){
    e.preventDefault();
    showsList.innerHTML = "";
    const showTitle = this.elements.query.value;
    const data = {
        q: showTitle,
    }
    const searchPath = 'search/shows'
    const showInfo = await getTvShow(data, searchPath);
    displayShows(showInfo);
    this.reset();
})

const getTvShow = async (data, searchPath) => {
    let url = `http://api.tvmaze.com/${searchPath}`;
    try{
        const config = {params: data}
        const request = await axios.get(url, config)
        return request.data;
    }
    catch(e){
        console.log('something went wrong!', e);
    }
}

const displayShows = (shows) => {
    for(let result of shows){
        console.log(result);
        if(result.show.image)
        {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            img.addEventListener('click', async function(){
                const searchPath = "singlesearch/shows";
                const data = {
                    q: result.show.name,
                }
                const showDetails = await getTvShow(data, searchPath);
                displayShowDetails(showDetails);
                
            })
            showsList.append(img);
        }
    }
}
const goback = () => {
    console.log('clicked'
    )
    showsList.innerHTML = prevList;
}
const displayShowDetails = (showDetails) =>
{
    const {genres, image, language, name } = showDetails;
    const genresString = genres.map(item => {
        return `<b>${item}</b> `
    })
    const backButton = document.createElement('button');
    backButton.innerText = 'back';
    backButton.addEventListener('click', goback)
    const createElement =`
        <li>
            <img src=${image.medium}>
            <h2>${name}</h2>
            <p>${genresString}</p>
            <p>${language}</p>
        </li>
    `
    prevList = showsList.innerHTML;
    showsList.innerHTML = createElement;
    showsList.prepend(backButton);
}