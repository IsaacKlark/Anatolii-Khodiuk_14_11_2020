import favourites from '../components/favourites';

const changeCollectionList = (e, movieName, movieId) => {
    e.stopPropagation();
    const moviesList = JSON.parse(localStorage.getItem('moviesList')) || { movies: [] };
    let copyMovies = [...moviesList.movies];

    if (e.target.className === "starButton inactiveStar") {
        e.target.className = "starButton activeStar";
        copyMovies.push({ movieName, movieId });
    } else {
        e.target.className = "starButton inactiveStar";
        copyMovies = copyMovies.filter(value => value.movieName !== movieName);
    }

    moviesList.movies = copyMovies;
    localStorage.setItem('moviesList', JSON.stringify(moviesList));
    
    const favoritesMovies = document.querySelector(".favouritesMovies");
    favoritesMovies.innerHTML = favourites().outerHTML;
}

export default changeCollectionList;