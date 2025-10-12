import {createSlice} from '@reduxjs/toolkit';
import {MoviesState} from '../../models/data/moviesState';
import {getPopularMovies} from '../actions/moviesActions';

const initialState: MoviesState = {
  popularMovies: [],
  pending: false,
  error: {},
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPopularMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
        state.pending = false;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

export default moviesSlice.reducer;
