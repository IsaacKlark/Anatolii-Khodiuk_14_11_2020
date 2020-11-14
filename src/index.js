import movies from './components/movies';
import componentCreator from './functions/componentCreator';
import favourites from './components/favourites';

fetch("http://my-json-server.typicode.com/moviedb-tech/movies/list")
    .then(res => res.json(), err => {
        alert(err);
        document.querySelector(".preLoader").style.display = "none";
    })
    .then(res => {
        movies(res);
        document.querySelector(".preLoader").style.display = "none";
        const favoritesMovies = componentCreator("div", "favouritesMovies");
        favoritesMovies.innerHTML = favourites().outerHTML;
        document.body.appendChild(favoritesMovies);
    }, err => {
        alert(err);
        document.querySelector(".preLoader").style.display = "none";
    })


