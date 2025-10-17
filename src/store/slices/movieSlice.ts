import {createSlice} from '@reduxjs/toolkit';
import {MoviesState} from '../../models/data/moviesState';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMovieDetail,
} from '../actions/moviesActions';
import {CATEGORIES} from '../../utils/constants';

const initialState: MoviesState = {
  popularMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  pending: false,
  error: {},
  selectedCategory: {},
  movieDetailData: {},
  pendingMovieDetail: false,
  categories: [
    {
      id: 1,
      category: CATEGORIES.NOWPLAYING,
      categoryTitle: 'Now Playing',
    },
    {
      id: 2,
      category: CATEGORIES.POPULAR,
      categoryTitle: 'Popular',
    },
    {
      id: 3,
      category: CATEGORIES.TOPRATED,
      categoryTitle: 'Top Rated',
    },
    {
      id: 4,
      category: CATEGORIES.UPCOMING,
      categoryTitle: 'Upcoming',
    },
  ],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
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
      })

      .addCase(getMovieDetail.pending, state => {
        state.pending = true;
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.movieDetailData = action.payload;
        state.pending = false;
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

export const {setSelectedCategory} = moviesSlice.actions;
export default moviesSlice.reducer;
