import {Movie} from '../data/moviesState';

interface MovieCardProps {
  movie: Movie;
  isHorizontal?: boolean;
  onRemove?: () => void;
  showRemoveButton?: boolean;
}

export type {MovieCardProps};
