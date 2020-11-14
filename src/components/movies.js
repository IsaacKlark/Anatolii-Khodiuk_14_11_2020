import componentCreator from '../functions/componentCreator';
import movieClicked from './movieClicked';
import changeCollectionList from '../functions/changeCollectionList';
import filterGenres from '../functions/filterGenres';
import changeVue from '../functions/changeVue';

const movies = (moviesFromServer) => {
    const moviesWrapper = componentCreator("div", "moviesWrapper");
    const movies = componentCreator("div", "moviesList");

    for (let i = 0; i < moviesFromServer.length; i++) {
        const movie = componentCreator("div", "movie");
        const imageWrapper = componentCreator("div", "imageWrapper");
        const movieImage = componentCreator("img", "movieImage");

        movie.dataset.id = moviesFromServer[i].id;
        movieImage.src = moviesFromServer[i].img;
        movieImage.alt = moviesFromServer[i].name;
        movie.addEventListener("click", () => { movieClicked(moviesFromServer[i].id) })

        imageWrapper.append(movieImage);

        const movieName = componentCreator("p", "movieName");
        movieName.innerText = moviesFromServer[i].name;

        const movieYear = componentCreator("p", "movieYear");
        movieYear.innerText = moviesFromServer[i].year;

        let movieInCollection = false;
        const moviesList = JSON.parse(localStorage.getItem('moviesList'))?.movies || [];

        moviesList.forEach(value => {
            if (value.movieId === moviesFromServer[i].id) movieInCollection = true;
        })
        const starButton = componentCreator("button", movieInCollection
            ? "starButton activeStar"
            : "starButton inactiveStar");
        starButton.dataset.id = moviesFromServer[i].id;
        starButton.type = 'button';
        starButton.title = movieInCollection ? 'remove from collection' : 'add to collection';
        starButton.addEventListener('click', e => {
            changeCollectionList(e, moviesFromServer[i].name, moviesFromServer[i].id)
        })

        movie.append(imageWrapper);
        movie.append(movieName);
        movie.append(movieYear);
        movie.append(starButton);
        movies.append(movie);
    }
    const moviesWrapperHeader = componentCreator("h1", "moviesWrapperHeader");

    const displaySelect = componentCreator("select", "input");
    const option1 = componentCreator("option", "");
    option1.selected = true;
    option1.value = "card";
    option1.innerText = "card";
    displaySelect.id = "view";

    const option2 = componentCreator("option", "");
    option2.value = "list";
    option2.innerText = "list";
    displaySelect.append(option1);
    displaySelect.append(option2);

    displaySelect.addEventListener("change", e => { changeVue(e) })

    const filterInput = componentCreator("input", "input");
    filterInput.type = "text";
    filterInput.placeholder = "filter by genres";
    filterInput.addEventListener("input", e => { filterGenres(e, moviesFromServer) })

    moviesWrapperHeader.innerText = 'Movies Gallery';
    moviesWrapper.append(moviesWrapperHeader);
    moviesWrapper.append(filterInput);
    moviesWrapper.append(displaySelect);
    moviesWrapper.append(movies);
    document.body.appendChild(moviesWrapper);
}

export default movies;