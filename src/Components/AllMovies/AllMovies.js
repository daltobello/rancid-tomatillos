import "./AllMovies.css";
import MovieCard from "../MovieCards/MovieCards";
import PropTypes from "prop-types";

function AllMovies({ moviesData, viewMovieBlowUp }) {
  const movieCards = moviesData.map((movie) => {
    return (
      <MovieCard
        imagePath={movie.poster_path}
        rating={movie.average_rating}
        title={movie.title}
        id={movie.id}
        key={movie.id}
        viewMovieBlowUp={viewMovieBlowUp}
      />
    );
  });
  return <div className="movie-container">{movieCards}</div>;
}

AllMovies.propTypes = {
  moviesData: PropTypes.array.isRequired,
  viewMovieBlowUp: PropTypes.func.isRequired,
};

export default AllMovies;
