import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Movie({
  searchQuery,
  movieList,
  setSelectedMovie,
  show,
  handleClose,
  selectedMovie,
}) {
  console.log(movieList);

  const filteredMovies = movieList.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <p className="movies-text">Watch now</p>

        <div className="movie-container row">
          {filteredMovies.map((movie, index) => (
            <img
              key={movie.id}
              style={{
                width: "250px",
                marginBottom: "25px",
                cursor: "pointer",
              }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie poster"
              onClick={() => setSelectedMovie(movie)}
            />
          ))}{" "}
        </div>
        <div></div>
      </div>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedMovie?.overview}</p>
          <p>
            <strong>Rating:</strong> {selectedMovie?.vote_average}
          </p>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`}
          ></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Movie;
