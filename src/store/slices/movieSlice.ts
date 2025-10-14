import {createSlice} from '@reduxjs/toolkit';
import {MoviesState} from '../../models/data/moviesState';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../actions/moviesActions';

const initialState: MoviesState = {
  popularMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
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
      })

      .addCase(getNowPlayingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlayingMovies = action.payload;
        state.pending = false;
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })

      .addCase(getTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.pending = false;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })

      .addCase(getUpcomingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload;
        state.pending = false;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

export default moviesSlice.reducer;
