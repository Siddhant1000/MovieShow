export const NETFIX_LOGO = ;

export const PHOTO_AVATAR =  "https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BACKGROUND_IMG = "https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_suspense/5736ffa5-1904-4b3b-8967-97d659d95c1b._UR1920,1080_.png";

export const GEMINI_KEY = process.env.REACT_APP_GEMINI;

export const SUPPORTED_LANGUAGES = [
  {identifier : "en", name:"English" },
{identifier : "hindi", name:"Hindi" },
{identifier : "spanish", name:"Spanish" }
]


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_API,
    }
  };
