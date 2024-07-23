import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();

    const getMovieVideos  = async() =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",
         API_OPTIONS)
        const json = await data.json();


        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.lenght ? filterData[2] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        getMovieVideos();


    },[]);

}

export default useMovieTrailer;