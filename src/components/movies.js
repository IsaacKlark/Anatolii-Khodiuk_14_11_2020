import componentCreator from '../functions/componentCreator';
import movieClicked from './movieClicked';
import changeCollectionList from '../functions/changeCollectionList';

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
        movie.addEventListener("click", () => {movieClicked(moviesFromServer[i].id)})

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
    
    moviesWrapperHeader.innerText = 'Movies Gallery';
    moviesWrapper.append(moviesWrapperHeader);
    moviesWrapper.append(movies);
    document.body.appendChild(moviesWrapper);
}

export default movies;