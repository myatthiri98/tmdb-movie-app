// const API_KEY = process.env.API_KEY;
import { API_KEY } from '@env';

const apiBaseUrl = 'https://api.themoviedb.org/3';
export const popularAPI = `${apiBaseUrl}/movie/popular?api_key=${API_KEY}`;
export const topRatedAPI = `${apiBaseUrl}/movie/top_rated?api_key=${API_KEY}`;
export const upcomingAPI = `${apiBaseUrl}/movie/upcoming?api_key=${API_KEY}`;
