import componentCreator from '../functions/componentCreator';
import changeCollectionListDetails from '../functions/changeCollectionListDetails';
import closeMovieDetails from '../functions/closeMovieDetails';

const movieClicked = (index) => {
    document.querySelector(".preLoader").style.display = "block";
    document.querySelector(".moviesWrapper").style.display = "none";
    document.querySelector(".favouritesMovies").style.display = "none";

    fetch(`http://my-json-server.typicode.com/moviedb-tech/movies/list/${index}`)
        .then(res => res.json(), err => {
            alert(err);
            document.querySelector(".preLoader").style.display = "none";
        })
        .then(res => {
            document.querySelector(".preLoader").style.display = "none";

            const movieDetailsWrapper = componentCreator("div", "movieDetailsWrapper");
            const topMovieDetailsWrapper = componentCreator("div", "topMovieDetailsWrapper");
            const movieDetailedImage = componentCreator("img", "movieDetailedImage");
            const movieDescriptionWrapper = componentCreator("div", "movieDescriptionWrapper");
            const movieDetailedName = componentCreator("h1", "favourtiteHeader");
            const movieDescription = componentCreator("p", "movieDescription");
            const bottomMovieDetailsWrapper = componentCreator("div", "bottomMovieDetailsWrapper");
            const bottomLeftDetailsWrapper = componentCreator("div", "movieDetailedImage");
            const bottomRightDetailsWrapper = componentCreator("div", "");
            const descriptionWrapper1 = componentCreator("div", "detailsWrapper");
            const descriptionWrapper2 = componentCreator("div", "detailsWrapper");
            const starButton = componentCreator("button", "starButtonDescription");
            const starImage = componentCreator("img", "starImageDescription");
            const yearDescription = componentCreator("p", "yearDescription");
            const moviesList = JSON.parse(localStorage.getItem('moviesList'))?.movies || [];
            let starIsActive = false;
            const productionInfoWrapper1 = componentCreator("div", "productionInfoWrapper");
            const productionInfoWrapper2 = componentCreator("div", "productionInfoWrapper");
            const productionInfoCategorie = componentCreator("p", "productionInfoCategorie");
            const productionInfoCategorie2 = componentCreator("p", "productionInfoCategorie");
            const director = componentCreator("p", "director");
            const starring = componentCreator("p", "director");
            const closeButton = componentCreator("button", "closeButton");
            
            closeButton.type = 'button';
            closeButton.innerText = "x";
            starring.innerText = res.starring.join(', ');
            productionInfoCategorie2.innerText = "Starrings: ";
            director.innerText = res.director;
            moviesList.forEach(value => { if (value.movieId === res.id) starIsActive = true; });
            productionInfoCategorie.innerText = "Director: "
            yearDescription.innerText = res.year;
            starImage.src = starIsActive ? "../src/images/star_active.png" : "../src/images/star_inactive.png";
            starImage.alt = "add to favourite collection";
            movieDescription.innerText = res.description;
            movieDetailedName.innerText = res.name;
            movieDetailedImage.src = res.img;
            movieDetailedImage.alt = res.name;
            starButton.type = 'button';
            
            res.genres.forEach(result => {
                const genre = componentCreator("p", "genre");
                genre.innerText = result;
                descriptionWrapper2.append(genre);
            });

            starButton.addEventListener("click", () => {
                changeCollectionListDetails(starImage, res)
            })

            closeButton.addEventListener('click', closeMovieDetails);

            productionInfoWrapper1.append(productionInfoCategorie);
            productionInfoWrapper1.append(director);
            bottomRightDetailsWrapper.append(productionInfoWrapper1);
            productionInfoWrapper2.append(productionInfoCategorie2);
            productionInfoWrapper2.append(starring);
            bottomRightDetailsWrapper.append(productionInfoWrapper2);
            starButton.append(starImage);
            descriptionWrapper1.append(starButton);
            descriptionWrapper1.append(yearDescription);
            bottomLeftDetailsWrapper.append(descriptionWrapper1);
            bottomLeftDetailsWrapper.append(descriptionWrapper2);
            bottomMovieDetailsWrapper.append(bottomLeftDetailsWrapper);
            bottomMovieDetailsWrapper.append(bottomRightDetailsWrapper);
            movieDescriptionWrapper.append(movieDetailedName);
            movieDescriptionWrapper.append(movieDescription);
            topMovieDetailsWrapper.append(movieDetailedImage);
            topMovieDetailsWrapper.append(movieDescriptionWrapper);
            movieDetailsWrapper.append(topMovieDetailsWrapper);
            movieDetailsWrapper.append(bottomMovieDetailsWrapper);
            movieDetailsWrapper.append(closeButton);
            document.body.append(movieDetailsWrapper);
        }, err => {
            alert(err);
            document.querySelector(".preLoader").style.display = "none";
        })
}

export default movieClicked;