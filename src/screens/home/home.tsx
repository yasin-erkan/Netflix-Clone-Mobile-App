import React, {useEffect} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {screenStyle} from '../../styles/defaultScreenStyle';
import {POPULAR_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {getPopularMovies} from '../../store/actions/moviesActions';

interface Props {}

const Home: React.FC<Props> = () => {
  const {popularMovies} = useSelector((state: RootState) => state.movies);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <View style={screenStyle.container}>
      <FlatList
        data={popularMovies}
        renderItem={({item}) => (
          <Text style={{color: 'white'}}>{item.title}</Text>
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
