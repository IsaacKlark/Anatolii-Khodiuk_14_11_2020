(()=>{"use strict";const e=(e,t)=>{const o=document.createElement(e);return o.className=t,o},t=()=>{const o=e("div","favouritesMoviesList"),i=e("div","favouritesHeaderWrapper"),a=e("img","headerImage"),n=e("h2","favourtiteHeader");n.innerText="Favourite List",a.src="../src/images/star_active.png",a.alt="Favourite List",i.append(a),i.append(n),o.append(i);let s=JSON.parse(localStorage.getItem("moviesList"))?.movies||[];const d=e=>{s=s.filter((t=>t.movieId!==e)),localStorage.setItem("moviesList",JSON.stringify({movies:s}));const o=document.querySelectorAll(".starButton");for(let t=0;t<o.length;t++)+o[t].dataset.id===e&&(o[t].className="starButton inactiveStar");document.querySelector(".favouritesMovies").innerHTML=t().outerHTML};return s.forEach((t=>{const i=e("div","favouriteMoviesWrapper"),r=e("div","favouriteMovieName");r.role="button",r.innerText=t.movieName,r.dataset.id=t.movieId;const a=e("button","removeFavouriteMovie");a.type="button",a.innerText="x",a.title="remove from list",a.dataset.id=t.movieId,i.append(r),i.append(a),o.append(i)})),setTimeout((()=>{const e=document.querySelectorAll(".removeFavouriteMovie"),t=document.querySelectorAll(".favouriteMovieName");for(let o=0;o<e.length;o++)e[o].addEventListener("click",(e=>{d(+e.target.dataset.id)})),t[o].addEventListener("click",(()=>{r(+t[o].dataset.id)}))}),0),o},o=t,i=()=>{document.querySelector(".movieDetailsWrapper").remove(),document.querySelector(".moviesWrapper").style.display="block",document.querySelector(".favouritesMovies").style.display="block"},r=t=>{document.querySelector(".preLoader").style.display="block",document.querySelector(".moviesWrapper").style.display="none",document.querySelector(".favouritesMovies").style.display="none",fetch("http://my-json-server.typicode.com/moviedb-tech/movies/list/"+t).then((e=>e.json()),(e=>{alert(e),document.querySelector(".preLoader").style.display="none"})).then((t=>{document.querySelector(".preLoader").style.display="none";const r=e("div","movieDetailsWrapper"),a=e("div","topMovieDetailsWrapper"),n=e("img","movieDetailedImage"),s=e("div","movieDescriptionWrapper"),d=e("h1","favourtiteHeader"),p=e("p","movieDescription"),c=e("div","bottomMovieDetailsWrapper"),l=e("div","movieDetailedImage"),m=e("div",""),v=e("div","detailsWrapper"),u=e("div","detailsWrapper"),y=e("button","starButtonDescription"),g=e("img","starImageDescription"),S=e("p","yearDescription"),f=JSON.parse(localStorage.getItem("moviesList"))?.movies||[];let L=!1;const h=e("div","productionInfoWrapper"),I=e("div","productionInfoWrapper"),T=e("p","productionInfoCategorie"),M=e("p","productionInfoCategorie"),N=e("p","director"),q=e("p","director"),b=e("button","closeButton");b.type="button",b.innerText="x",q.innerText=t.starring.join(", "),M.innerText="Starrings: ",N.innerText=t.director,f.forEach((e=>{e.movieId===t.id&&(L=!0)})),T.innerText="Director: ",S.innerText=t.year,g.src=L?"../src/images/star_active.png":"../src/images/star_inactive.png",g.alt="add to favourite collection",p.innerText=t.description,d.innerText=t.name,n.src=t.img,n.alt=t.name,y.type="button",t.genres.forEach((t=>{const o=e("p","genre");o.innerText=t,u.append(o)})),y.addEventListener("click",(()=>{((e,t)=>{let i=JSON.parse(localStorage.getItem("moviesList"))?.movies||[],r=!1;const a=document.querySelectorAll(".starButton");if(i.forEach((o=>{if(o.movieId===t.id){e.src="../src/images/star_inactive.png",i=i.filter((e=>e.movieId!==t.id)),r=!0;for(let e=0;e<a.length;e++)+a[e].dataset.id===t.id&&(a[e].className="starButton inactiveStar")}})),!r){e.src="../src/images/star_active.png",i.push({movieName:t.name,movieId:t.id});for(let e=0;e<a.length;e++)+a[e].dataset.id===t.id&&(a[e].className="starButton activeStar")}localStorage.setItem("moviesList",JSON.stringify({movies:i})),document.querySelector(".favouritesMovies").innerHTML=o().outerHTML})(g,t)})),b.addEventListener("click",i),h.append(T),h.append(N),m.append(h),I.append(M),I.append(q),m.append(I),y.append(g),v.append(y),v.append(S),l.append(v),l.append(u),c.append(l),c.append(m),s.append(d),s.append(p),a.append(n),a.append(s),r.append(a),r.append(c),r.append(b),document.body.append(r)}),(e=>{alert(e),document.querySelector(".preLoader").style.display="none"}))},a=(e,t,i)=>{e.stopPropagation();const r=JSON.parse(localStorage.getItem("moviesList"))||{movies:[]};let a=[...r.movies];"starButton inactiveStar"===e.target.className?(e.target.className="starButton activeStar",a.push({movieName:t,movieId:i})):(e.target.className="starButton inactiveStar",a=a.filter((e=>e.movieName!==t))),r.movies=a,localStorage.setItem("moviesList",JSON.stringify(r)),document.querySelector(".favouritesMovies").innerHTML=o().outerHTML};fetch("http://my-json-server.typicode.com/moviedb-tech/movies/list").then((e=>e.json()),(e=>{alert(e),document.querySelector(".preLoader").style.display="none"})).then((t=>{(t=>{const o=e("div","moviesWrapper"),i=e("div","moviesList");for(let o=0;o<t.length;o++){const n=e("div","movie"),s=e("div","imageWrapper"),d=e("img","movieImage");n.dataset.id=t[o].id,d.src=t[o].img,d.alt=t[o].name,n.addEventListener("click",(()=>{r(t[o].id)})),s.append(d);const p=e("p","movieName");p.innerText=t[o].name;const c=e("p","movieYear");c.innerText=t[o].year;let l=!1;(JSON.parse(localStorage.getItem("moviesList"))?.movies||[]).forEach((e=>{e.movieId===t[o].id&&(l=!0)}));const m=e("button",l?"starButton activeStar":"starButton inactiveStar");m.dataset.id=t[o].id,m.type="button",m.title=l?"remove from collection":"add to collection",m.addEventListener("click",(e=>{a(e,t[o].name,t[o].id)})),n.append(s),n.append(p),n.append(c),n.append(m),i.append(n)}const n=e("h1","moviesWrapperHeader");n.innerText="Movies Gallery",o.append(n),o.append(i),document.body.appendChild(o)})(t),document.querySelector(".preLoader").style.display="none";const i=e("div","favouritesMovies");i.innerHTML=o().outerHTML,document.body.appendChild(i)}),(e=>{alert(e),document.querySelector(".preLoader").style.display="none"}))})();