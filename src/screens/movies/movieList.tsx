import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {RouteTypes} from '../routes/RouteTypes';
import {screenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import MovieCard from '../../components/movies/movieCard';

type Props = RouteTypes<'Movie List'>;

const MovieList: React.FC<Props> = ({navigation, route}) => {
  const {nowPlayingMovies, topRatedMovies, upcomingMovies, popularMovies} =
    useSelector((state: RootState) => state.movies);
  const category = route.params.category;
  return (
    <View style={screenStyle.container}>
      <FlatList
        numColumns={2}
        data={popularMovies}
        renderItem={item => <MovieCard movie={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default MovieList;
