document.addEventListener("DOMContentLoaded", function () {
  // Populate movies initially
  populateMovies(movies);

  // Add search functionality
  document.querySelector(".search-button").addEventListener("click", function () {
    const searchTerm = document.querySelector(".search-bar").value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    populateMovies(filteredMovies);
  });

  document.querySelector(".search-bar").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    populateMovies(filteredMovies);
  });

  // Add filter functionality for genre, ratings, contentRating, and year
  document.querySelectorAll("#genre-button, #ratings-button, #mpaa-button, #year-button").forEach(element => {
    element.addEventListener("change", function () {
      const genre = document.querySelector("#genre-button").value;
      console.log(genre)
      const rating = document.querySelector("#ratings-button").value;
      console.log(rating)
      const contentRating = document.querySelector("#mpaa-button").value;
      console.log(contentRating)
      const year = document.querySelector("#year-button").value;
      console.log(year)

      let filteredMovies = movies;

      if (genre !== "All") {
        filteredMovies = filteredMovies.filter(movie => movie.genre === genre);
      }

      if (rating !== "All") {
        filteredMovies = filteredMovies.filter(movie => movie.rating === parseInt(rating));
      }

      if (contentRating !== "All") {
        filteredMovies = filteredMovies.filter(movie => movie.contentRating === contentRating);
      }

      if (year !== "All") {
        filteredMovies = filteredMovies.filter(movie => movie.year === parseInt(year));
      }

      populateMovies(filteredMovies);
    });
  });
});



function populateMovies(movies) {
  const movieContainer = document.querySelector("#movieContainer");
  movieContainer.innerHTML = '';

  movies.forEach((movie, index) => {
    // Create column
    const column = document.createElement("div");
    column.className = "col-lg-4 col-md-6";

    // Create card
    const card = document.createElement("div");
    // if (index % 3 === 0) {
    //   card.className = "card mt-5 mt-md-0";
    // } else if (index % 3 === 2) {
    //   card.className = "card mt-5 mt-lg-0";
    // } else {
    //   card.className = "card mt-5";
    // }

    card.className = "card mt-5";
    // Create card header
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header p-0 mx-3 mt-n4 position-relative z-index-2";
    const cardImageAnchor = document.createElement("a");
    cardImageAnchor.className = "d-block blur-shadow-image";
    const cardImage = document.createElement("img");
    cardImage.className = "img-fluid border-radius-lg";
    cardImage.src = movie.imageSrc;
    cardImage.alt = "img-blur-shadow";
    cardImage.loading = "lazy";
    cardImageAnchor.appendChild(cardImage);
    cardHeader.appendChild(cardImageAnchor);

    // Create card body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body pt-3";
    const cardGenre = document.createElement("p");
    cardGenre.className = "text-dark mb-2 text-sm";
    cardGenre.textContent = `Genre: ${movie.genre}`;
    const cardTitle = document.createElement("h5");
    cardTitle.textContent = movie.title;
    const cardDesc = document.createElement("p");
    cardDesc.textContent = movie.description;
    const cardButton = document.createElement("button");
    cardButton.type = "button";
    cardButton.className = "btn btn-outline-primary btn-sm mb-0";
    cardButton.textContent = "View Movie Details";
    
    // Attach click event to display modal
    cardButton.addEventListener("click", function() {
      showModal(movie);
    });

    cardBody.appendChild(cardGenre);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDesc);
    cardBody.appendChild(cardButton);

    // Append header and body to card
    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    // Append card to column and column to container
    column.appendChild(card);
    movieContainer.appendChild(column);
  });


}

function showModal(movie) {
  // Populate the modal with movie details
  document.getElementById('modalTitle').innerText = movie.title;
  document.getElementById('modalGenre').innerText = movie.genre;
  document.getElementById('modalRating').innerText = movie.rating;
  document.getElementById('modalYear').innerText = movie.year;
  document.getElementById('modalContentRating').innerText = movie.contentRating;
  document.getElementById('modalDescription').innerText = movie.detailedDescription;
  document.getElementById('modalImage').src = movie.imageSrc;
  
  // Get the modal element
  const modal = document.getElementById('movieModal');
  
  // Display the modal
  modal.style.display = 'block';
  
  // Add the fade-in class to initiate the animation
  modal.classList.add('fade-in');
}

// Function to close the modal
function closeModal() {
  document.getElementById('movieModal').style.display = 'none';
}


let textArray = [
  "Struggling to Pick the Perfect Movie Tonight?",
  "Lost in a Sea of Titles?",
  "Seeking the Perfect Flick?",
  "Overwhelmed by Streaming Choices?",
  "Stuck in a Film Rut?",
  "Don't Know What to Watch Next?",
  "Eager for a Film Adventure?",
  "Craving a Cinematic Experience?"
];


let textIndex = 0;
let charIndex = 0;

async function typeWriter() {
  let element = document.getElementById("typewriter");
  while (true) {
    if (charIndex < textArray[textIndex].length) {
      element.innerHTML += textArray[textIndex].charAt(charIndex);
      charIndex++;
      let delay = 50; // standard delay for each character
      if (['.', ',', '!', '?'].includes(textArray[textIndex].charAt(charIndex))) {
        delay = 400; // add delay if character is punctuation
      }
      await new Promise(resolve => setTimeout(resolve, delay));
    } else {
      // Pause after completing the sentence
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Erase the current line smoothly
      while (element.textContent.length > 1) { // Stop at 1 character to prevent "shifting"
        element.innerHTML = element.textContent.slice(0, -1);
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      element.innerHTML = "&nbsp;"; // non-breaking space as an invisible character
      
      // Reset for the next line
      charIndex = 0;
      textIndex++;
      if (textIndex >= textArray.length) textIndex = 0;
    }
  }
}

// Initialize typewriter effect
typeWriter();
