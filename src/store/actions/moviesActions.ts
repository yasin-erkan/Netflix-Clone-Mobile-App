import {createAsyncThunk} from '@reduxjs/toolkit';
import {POPULAR_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async () => {
    try {
      const response = await getRequest(POPULAR_URL, {});
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  },
);

export {getPopularMovies};
