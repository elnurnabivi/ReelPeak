import React from "react";
import { Modal, Button } from "react-bootstrap";

function TrendingMovies({
  trendingMovies,
  setSelectedMovie,
  selectedMovie,
  show,
  handleClose,
}) {
  return (
    <>
      <div>
        <p className="movies-text">All-Time Favorites</p>
        <div className="movie-container row">
          {trendingMovies.map((movie) => (
            <img
              key={movie.id}
              style={{
                width: "250px",
                marginBottom: "25px",
                cursor: "pointer",
              }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
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

export default TrendingMovies;
