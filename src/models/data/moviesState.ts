import {SerializedError} from '@reduxjs/toolkit';

interface Movie {
  backdrop_path?: string;
  id: number;
  title: string;
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
  genres?: Array<{id: number; name: string}>;
  runtime?: number;
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
  movieDetailData: Movie | null;
  searchResults: Movie[];
  myList: Movie[];
  continueWatching: Movie[];
  watchLater: Movie[];
  pending: boolean;
  error: SerializedError;
  categories: Category[];
  selectedCategory: Category;
}

export type {MoviesState, Movie, Category};
