const API_KEY = "37bf71bc";

const queryAPI = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;
const moveiAPI = `http://www.omdbapi.com/?apikey=${API_KEY}&i=`;

const userInput = document.getElementById("userInput");
const queryMoviesParent = document.getElementById("queryMovies");
const detailSection = document.getElementById("detailsSection");
const loader = document.getElementById("loader");
const fetchError = document.getElementById('error')

function getMovieDetails(id) {
  queryMoviesParent.classList.add("hidden");
  detailSection.classList.remove("hidden");
  
  fetchData(id, false).then((movie) => {
    if (movie.Poster == "N/A") {
        movie.Poster =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&s";
      }
    detailSection.innerHTML = `
        <div class="container">
        <div class="poster">
            <img src="${movie.Poster}" alt="${movie.Title}">
        </div>
        <div class="info">
            <h1>${movie.Title}</h1>
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Writer:</strong> ${movie.Writer}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Language:</strong> ${movie.Language}</p>
            <p><strong>Awards:</strong> ${movie.Awards}</p>
            <div class="rating">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDB Logo">
                <p><strong>IMDB Rating:</strong> ${movie.imdbRating}/10 (${movie.imdbVotes} votes)</p>
            </div>
        </div>
    </div>
        `;
  });
}

function generateMovieCard(data) {
    if(data.hasOwnProperty('Error')){
        fetchError.innerText = data.Error
        fetchError.classList.remove('hidden')
    }

    else{
      queryMoviesParent.innerHTML = ''
        data.Search.map((movie) => {
            if (movie.Poster == "N/A") {
              movie.Poster =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&s";
            }
            queryMoviesParent.innerHTML += `<div class="movieCard" onclick="getMovieDetails('${movie.imdbID}')">
                <img src="${movie.Poster}" alt="" srcset="">
                <div>
                    <h1>${movie.Title}</h1>
                    <p>(${movie.Year})</p>
                </div>
            </div>`;
          });
    }
}

function fetchData(value, query = true) {
  loader.classList.remove("hidden");
  let api;
  if (query) {
    api = queryAPI + value;
  } else api = moveiAPI + value;

  return fetch(api)
    .then((res) => res.json())
    .catch(e=>{
        fetchError.innerText = e
        fetchError.classList.remove('hidden')
    })
    .finally(() => loader.classList.add("hidden"));
}

function searchMovie(e) {
  e.preventDefault();
  detailSection.classList.add("hidden");
  fetchError.classList.add('hidden')
  queryMoviesParent.classList.remove("hidden");
  fetchData(userInput.value).then((data) => generateMovieCard(data));
}
