import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateModal({ show, handleClose, signlemovie, setIsUpdated }) {

  // const [commentValue, setCommentValue] = useState(signlemovie.user_comment)

  const updateDatabase = (e) => {
    e.preventDefault();
    setIsUpdated(false);
    // setCommentValue(e.target.userComment.value);

    const newMovieOb = {
      user_comment: e.target.userComment.value 
      };

    console.log(newMovieOb)

    axios.put(`${process.env.REACT_APP_MOVIES_API}/update/${signlemovie.id}`, newMovieOb)  
      .then(res => {
        setIsUpdated(true);
        handleClose();
        alert(`your comment for ${signlemovie.title} has been edited`)
    })
    .catch(err => console.log(err))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <form onSubmit={updateDatabase}>
        <Modal.Header closeButton>
          <Modal.Title>{signlemovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={"https://image.tmdb.org/t/p/original/" + signlemovie.poster_path} alt={signlemovie.title} />
          <p>Movie ID: {signlemovie.id}</p>
          <p>Release date: {signlemovie.release_date}</p>
          <p>Description: {signlemovie.overview}</p>

          <p><label>Edit your comment: </label></p>
          <textarea id='userComment' rows="4" cols="60.7" placeholder='write your comment here' defaultValue={signlemovie.user_comment}></textarea>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            Update
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default UpdateModal;