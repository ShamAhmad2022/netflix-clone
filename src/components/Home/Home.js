import React, { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList';
import Container from 'react-bootstrap/Container';
import axios from 'axios';


function Home() {

    const [allMovies, setAllMovies] = useState([]);

    const getData = async ()=>{
        try{
            const res = await axios.get(`${process.env.REACT_APP_MOVIES_API}/trending`);
                setAllMovies(res.data.trendingMovies);
                console.log(allMovies);
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(()=>{
        getData();
    } ,[])

    return (
    <div>    
        <Container>
            <h1>List of the trending movies:</h1>
            <MovieList allMovies={allMovies}/>
        </Container>
    </div>
  )
}

export default Home