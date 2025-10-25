import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {screenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import MovieCard from '../../components/movies/movieCard';
import {RouteProp, useRoute} from '@react-navigation/native';
import {CATEGORIES} from '../../utils/constants';
import CategoryCard from '../../components/movies/categoryCard';

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
  } = useSelector((state: RootState) => state.movies);

  const category = route.params.category;

  // choose right film for categories
  const getMoviesByCategory = () => {
    switch (category) {
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

  return (
    <View style={screenStyle.container}>
      <View style={styles.categoryContainer}>
        <FlatList
          horizontal
          data={categories}
          renderItem={({item}) => (
            <CategoryCard
              category={item}
              isActive={item.category === category}
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
    paddingHorizontal: 10,
    backgroundColor: '#141414',
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryList: {
    paddingHorizontal: 5,
  },
  movieList: {
    paddingHorizontal: 8,
    paddingTop: 15,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
});
export default MovieList;
