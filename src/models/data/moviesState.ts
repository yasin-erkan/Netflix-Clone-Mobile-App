import {SerializedError} from '@reduxjs/toolkit';

interface Movie {
  backdrop_path?: string;
  id?: number;
  title?: string;
  poster_title?: string;
  overview?: string;
  original_title?: string;
  original_language?: string;
  adult?: string;
  popularity?: number;
  vote_average?: number;
  vote_count?: number;
  poster_path?: string;
  release_date?: string;
}

interface Category {
  id?: number;
  category?: string;
  categoryTitle?: string;
}
interface MoviesState {
  popularMovies: Movie[];
  nowPlayingMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];
  pending: boolean;
  error: SerializedError;
  categories: Category[];
  selectedCategory: Category;
  movieDetailData: Movie;
  pendingMovieDetail: boolean;
}

export type {MoviesState, Movie, Category};
