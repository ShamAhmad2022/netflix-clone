import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalMovie.css'
import axios from 'axios';

function ModalMovie({show, handleClose, signlemovie}) {



  const saveToDatabase = (e) => {
  e.preventDefault();

  const newMovieOb = {
  id: signlemovie.id,
  title: signlemovie.title,
  release_date: signlemovie.release_date,
  poster_path: signlemovie.poster_path,
  overview: signlemovie.overview,
  user_comment: e.target.userComment.value 
  };


  axios.post(`${process.env.REACT_APP_MOVIES_API}/addMovie`, newMovieOb)
  .then(res => {
          console.log(res.data);
          handleClose();
        })
  .catch(err => console.log(err))

  alert('Movie has been added to you FAV');
  }

  return (
       <Modal show={show} onHide={handleClose}>
        <form onSubmit={saveToDatabase}>
        <Modal.Header closeButton>
          <Modal.Title>{signlemovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={"https://image.tmdb.org/t/p/original/"+signlemovie.poster_path} alt={signlemovie.title}/>
            <p>Movie ID: {signlemovie.id}</p>
            <p>Release date: {signlemovie.release_date}</p>
            <p>Description: {signlemovie.overview}</p>
            
                <p><label>Add your comment: </label></p>
                <textarea id='userComment' rows="4" cols="60.7" placeholder='write your comment here'></textarea>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            Add to favorite
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
  );
}

export default ModalMovie;