import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../ModalMovie/ModalMovie';
import './movie.css'

function Movie({movie}) {

    const [signlemovie, setsignlemovie] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handeClick = () =>{
        setsignlemovie(movie);
        handleShow();
    }

  return (
    <>
    <Card style={{ width: '18rem' }} className='each-movie-card'>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.overview}
        </Card.Text>
        <Button variant="primary" onClick={handeClick}>add to the favorite list</Button>
      </Card.Body>
    </Card>
    <ModalMovie show={show} handleClose={handleClose} signlemovie={signlemovie}/>
    </>
  );
}

export default Movie;