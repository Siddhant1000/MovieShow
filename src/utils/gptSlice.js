import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch : false,
        movieResults: null,
        movieNames:null,

    },
    reducers:{
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addMovieResult: (state,action) =>{
            const{movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        removeMovieResult: (state) =>{

            state.movieNames = null;
            state.movieResults = null;


        }
        
    }
})

export const {toggleGptSearchView,addMovieResult,removeMovieResult} = gptSlice.actions;

export default  gptSlice.reducer;
