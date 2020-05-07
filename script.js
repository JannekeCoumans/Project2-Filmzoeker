// Functie die de films op de DOM toont
const addMoviesToDom = (array) => {
    const shownMovies = document.querySelector("#shownMovies");
    array.forEach(movie => {
        const newLi = document.createElement("li");
        const newLink = document.createElement("a");
        const newImage = document.createElement("img");
        newImage.src = movie.Poster;
        newLink.href = `https://www.imdb.com/title/${movie.imdbID}`;
        newLink.appendChild(newImage);
        newLi.appendChild(newLink);
        shownMovies.appendChild(newLi);
    })
}

// Filter op: nieuwste films
const newestMovies = movies.Movies.filter(movie => parseInt(movie.Year) >= 2014).map(movie => { return movie });

// Filter op: Titel
const filterMovies = (filterName) => {
    const filteredMovies = movies.Movies.filter(movie => movie.Title.includes(filterName)).map(movie => { return movie });
    return filteredMovies
};

// Functie die de pagina leeg maakt
const clearList = () => {
    while (shownMovies.firstChild) {
        shownMovies.removeChild(shownMovies.firstChild);
    }
};

// Defaultpagina
addMoviesToDom(movies.Movies);

// Functie die een Event Listener aan alle radiobuttons koppelt
const radioButtons = document.querySelectorAll('input');
radioButtons.forEach(button => {
    button.addEventListener("change", () => {
        const handleOnChangeEvent = (event) => {
            if(event.target.value == "nieuwe-films"){
                clearList();
                addMoviesToDom(newestMovies);
            }else{
                clearList();
                addMoviesToDom(filterMovies(event.target.value))
            }
        }
        handleOnChangeEvent(event)
    })
})