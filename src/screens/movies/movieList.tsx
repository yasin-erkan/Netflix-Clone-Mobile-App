import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {screenStyle} from '../../styles/defaultScreenStyle';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../store/store';
import MovieCard from '../../components/movies/movieCard';
import {RouteProp, useRoute} from '@react-navigation/native';
import {CATEGORIES} from '../../utils/constants';
import CategoryCard from '../../components/movies/categoryCard';
import {setSelectedCategory} from '../../store/slices/movieSlice';

type RootStackParamList = {
  'Movie List': {
    category: CATEGORIES;
  };
};

const MovieList: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Movie List'>>();
  const {
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularMovies,
    categories,
    selectedCategory,
  } = useSelector((state: RootState) => state.movies);

  const dispatch: AppDispatch = useDispatch();
  const routeCategory = route.params.category;

  useEffect(() => {
    const categoryObj = categories.find(cat => cat.category === routeCategory);
    if (categoryObj) {
      dispatch(setSelectedCategory(categoryObj));
    }
  }, [routeCategory, dispatch, categories]);

  // currently active cate
  const activeCategory = selectedCategory?.category || routeCategory;

  // choose right film for categories
  const getMoviesByCategory = () => {
    switch (activeCategory) {
      case CATEGORIES.POPULAR:
        return popularMovies;
      case CATEGORIES.NOWPLAYING:
        return nowPlayingMovies;
      case CATEGORIES.TOPRATED:
        return topRatedMovies;
      case CATEGORIES.UPCOMING:
        return upcomingMovies;

      default:
        return popularMovies;
    }
  };

  const filteredData = getMoviesByCategory();

  const handleCategoryPress = (category: any) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <View style={screenStyle.container}>
      <View style={styles.categoryContainer}>
        <FlatList
          horizontal
          data={categories}
          renderItem={({item}) => (
            <CategoryCard
              category={item}
              isActive={item.category === activeCategory}
              onPress={() => handleCategoryPress(item)}
            />
          )}
          keyExtractor={item => item.id?.toString() || ''}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />
      </View>

      <FlatList
        numColumns={2}
        data={filteredData}
        renderItem={({item}) => <MovieCard movie={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.movieList}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#0a0a0a',
    borderBottomWidth: 1.5,
    borderBottomColor: '#e50914',
    elevation: 8,
    shadowColor: '#e50914',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  categoryList: {
    paddingHorizontal: 8,
  },
  movieList: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#0a0a0a',
  },
  columnWrapper: {
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
});

export default MovieList;
