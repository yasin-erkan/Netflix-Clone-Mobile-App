import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {screenStyle} from '../../styles/defaultScreenStyle';
import {AppDispatch, RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {IMAGE_BASE_URL} from '../../service/urls';
import {screenHeight, screenWidth} from '../../utils/constants';
import {getMovieDetail} from '../../store/actions/moviesActions';

const MovieDetail: React.FC = () => {
  const route = useRoute<any>();
  const dispatch: AppDispatch = useDispatch();
  const {movieDetailData} = useSelector((state: RootState) => state.movies);

  const movieId = route.params?.movieId;

  useEffect(() => {
    if (movieId) {
      console.log('Dispatching getMovieDetail for ID:', movieId);
      dispatch(getMovieDetail(movieId));
    }
  }, [movieId, dispatch]);

  // Debug
  console.log('MovieDetailData:', movieDetailData);
  console.log('Poster path:', movieDetailData?.poster_path);
  console.log(
    'Image URL:',
    movieDetailData?.poster_path
      ? `${IMAGE_BASE_URL}${movieDetailData.poster_path}`
      : 'No poster',
  );
  return (
    <View style={screenStyle.container}>
      {movieDetailData?.poster_path && (
        <Image
          source={{uri: `${IMAGE_BASE_URL}${movieDetailData.poster_path}`}}
          style={styles.image}
        />
      )}
      <View style={styles.movieInfo}>
        <Text style={styles.title}>{movieDetailData?.title}</Text>
        <Text style={styles.overview}>{movieDetailData?.overview}</Text>
        <Text style={styles.rating}>
          ⭐ {movieDetailData?.vote_average?.toFixed(1)}
        </Text>
        <Text style={styles.releaseDate}>
          Release: {movieDetailData?.release_date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.6,
    resizeMode: 'cover',
  },
  movieInfo: {
    padding: 20,
    backgroundColor: '#111',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overview: {
    color: '#ccc',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  rating: {
    color: '#e50914',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  releaseDate: {
    color: '#999',
    fontSize: 14,
  },
});
export default MovieDetail;
