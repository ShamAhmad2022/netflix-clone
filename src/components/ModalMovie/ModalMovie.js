import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './modalMovie.css'
import axios from 'axios';

function ModalMovie({show, handleClose, signlemovie}) {

    const saveToDatabase = () => {
        const dataSend = axios.post(`${process.env.REACT_APP_MOVIES_API}/addMovie`, signlemovie)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

  return (
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{signlemovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={"https://image.tmdb.org/t/p/original/"+signlemovie.poster_path} alt={signlemovie.title}/>
            <p>Movie ID: {signlemovie.id}</p>
            <p>Release date: {signlemovie.release_date}</p>
            <p>Description: {signlemovie.overview}</p>
            <form>
                <p><label>Add your comment: </label></p>
                <textarea rows="4" cols="60.7"></textarea>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveToDatabase}>
            Add to favorite
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalMovie;