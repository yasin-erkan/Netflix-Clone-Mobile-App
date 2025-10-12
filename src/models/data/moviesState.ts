import {SerializedError} from '@reduxjs/toolkit';

interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  poster_title: string;
  overview: string;
  original_title: string;
  original_language: string;
  adult?: string;
  popularity?: number;
  vote_average: number;
  vote_count: number;
}

interface MoviesState {
  popularMovies: Movie[];
  pending: boolean;
  error: SerializedError;
}

export type {MoviesState, Movie};
