import { useState } from "react";
import { ColorGame } from "./ColorGame.jsx";
import { MsgList } from "./MsgList.jsx";
import "./App.css";
import { UserList } from "./UserList.jsx";
import {Counter} from './Counter.jsx';

// Component = UI + Logic
// Default Export
export default function App() {
  console.log("Hi");
  return (
    <div className="App">
      {/* <MsgList />

      <UserList />

      <ColorGame /> */}
      <Movie/>

      <MovieList />

    </div>
  );
}

// Task - Movie Dashboard: map
// 1. Movie
// 2. MovieList

const INITIAL_MOVIES = [
  {
    id: "99",
    name: "Vikram",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 8.4,
    summary:
      "Members of a black ops team must track and eliminate a gang of masked murderers.",
    trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
  },
  {
    id: "100",
    name: "RRR",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  },
  {
    id: "102",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  },
  {
    id: "103",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
  },
  {
    id: "105",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: "106",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  },
  {
    id: "107",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  },
  {
    name: "PS2",
    poster:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqusjlRaMBXB-TZD4MlcEG6lBYIERM97CmyBy_mEG_dEK2zKIgqHW9R_IKgkDaoPkpN4fkdQ",
    summary:
      "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
    rating: 8,
    trailer: "https://www.youtube.com/embed/KsH2LA8pCjo",
    id: "108",
  },
  {
    name: "Thor: Ragnarok",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
    rating: 8.8,
    trailer: "https://youtu.be/NgsQ8mVkN8w",
    id: "109",
  },
];

// Smart (Parent) - React to User action
function MovieList() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);

  // input box - variable
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = (event) => {
    event.preventDefault(); // Prevent Refesh Behaviour
    // setColors([...colors, color]);
    console.log("addMovie", name, poster);

    // Object Short hand
    const newMovie = {
      name,
      poster,
      summary,
      rating,
    };

    // Copy the existing movies + New movie
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <form onSubmit={addMovie} className="movie-form-container">
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          placeholder="Poster"
        />

        <input
          onChange={(event) => setRating(event.target.value)}
          type="text"
          placeholder="Rating"
        />

        <input
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          placeholder="Summary"
        />

        {/* Task 1.2 Add Box to the List */}
        <button type="submit">➕ Add</button>
      </form>

      {/* <h1>
        {name} | {poster}|{rating}|{summary}
      </h1> */}

      <section className="movie-list-container">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </section>
    </div>
  );
}

// Presentation
function Movie({ movie }) {
  // Inline Style
  // Declare state variables at the top
  const [show, setShow] = useState(true);

  // Conditional Styling - Ternary Operator
  const ratingStyles = {
    // fontStyle: "italic"
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  // const summaryStyles = {
  //   display: show ? "block" : "none",
  // };

  return (
    <div class="movie-container">
      <img src={movie.poster} alt={movie.name} class="movie-poster" />
      <div className="movie-content-container">
        <div class="movie-specs">
          <h2 class="movie-name">{movie.name}</h2>
          <p style={ratingStyles} class="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        <button onClick={() => setShow(!show)}>Toggle Summary</button>

        {/* Conditional Styling - Hidden in DOM */}
        {/* <p style={summaryStyles} class="movie-summary">
          {movie.summary}
        </p> */}

        {/* Conditional Rendering - Removes from DOM */}
        {show ? <p class="movie-summary">{movie.summary}</p> : ""}
      </div>
    </div>
  );
}

// Rule: Return one JSX Element
// Solution
// 1. Wrapper container - div, section
// 2. React Fragment - <></>
