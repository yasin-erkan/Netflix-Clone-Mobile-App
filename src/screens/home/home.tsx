import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {screenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../store/actions/moviesActions';
import Section from '../../components/home/section';
import {CATEGORIES} from '../../utils/constants';

const Home: React.FC = () => {
  const {popularMovies, nowPlayingMovies, topRatedMovies, upcomingMovies} =
    useSelector((state: RootState) => state.movies);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies({page: 1}));
    dispatch(getNowPlayingMovies({page: 2}));
    dispatch(getTopRatedMovies({page: 3}));
    dispatch(getUpcomingMovies({page: 4}));
  }, []);

  const sections = [
    {
      id: 1,
      sectionTitle: 'Popular',
      category: CATEGORIES.POPULAR,
      data: popularMovies,
    },
    {
      id: 2,
      sectionTitle: 'Now Playing',
      category: CATEGORIES.NOWPLAYING,
      data: nowPlayingMovies,
    },
    {
      id: 3,
      sectionTitle: 'Top Rated',
      category: CATEGORIES.TOPRATED,
      data: topRatedMovies,
    },
    {
      id: 4,
      sectionTitle: 'Upcoming',
      category: CATEGORIES.UPCOMING,
      data: upcomingMovies,
    },
  ];

  return (
    <View style={screenStyle.container}>
      <FlatList
        data={sections}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Section
            title={item.sectionTitle}
            data={item.data}
            category={item.category}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});

export default Home;
