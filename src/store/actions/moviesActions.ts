import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  POPULAR_URL,
  NOW_PLAYING_URL,
  TOP_RATED_URL,
  UPCOMING_URL,
  MOVIE_DETAIL_URL,
} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async (params: any) => {
    try {
      const response = await getRequest(POPULAR_URL, params);
      return response.data.results;
    } catch (error: any) {
      console.error('Popular API Error:', error.message);
      console.error('Error Response:', error.response?.data);
      throw error;
    }
  },
);

const getNowPlayingMovies = createAsyncThunk(
  'movies/getNowPlaying',
  async (params: any) => {
    try {
      const response = await getRequest(NOW_PLAYING_URL, params);
      return response.data.results;
    } catch (error: any) {
      console.error('Now Playing API Error:', error.message);
      console.error('Error Response:', error.response?.data);
      throw error;
    }
  },
);

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRated',
  async (params: any) => {
    try {
      const response = await getRequest(TOP_RATED_URL, params);
      return response.data.results;
    } catch (error: any) {
      console.error('Top Rated API Error:', error.message);
      console.error('Error Response:', error.response?.data);
      throw error;
    }
  },
);

const getUpcomingMovies = createAsyncThunk(
  'movies/getUpcoming',
  async (params: any) => {
    try {
      const response = await getRequest(UPCOMING_URL, params);
      return response.data.results;
    } catch (error: any) {
      console.error('Upcoming API Error:', error.message);
      console.error('Error Response:', error.response?.data);
      throw error;
    }
  },
);

const getMovieDetail = createAsyncThunk(
  'movies/getMovieDetail',
  async movieId => {
    try {
      const url = MOVIE_DETAIL_URL + movieId;
      const response = await getRequest(url, {});
      console.log('movie detail', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Popular API Error:', error.message);
      console.error('Error Response:', error.response?.data);
      throw error;
    }
  },
);

export {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMovieDetail,
};
