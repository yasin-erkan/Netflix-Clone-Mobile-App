import {Category} from '../data/moviesState';

interface CategoryCardProps {
  category: Category;
  isActive?: boolean;
  onPress?: () => void;
}

export type {CategoryCardProps};
