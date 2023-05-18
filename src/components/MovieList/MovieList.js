import React from 'react'
import Movie from '../Movie/Movie'
import { Row } from 'react-bootstrap'

function MovieList({allMovies}) {
  return (
    <div>
        <Row>
            {allMovies.map(movie => <Movie movie={movie} />)} {/* key={movie.id} but it throw a warning because from the original website there are movies with the same id*/}
        </Row>
    </div>
  )
}

export default MovieList