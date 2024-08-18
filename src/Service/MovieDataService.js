import axios from 'axios';
import { popularAPI, topRatedAPI, upcomingAPI } from "../Configs/config";

const fetchMovieData = async (api) => {
  try {
    const response = await axios.get(api);
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return [];
  }
};

export const getPopularData = () => fetchMovieData(popularAPI);
export const getTopRatedData = () => fetchMovieData(topRatedAPI);
export const getUpcomingData = () => fetchMovieData(upcomingAPI);
