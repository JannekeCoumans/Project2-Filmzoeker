// Alle filmposters in 1 variabele
const allMovies = movies.Movies.map(m => { return m.Poster });
// De plek in de DOM waar de films naartoe moeten
const shownMoviesList = document.getElementById('shownMovies');
// Categorie 1: nieuwste films
const newestMovies = movies.Movies.filter(m => parseInt(m.Year) >= 2014).map(m => { return m.Poster });
// Categorie 2: Avengers
const avengers = movies.Movies.filter(m => m.Title.includes("Avengers")).map(m => { return m.Poster });
// Categorie 3: X-Men
const xmen = movies.Movies.filter(m => m.Title.includes("X-Men")).map(m => { return m.Poster });
// Categorie 4: Princess
const princess = movies.Movies.filter(m => m.Title.includes("Princess")).map(m => { return m.Poster });
// Categorie 5: Batman
const batman = movies.Movies.filter(m => m.Title.includes("Batman")).map(m => { return m.Poster });
// Functie die de pagina leeg maakt
const clearList = function () {
    while (shownMoviesList.firstChild) {
        shownMoviesList.removeChild(shownMoviesList.firstChild);
    }
};

// Alle imdbID's in 1 variabele
const allLinks = movies.Movies.map(m => { return m.imdbID });
// Functie die films naar de DOM stuurt
addMoviesToDom = (m) => {
    clearList();
    for (i = 0; i < m.length; i++) {
        const newLi = document.createElement('li');
        shownMoviesList.appendChild(newLi);
        const newLink = document.createElement('a');
        newLink.href = "https://www.imdb.com/title/" + allLinks[i];
        newLi.appendChild(newLink);
        const newImg = document.createElement('img');
        newImg.src = m[i];
        newLink.appendChild(newImg);
    }
}

// Defaultpagina
addMoviesToDom(allMovies);

// Functie die een Event Listener aan alle radiobuttons koppelt
const radioButtons = document.querySelectorAll('input[name="filter-films"]');
for (i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function () {
        const handleOnChangeEvent = (event) => {
            x = event.target.value;
            switch (x) {
                case "nieuwe-films":
                    addMoviesToDom(newestMovies);
                    break;
                case "avenger-films":
                    addMoviesToDom(avengers);
                    break;
                case "xmen-films":
                    addMoviesToDom(xmen);
                    break;
                case "princess-films":
                    addMoviesToDom(princess);
                    break;
                case "batman-films":
                    addMoviesToDom(batman);
                    break;
            }
        };
        handleOnChangeEvent(event);
    })
}