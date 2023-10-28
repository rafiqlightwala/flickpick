 const movies = [
  { 
    title: "Inception", 
    genre: "Sci-fi", 
    rating: 5, 
    year: 2010, 
    contentRating: "PG-13", 
    description: "A movie about dreams within dreams.",
    detailedDescription: "A mind-bending thriller that dives deep into the realm of dreams. Dom Cobb, a skilled thief who specializes in infiltrating people's subconscious, is given the ultimate task: plant an idea into a target's mind, rather than stealing one. As the layers of the dream world unfold, the stakes rise in this masterpiece directed by Christopher Nolan.",
    imageSrc: "../assets/img/movies/inception.jpg"
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 5,
    year: 1994,
    contentRating: "R",
    description: "Two imprisoned men bond over a number of years.",
    detailedDescription: "Adapted from a Stephen King novella, this film chronicles the life of Andy Dufresne, a banker wrongly convicted of murdering his wife. Inside Shawshank Prison, he befriends Red and other inmates, all while maintaining hope for freedom one day. This story is a journey of resilience and friendship against all odds.",
    imageSrc: "../assets/img/movies/shawshank.jpg"
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    rating: 5,
    year: 2008,
    contentRating: "PG-13",
    description: "Batman battles the Joker.",
    detailedDescription: "In this sequel to Batman Begins, Gotham City finds its hero in Batman. But when the Joker, a new villain with a sense of humor as twisted as his mental state, terrorizes the city, Batman must confront his own darkness. Heath Ledger's iconic performance as the Joker steals the show in this action-packed thriller.",
    imageSrc: "../assets/img/movies/knight.jpg"
  },
  {
    title: "The Godfather",
    genre: "Crime",
    rating: 5,
    year: 1972,
    contentRating: "R",
    description: "The aging patriarch of an organized crime dynasty transfers control.",
    detailedDescription: "This classic crime film tells the story of the Corleone family, an Italian-American Mafia clan. When the patriarch, Vito Corleone, steps down, his youngest son Michael reluctantly takes over the family business, facing violent conflict and moral dilemmas. Directed by Francis Ford Coppola, this film is considered one of the greatest in cinematic history.",
    imageSrc: "../assets/img/movies/godfather.jpg"
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 5,
    year: 1994,
    contentRating: "R",
    description: "Interwoven stories of Los Angeles mobsters and fringe players.",
    detailedDescription: "A nonlinear narrative weaves together the lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits. Directed by Quentin Tarantino, the film is known for its sharp dialogue, complex characters, and intricate storytelling, making it a staple of modern cinema.",
    imageSrc: "../assets/img/movies/pulp.jpg"
  },
  {
    title: "Schindler's List",
    genre: "Drama",
    rating: 5,
    year: 1993,
    contentRating: "R",
    description: "Oskar Schindler saves Jewish lives during WWII.",
    detailedDescription: "Based on a true story, Oskar Schindler, a German businessman, saves more than a thousand Polish Jewish refugees during the Holocaust by employing them in his factories. A heart-wrenching tale of hope and survival amidst one of the darkest chapters in human history.",
    imageSrc: "../assets/img/movies/schindler.jpg"
  },
  {
    title: "Fight Club",
    genre: "Drama",
    rating: 4,
    year: 1999,
    contentRating: "R",
    description: "An office worker forms an underground fight club.",
    detailedDescription: "An insomniac office worker, seeking a way to change his life, crosses paths with a soap salesman, Tyler Durden. Together they form Fight Club, an underground society that channels primal male aggression as a form of psychotherapy. However, a dark secret changes everything.",
    imageSrc: "../assets/img/movies/fight.jpg"
  },
  {
    title: "Star Wars: A New Hope",
    genre: "Sci-fi",
    rating: 5,
    year: 1977,
    contentRating: "PG",
    description: "Luke Skywalker joins forces to save the galaxy.",
    detailedDescription: "Luke Skywalker, a farm boy from Tatooine, discovers his true heritage and gets swept into the Rebellion against the tyrannical Empire. With the help of allies like Princess Leia and Han Solo, Luke seeks to defeat the evil Darth Vader and bring peace to the galaxy.",
    imageSrc: "../assets/img/movies/starwars.jpg"
  },
  {
    title: "The Matrix",
    genre: "Sci-fi",
    rating: 5,
    year: 1999,
    contentRating: "R",
    description: "A computer hacker learns about the true nature of reality.",
    detailedDescription: "Neo, a computer hacker, discovers that the world he lives in is a simulated reality controlled by sentient machines. Guided by Morpheus and Trinity, he embarks on a journey to fight against the machines and free humanity. A groundbreaking film that explores themes of reality, identity, and human freedom.",
    imageSrc: "../assets/img/movies/matrix.jpg"
  },
  {
    title: "The Social Network",
    genre: "Drama, Biography",
    rating: 5,
    year: 2010,
    contentRating: "PG-13",
    description: "Chronicles the founding of Facebook.",
    detailedDescription: "A compelling drama that chronicles the rise of Facebook and its co-founder Mark Zuckerberg. As Zuckerberg becomes one of the youngest billionaires, he also faces personal and legal complications with those who claim he stole their idea. A modern tale of ambition, friendship, and the cost of success.",
    imageSrc: "../assets/img/movies/social.jpg"
  },
  {
    title: "Finding Nemo",
    genre: "Animation, Adventure",
    rating: 4,
    year: 2003,
    contentRating: "G",
    description: "A clown fish searches for his missing son.",
    detailedDescription: "Marlin, a clownfish, embarks on a perilous journey to find his son Nemo, who has been captured by a scuba diver. Along the way, he forms an unlikely friendship with Dory, a fish with short-term memory loss. A heartwarming story of love and adventure under the sea.",
    imageSrc: "../assets/img/movies/nemo.jpg"
  },
  {
    title: "Titanic",
    genre: "Romance, Drama",
    rating: 4,
    year: 1997,
    contentRating: "PG-13",
    description: "A love story set during the sinking of the Titanic.",
    detailedDescription: "Jack Dawson and Rose DeWitt Bukater, two people from different social backgrounds, fall in love during the ill-fated voyage of the RMS Titanic. As the ship meets its tragic end, their love story turns into a struggle for survival.",
    imageSrc: "../assets/img/movies/titanic.jpg"
  },
  {
    title: "Avatar",
    genre: "Sci-fi, Action",
    rating: 4,
    year: 2009,
    contentRating: "PG-13",
    description: "A paraplegic Marine explores a moon called Pandora.",
    detailedDescription: "Jake Sully, a paraplegic Marine, is sent to the moon Pandora as part of a mission to mine valuable resources. However, he becomes torn between following his orders and protecting the world he feels is his home. A visual spectacle that explores themes of colonialism and environmentalism.",
    imageSrc: "../assets/img/movies/avatar.jpg"
  },
  {
    title: "Frozen",
    genre: "Animation, Family",
    rating: 4,
    year: 2013,
    contentRating: "PG",
    description: "A queen with ice powers puts her kingdom in eternal winter.",
    detailedDescription: "Elsa, a queen with magical ice powers, isolates herself to protect her kingdom after accidentally plunging it into eternal winter. Her sister Anna embarks on a journey to find her and mend their relationship, discovering her own strengths along the way.",
    imageSrc: "../assets/img/movies/frozen.jpg"
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    rating: 4,
    year: 1994,
    contentRating: "PG-13",
    description: "Forrest Gump, a man with a low IQ, accomplishes great things.",
    detailedDescription: "Forrest Gump is not a smart man, but he is one with a big heart. He finds himself inadvertently present at major historical events and crosses paths with several historical figures. However, his true love, Jenny, remains the constant motivation throughout his life. A tale of love, friendship, and the richness of life.",
    imageSrc: "../assets/img/movies/forrest.jpg"
  },
  {
    title: "Jaws",
    genre: "Thriller, Adventure",
    rating: 5,
    year: 1975,
    contentRating: "PG",
    description: "A killer shark terrorizes a beach community.",
    detailedDescription: "A giant man-eating great white shark attacks beachgoers at a summer resort town, prompting the local police chief to hunt it with the help of a marine biologist and a professional shark hunter. A thriller that made audiences afraid to go into the water.",
    imageSrc: "../assets/img/movies/jaws.jpg"
  },
  {
    title: "Rocky",
    genre: "Sport, Drama",
    rating: 4,
    year: 1976,
    contentRating: "PG",
    description: "An underdog boxer gets a shot at the heavyweight champion.",
    detailedDescription: "Rocky Balboa, a small-time boxer, gets a rare chance to fight the heavyweight champion, Apollo Creed, in a bout in which he strives to go the distance for his self-respect.",
    imageSrc: "../assets/img/movies/rocky.jpg"
  },
  {
    title: "The Exorcist",
    genre: "Horror",
    rating: 5,
    year: 1973,
    contentRating: "R",
    description: "A young girl is possessed by a demon.",
    detailedDescription: "When a young girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her. A spine-chilling horror that delves into the battles between good and evil.",
    imageSrc: "../assets/img/movies/exorcist.jpg"
  },
  {
    title: "Gone with the Wind",
    genre: "Drama, Romance",
    rating: 4,
    year: 1939,
    contentRating: "G",
    description: "A love story set during the American Civil War.",
    detailedDescription: "Set against the backdrop of the American Civil War and Reconstruction era, this film follows the turbulent romance between Scarlett O'Hara and Rhett Butler. A tale of love and loss amid war and societal change.",
    imageSrc: "../assets/img/movies/gone.jpg"
  },
  {
    title: "Toy Story",
    genre: "Animation, Comedy",
    rating: 5,
    year: 1995,
    contentRating: "G",
    description: "Toys come to life when their owners are away.",
    detailedDescription: "Woody, Buzz Lightyear, and other toys come to life when their owner Andy is not around. The film explores themes of friendship, jealousy, and the fear of being replaced, all while taking the audience on a fun-filled adventure.",
    imageSrc: "../assets/img/movies/toy.jpg"
  },
  {
    title: "Gladiator",
    genre: "Action, Drama",
    rating: 5,
    year: 2000,
    contentRating: "R",
    description: "A Roman General seeks justice after he is betrayed.",
    detailedDescription: "Maximus Decimus Meridius, a trusted general in the Roman army, is betrayed by the corrupt Prince Commodus. After losing everything he holds dear, Maximus becomes a gladiator and seeks to avenge the injustice, battling his way through the Colosseum to confront Commodus.",
    imageSrc: "../assets/img/movies/gladiator.jpg"
  }
];