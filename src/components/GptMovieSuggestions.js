import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import GptNullMessage from './GptNullMessage';

const GptMovieSuggestions = () => {

  const {movieResults,movieNames} = useSelector((store) => store.gpt);

return  movieResults === null ? (
  <GptNullMessage />
) : (
  <div className="bg-black  opacity-90 ">
    {movieResults?.length > 0 && (
      <div className="p-5 mt-10 bg-black">
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    )}
  </div>
);
};

export default GptMovieSuggestions