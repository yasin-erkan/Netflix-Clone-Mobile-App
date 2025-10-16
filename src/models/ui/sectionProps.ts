import {Movie} from '../data/moviesState';
import {CATEGORIES} from '../../utils/constants';

interface SectionProps {
  data: Movie[];
  title: string;
  category: CATEGORIES;
}

export type {SectionProps};
