import {createSlice} from '@reduxjs/toolkit';
import {MoviesState} from '../../models/data/moviesState';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMovieDetail,
  getMovieSearch,
} from '../actions/moviesActions';
import {CATEGORIES} from '../../utils/constants';

const initialState: MoviesState = {
  popularMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  movieDetailData: null,
  searchResults: [],
  myList: [],
  continueWatching: [],
  watchLater: [],
  pending: false,
  error: {},
  selectedCategory: {},
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
    addToMyList: (state, action) => {
      const movie = action.payload;
      const exists = state.myList.find(m => m.id === movie.id);
      if (!exists) {
        state.myList.push(movie);
      }
    },
    removeFromMyList: (state, action) => {
      const movieId = action.payload;
      state.myList = state.myList.filter(m => m.id !== movieId);
    },
    addToContinueWatching: (state, action) => {
      const movie = action.payload;
      const exists = state.continueWatching.find(m => m.id === movie.id);
      if (!exists) {
        state.continueWatching.unshift(movie);
      } else {
        // Move to top if already exists
        state.continueWatching = state.continueWatching.filter(
          m => m.id !== movie.id,
        );
        state.continueWatching.unshift(movie);
      }
      // Keep only last 10
      if (state.continueWatching.length > 10) {
        state.continueWatching = state.continueWatching.slice(0, 10);
      }
    },
    removeFromContinueWatching: (state, action) => {
      const movieId = action.payload;
      state.continueWatching = state.continueWatching.filter(
        m => m.id !== movieId,
      );
    },
    addToWatchLater: (state, action) => {
      const movie = action.payload;
      const exists = state.watchLater.find(m => m.id === movie.id);
      if (!exists) {
        state.watchLater.push(movie);
      }
    },
    removeFromWatchLater: (state, action) => {
      const movieId = action.payload;
      state.watchLater = state.watchLater.filter(m => m.id !== movieId);
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
      })
      .addCase(getMovieSearch.pending, state => {
        state.pending = true;
      })
      .addCase(getMovieSearch.fulfilled, (state, action) => {
        state.searchResults = action.payload.results || [];
        state.pending = false;
      })
      .addCase(getMovieSearch.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

export const {
  addToMyList,
  removeFromMyList,
  addToContinueWatching,
  removeFromContinueWatching,
  addToWatchLater,
  removeFromWatchLater,
} = moviesSlice.actions;
export default moviesSlice.reducer;
