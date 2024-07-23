import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, GEMINI_KEY } from '../utils/constant';
import { GoogleGenerativeAI } from '@google/generative-ai';
import GeminiResultError from './GeminiResultError';
import { addMovieResult } from '../utils/gptSlice';


const GptSearchBar = () => {
  const dispatch = useDispatch();



  const searchText = useRef(null);

  const genAI = new GoogleGenerativeAI(GEMINI_KEY);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearchClick = async () =>{
    console.log(searchText.current.value)

    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " 
    + searchText.current.value 
    + ".only gives me name of 5 movies, comma seprated like the example result given ahead. Example result: Gadar , Sholay  , Don ,Yeh Jawaani Hai Deewani , Koi mil gya ";



    const model =  genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const geminiResult = response.text();
    

    if(!geminiResult){
     <GeminiResultError/>
    }

    const geminiMovies = geminiResult.split(",");
    console.log(geminiMovies);

    
    const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addMovieResult(
      {
        movieNames: geminiMovies,
         movieResults: tmdbResults,
        }));


  }



  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center '>

        <form className='bg-black grid grid-cols-12 w-1/2' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText}className='p-4 m-4 col-span-9' type='text'
            placeholder={lang[langKey].gptSearchPlaceholder}>

            </input>
            <button className='px-5 py-2 col-span-3 m-5 bg-red-700 text-white rounded-lg '
            onClick={handleGptSearchClick}>
              {lang[langKey].search}
              </button>
        </form>
    </div>
  )
}

export default GptSearchBar