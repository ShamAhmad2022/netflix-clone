import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Row } from 'react-bootstrap';
import FavMovie from './FavMovie/FavMovie';


function FavList() {

  const [dataFromDB, setDataFromDB] = useState([]);

  const [isUpdated, setIsUpdated] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_MOVIES_API}/getMovies`);
      setDataFromDB(res.data);
    } catch (err) {
      console.log(err);
    }

  }

  const updateMoviesAfterDelete = (id) =>{
    setDataFromDB(dataFromDB.filter(singleMovie => singleMovie.id !== id));
    console.log(id);
}

  useEffect(() => {
    getData();
  }, [isUpdated])


  return (
    <div>
        <Row>
          <h1>List of your favorite movies:</h1>
          {dataFromDB.map(movie => <FavMovie movie={movie} updateMoviesAfterDelete={updateMoviesAfterDelete} setIsUpdated={setIsUpdated}/>)}
        </Row>
    </div>
  )
}

export default FavList