import componentCreator from '../functions/componentCreator';
import movieClicked from './movieClicked';

const favourites = () => {
    const favouritesMovies = componentCreator("div", "favouritesMoviesList");
    const favouritesHeaderWrapper = componentCreator("div", "favouritesHeaderWrapper");
    const headerImage = componentCreator("img", "headerImage");
    const favouriteHeader = componentCreator("h2", "favourtiteHeader");

    favouriteHeader.innerText = "Favourite List";
    headerImage.src = './src/images/star_active.png';
    headerImage.alt = "Favourite List";
    favouritesHeaderWrapper.append(headerImage);
    favouritesHeaderWrapper.append(favouriteHeader);
    favouritesMovies.append(favouritesHeaderWrapper);

    let moviesList = JSON.parse(localStorage.getItem('moviesList'))?.movies || [];

    const removeMovieFromFavourite = (id) => {
        moviesList = moviesList.filter(value => value.movieId !== id);
        localStorage.setItem('moviesList', JSON.stringify({ movies: moviesList }));
        
        const starButtons = document.querySelectorAll('.starButton');

        for (let i = 0; i < starButtons.length; i++) {
            if (+starButtons[i].dataset.id === id) {
                starButtons[i].className = "starButton inactiveStar";
            }
        }

        const favoritesMovies = document.querySelector(".favouritesMovies");
        favoritesMovies.innerHTML = favourites().outerHTML;
    }

    moviesList.forEach(value => {
        const favouriteMoviesWrapper = componentCreator("div", "favouriteMoviesWrapper");
        const movieName = componentCreator("div", "favouriteMovieName");
        movieName.role = 'button';
        movieName.innerText = value.movieName;
        movieName.dataset.id = value.movieId;

        const removeFavouriteMovie = componentCreator("button", "removeFavouriteMovie");
        removeFavouriteMovie.type = "button";
        removeFavouriteMovie.innerText = "x";
        removeFavouriteMovie.title = "remove from list";
        removeFavouriteMovie.dataset.id = value.movieId;

        favouriteMoviesWrapper.append(movieName);
        favouriteMoviesWrapper.append(removeFavouriteMovie);
        favouritesMovies.append(favouriteMoviesWrapper);
    })

    setTimeout(() => {
        const removeFavouriteMovies = document.querySelectorAll('.removeFavouriteMovie');
        const movieNames = document.querySelectorAll('.favouriteMovieName');

        for (let i = 0; i < removeFavouriteMovies.length; i++) {
            removeFavouriteMovies[i].addEventListener('click', e => {
                removeMovieFromFavourite(+e.target.dataset.id)
            });

            movieNames[i].addEventListener('click', () => {
                movieClicked(+movieNames[i].dataset.id)
            })
        }
    }, 0);

    return favouritesMovies;
}

export default favourites;