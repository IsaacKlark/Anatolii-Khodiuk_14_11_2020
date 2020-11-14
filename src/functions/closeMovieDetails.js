const closeMovieDetails = () => {
    document.querySelector(".movieDetailsWrapper").remove();
    document.querySelector(".moviesWrapper").style.display = "block";
    document.querySelector(".favouritesMovies").style.display = "block";
}

export default closeMovieDetails;