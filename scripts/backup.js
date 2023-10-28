let moviesArray = [];

// Simulated API function using setTimeout
function fetchMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const moviesLocal = [
        { 
          title: "Inception", 
          genre: "Sci-fi", 
          rating: 5, 
          year: 2010, 
          contentRating: "PG-13", 
          description: "A movie about dreams within dreams.",
          imageSrc: "../assets/img/products/product-1-min.jpg"
        },
        {
          title: "The Shawshank Redemption",
          genre: "Drama",
          rating: 5,
          year: 1994,
          contentRating: "R",
          description: "Two imprisoned men bond over a number of years.",
          imageSrc: "../assets/img/products/product-2-min.jpg"
        },
        {
          title: "The Godfather",
          genre: "Crime",
          rating: 5,
          year: 1972,
          contentRating: "R",
          description: "The aging patriarch of an organized crime dynasty transfers control.",
          imageSrc: "../assets/img/products/product-3-min.jpg"
        },
        {
          title: "The Dark Knight",
          genre: "Action",
          rating: 5,
          year: 2008,
          contentRating: "PG-13",
          description: "Batman battles the Joker.",
          imageSrc: "../assets/img/products/product-4-min.jpg"
        },
        {
          title: "Forrest Gump",
          genre: "Drama",
          rating: 4,
          year: 1994,
          contentRating: "PG-13",
          description: "Forrest Gump, a man with a low IQ, accomplishes great things.",
          imageSrc: "../assets/img/products/product-5-min.jpg"
        },
        {
          title: "Pulp Fiction",
          genre: "Crime",
          rating: 5,
          year: 1994,
          contentRating: "R",
          description: "Interwoven stories of Los Angeles mobsters and fringe players.",
          imageSrc: "../assets/img/products/product-6-min.jpg"
        },
        {
          title: "Schindler's List",
          genre: "Drama",
          rating: 5,
          year: 1993,
          contentRating: "R",
          description: "Oskar Schindler saves Jewish lives during WWII.",
          imageSrc: "../assets/img/products/product-7-min.jpg"
        },
        {
          title: "Fight Club",
          genre: "Drama",
          rating: 4,
          year: 1999,
          contentRating: "R",
          description: "An office worker forms an underground fight club.",
          imageSrc: "../assets/img/products/product-8-min.jpg"
        },
        {
          title: "Star Wars: A New Hope",
          genre: "Sci-fi",
          rating: 5,
          year: 1977,
          contentRating: "PG",
          description: "Luke Skywalker joins forces to save the galaxy.",
          imageSrc: "../assets/img/products/product-9-min.jpg"
        },
        {
          title: "The Matrix",
          genre: "Sci-fi",
          rating: 5,
          year: 1999,
          contentRating: "R",
          description: "A computer hacker learns about the true nature of reality.",
          imageSrc: "../assets/img/products/product-10-min.jpg"
        }
      ];      
      resolve(moviesLocal);
    }, 50); // Simulated 2-second delay
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const movieGrid = document.querySelector(".movie-grid");

  // Fetch simulated API data
  fetchMovies().then((fetchedMovies) => {
    moviesArray = fetchedMovies;
    populateMovieGrid(moviesArray);
  });

  function populateMovieGrid(movies) {
    movieGrid.innerHTML = '';
    movies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
        <img src="${movie.posterURL}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.genre}</p>
        <p>${movie.rating} stars</p>
      `;
      movieCard.addEventListener("click", () => showMovieDetails(movie));
      movieGrid.appendChild(movieCard);
    });

    function showMovieDetails(movie) {
      const movieDetails = document.querySelector(".movie-details");
      movieDetails.querySelector(".movie-title").textContent = movie.title;
      movieDetails.querySelector(".movie-poster").src = movie.posterURL;
      movieDetails.querySelector(".movie-genre").textContent = movie.genre;
      movieDetails.querySelector(".movie-rating").textContent = `${movie.rating} stars`;
      movieDetails.style.display = "flex";
    }
  }

  // Close movie details
  document.querySelector(".close-button").addEventListener("click", () => {
    document.querySelector(".movie-details").style.display = "none";
  });

  // Last updated date
  const lastUpdatedDate = new Date();
  document.querySelector(".last-updated").textContent = `Last Updated: ${lastUpdatedDate.toDateString()}`;
  
  // Search and filter functionality
  document.querySelector('.search-button').addEventListener('click', function() {
    console.log("Came ger")
    const searchTerm = document.querySelector('.search-bar').value.toLowerCase();
    // Filter movies based on the search term
    const filteredMovies = moviesArray.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm)
    );
    // Call your existing function to populate the movie grid
    populateMovieGrid(filteredMovies);
  });

  document.querySelector('.genre-filter').addEventListener('change', function() {
    // Implement genre filter functionality here
  });

  document.querySelector('.year-filter').addEventListener('change', function() {
    // Implement year filter functionality here
  });

  document.querySelector('.rating-filter').addEventListener('change', function() {
    // Implement rating filter functionality here
  });
});
