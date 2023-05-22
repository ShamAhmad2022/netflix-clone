import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateModal from '../../UpdateModal/UpdateModal';
import axios from 'axios';

function FavMovie({movie, updateMoviesAfterDelete, setIsUpdated}) {

    const [signlemovie, setsignlemovie] = useState([]);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handeClick = () =>{
        setsignlemovie(movie);
        handleShow();
    }

    const deleteMovie = () =>{
        axios.delete(`${process.env.REACT_APP_MOVIES_API}/delete/${movie.id}`)
            .then(res => {
                if (window.confirm("Are you sure you want to remove this movie?")) {
                updateMoviesAfterDelete(movie.id);
            }
            })
            .catch(err => console.log(err));
    }

  return (
    <>
    <Card style={{ width: '18rem' }} className='each-movie-card'>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.overview}
        </Card.Text>
        <Button variant="primary" onClick={handeClick}>Edit your comment</Button>
        <Button variant="danger" onClick={deleteMovie}>Remove from FAV</Button>
      </Card.Body>
    </Card>
    <UpdateModal show={show} handleClose={handleClose} signlemovie={signlemovie} setIsUpdated={setIsUpdated}/>
  </>
  );
}

export default FavMovie;