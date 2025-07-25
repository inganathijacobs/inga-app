// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Named import
// import 2 from same file
// can rename variable

// import { isLineBreak } from "typescript";
// import { double as dbl, quote } from "./shared";
// import "./styles.css";
// import { UserList } from "./UserList";
import React, { useState } from "react";
// import { Counter } from "./Counter";

// console.log(dbl(15));
// console.log(quote);

export default function App() {
  // Logic Starts
  // const name = "Luvuyo";
  // //Logic Ends
  // return (
  //   // UI Starts
  //   <div className="App">
  //     <h1>Hello {name}</h1>
  //     <label htmlFor="name"> Name: </label>
  //     <input type="text" placeholder="Tony" id="name" />
  //   </div>
  //   //UI Ends
  // );
  return (
    // UI Starts
    <div className="App">
      {/* <UserList />
      <Counter /> */}
      {/* <ColorGame /> */}
      <MovieList />
      <Movie />
      {/* <UserList /> */}
    </div>
  );
}

function Dislike() {
  //react doesn't listen to this variable
  //react listens to hook variable
  //hooks -function- starts with 'use'
  // let like = 0;
  const [dislike, setDisLike] = useState(40);
  // const [state,setState]= useState(Initial Value);
  // setLike-> updates the like
  return (
    <div>
      <button
        onClick={() => {
          // console.log("Clicked...");
          // like = like + 1;
          setDisLike(dislike - 1);
        }}
      >
        👎{dislike}
      </button>
      {/* <button onClick={(like) => like + 1}>Like</button> */}
      {/* <h1>{like}</h1> */}
    </div>
  );
}
export function ColorBox({ color }) {
  const styles = {
    background: color,
    height: "25px",
    width: "250px",
  };
  return <div style={styles}></div>;
}

// Task - Movie Dashboard: map
// 1. Movie
// 2. MovieList

function MovieList() {
  const movies = [
    {
      name: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers.",
    },
    {
      name: "RRR",
      poster:
        "https://tse3.mm.bing.net/th/id/OIP.Y0OBkZPGGmIunpVO0ObDHgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://th.bing.com/th/id/R.9156e333e2c69fd3f8ec93c57926e5e2?rik=x6JHQiQP4Yz0zg&pid=ImgRaw&r=0",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster:
        "https://tse3.mm.bing.net/th/id/OIP.JKWw7_vkp7G_i71ATxZCNwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    },
    {
      name: "PS2",
      poster:
        "https://tse2.mm.bing.net/th/id/OIP.jzuVJrNOY_nVHCEXwWJX8gHaLK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      summary:
        "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      rating: 8,
    },
    {
      name: "Thor: Ragnarok",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      rating: 8.8,
    },
  ];
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <Movie {...movie} />
      ))}
    </div>
  );
}

function Movie({ name, poster, summary, rating }) {
  const ratingStyles = {
    color: rating > 8.5 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const summaryStyles = {
    display: show ? "block" : "none",
  };


  return (
    <div className="movies-container">
      <div className="movie-container">
        <img src={poster} alt="Movie poster" className="movie-poster" />
        <div className="movie-content-container">
          <div class="movie-specs">
            <h2 className="movie-name">{name}</h2>
            <p style={ratingStyles} className="movie-rating">
              ⭐ {rating}
            </p>
          </div>
          <button onClick={() => setShow(!show)}>
            Toggle Summary
          </button>
          <p style={summaryStyles} className="movie-summary">{summary}</p>
        </div>
      </div>
    </div>
  );
}
