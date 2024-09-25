/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const MovieDetail = () => {
  const searchParams = useSearchParams();
  const movieId = searchParams.get('movie');

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`, // Store your token in environment variables
    }
  };

  useEffect(() => {
    if (movieId) {
      const fetchMovieDetails = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
          
          if (!response.ok) {
            throw new Error('Failed to fetch movie details');
          }

          const data = await response.json();
          setMovieDetails(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchMovieDetails();
    }
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='text-app-white'>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
    </div>
  );
};

export default MovieDetail;
