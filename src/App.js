import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import MovieHeading from "./components/MovieHeading";
import SearchBox from "./components/SearchBox";
import Filter from "./components/Filter";
import TrendingMovies from "./components/TrendingMovies";
import LightMode from "./components/LightMode";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [trendingMovies, setTrendingMovies] = useState([]);

  const [selectedTrendingMovie, setSelectedTrendingMovie] = useState(null);
  const [showTrending, setShowTrending] = useState(false);
  const handleTrendingClose = () => setShowTrending(false);
  const handleTrendingShow = () => setShowTrending(true);

  useEffect(() => {
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=23a703055eb923523f66bcd6cf8d244a&vote_average.gte=${minRating}`;

    if (selectedGenre) apiUrl += `&with_genres=${selectedGenre}`;
    if (startDate) apiUrl += `&release_date.gte=${startDate}`;
    if (endDate) apiUrl += `&release_date.lte=${endDate}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  }, [selectedGenre, minRating, startDate, endDate]);

  useEffect(() => {
    if (selectedMovie) handleShow();
  }, [selectedMovie]);

  console.log(movieList);

  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=23a703055eb923523f66bcd6cf8d244a&sort_by=vote_count.desc"
    )
      .then((response) => response.json())
      .then((data) => setTrendingMovies(data.results));
  }, []);

  useEffect(() => {
    if (selectedTrendingMovie) handleTrendingShow();
  }, [selectedTrendingMovie]);

  return (
    <>
      <div className="container-liquid movie-app">
        <div className=" d-flex align-items-evenly mt-4 mb-4 m-1 col-m">
          <MovieHeading heading="ReelPeak movies" />
          <SearchBox setSearchQuery={setSearchQuery} />
          <LightMode />
        </div>

        <div>
          <Filter
            movieList={movieList}
            genres={genres}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            setMinRating={setMinRating}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
        <div className="row m-1">
          <Movie
            searchQuery={searchQuery}
            movieList={movieList}
            setSelectedMovie={setSelectedMovie}
            show={show}
            handleClose={handleClose}
            selectedMovie={selectedMovie}
          />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4 m-1">
          <TrendingMovies
            trendingMovies={trendingMovies}
            setSelectedMovie={setSelectedTrendingMovie}
            selectedMovie={selectedTrendingMovie}
            show={showTrending}
            handleClose={handleTrendingClose}
          />
        </div>
      </div>
    </>
  );
}

export default App;
