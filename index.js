const API = "http://localhost:3000/films/1";
fetch(API)
.then((res) => res.json())
.then(renderFilm);
function renderFilm(film) {
    const filmMenuDiv = document.getElementById("film-menu");
    const titleDiv = document.getElementById("film-details");
    const runDiv = document.getElementById("runtime")
    const showDiv = document.getElementById("showtime")
    const availableDiv = document.getElementById("Available-tickets")
    const filmPoster = document.createElement("img");
    filmPoster.src = film.poster;
    filmMenuDiv.append(filmPoster);
    const filmTitle = document.createElement("p");
    filmTitle.textContent = film.title;
    titleDiv.append(filmTitle);
    const filmRuntime = document.createElement("p");
    filmRuntime.textContent = film.runtime;
    runDiv.append(filmRuntime);
    const filmShowtime = document.createElement("p");
    filmShowtime.textContent = film.showtime;
    showDiv.append(filmShowtime);
    const filmAvailability = document.createElement("p");
    filmAvailability.textContent = (film.capacity - film.tickets_sold);
    availableDiv.append(filmAvailability);
}