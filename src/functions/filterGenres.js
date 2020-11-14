const filterGenres = (e, moviesFromServer) => {
    let filtered = moviesFromServer.map((value) => {
        for (let i = 0; i < value.genres.length; i++) {
            if (value.genres[i].toLowerCase().includes(e.target.value.toLowerCase())) {
                return value;
            }
        }

        return null;
    }).filter(value => value).map(value => value.id);

    if (!e.target.value) filtered = moviesFromServer.map(value => value.id);

    const movies = document.querySelectorAll(".movie");

    for (let i = 0; i < movies.length; i++) {
        if (!filtered.includes(+movies[i].dataset.id)) {
            movies[i].style.display = "none";
        } else {
            movies[i].style.display = "flex";
        }
    }

}

export default filterGenres;