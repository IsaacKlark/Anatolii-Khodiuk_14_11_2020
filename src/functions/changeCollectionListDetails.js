import favourites from '../components/favourites';

const changeCollectionListDetails = (starImage, res) => {
    let moviesList = JSON.parse(localStorage.getItem('moviesList'))?.movies || [];
    let idIsExist = false;
    const moviesStars = document.querySelectorAll(".starButton");

    moviesList.forEach(value => {
        if (value.movieId === res.id) {
            starImage.src = "../src/images/star_inactive.png";
            moviesList =  moviesList.filter(value => value.movieId !== res.id);
            idIsExist = true;

            for (let i = 0; i < moviesStars.length; i++) {
                if (+moviesStars[i].dataset.id === res.id) {
                    moviesStars[i].className = "starButton inactiveStar";
                }
            }
        }
    });

    if (!idIsExist) {
        starImage.src = "../src/images/star_active.png";
        moviesList.push({ movieName: res.name, movieId: res.id });

        for (let i = 0; i < moviesStars.length; i++) {
            if (+moviesStars[i].dataset.id === res.id) {
                moviesStars[i].className = "starButton activeStar";
            }
        }
    };

    localStorage.setItem('moviesList', JSON.stringify({movies: moviesList}));

    const favoritesMovies = document.querySelector(".favouritesMovies");
    favoritesMovies.innerHTML = favourites().outerHTML;
}

export default changeCollectionListDetails;