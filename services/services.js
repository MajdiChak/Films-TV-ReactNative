import axios from 'axios';
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=98f37b856f9ae9c759b27695816d9abc';

//Get popular movies
export const getPopularMovies = async () => {
  const url = `${apiUrl}/movie/popular?${apiKey}`;
  const response = await axios.get(url);
  return response.data.results;
};

//Get popular tv
export const getPopularTV = async () => {
  const url = `${apiUrl}/tv/popular?${apiKey}`;
  const response = await axios.get(url);
  return response.data.results;
};
