const changeVue = e => {
    const movies = document.querySelectorAll('.movie');
    const imageWrappers = document.querySelectorAll('.imageWrapper');

    if (e.target.value === "list") {
        for (let i = 0; i < movies.length; i++) {
            movies[i].style.width = "100%";
            movies[i].style.marginTop = "0";
            movies[i].style.marginBottom = "0";
            movies[i].style.flexDirection = "row";
            movies[i].style.alignItems = "center";
            movies[i].style.borderRadius = "0";
            imageWrappers[i].style.width = "200px";
        }
    } else {
        for (let i = 0; i < movies.length; i++) {
            movies[i].style.width = "300px";
            movies[i].style.marginTop = "15px";
            movies[i].style.marginBottom = "15px";
            movies[i].style.flexDirection = "column";
            movies[i].style.alignItems = "flexStart";
            movies[i].style.borderRadius = "5px";
            imageWrappers[i].style.width = "100%";
        }
    }
}

export default changeVue;