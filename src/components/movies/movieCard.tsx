import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IMAGE_BASE_URL} from '../../service/urls';
import {MovieCardProps} from '../../models/ui/movieCardProps';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MOVIE_DETAIL} from '../../utils/routes';

type RootStackParamList = {
  [MOVIE_DETAIL]: {movieId: number};
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MovieCard: React.FC<MovieCardProps> = ({movie, isHorizontal = false}) => {
  const imageUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MOVIE_DETAIL, {movieId: movie.id})}
      activeOpacity={0.6}
      style={isHorizontal ? styles.horizontalContainer : styles.container}>
      <Image
        source={{uri: imageUrl}}
        style={isHorizontal ? styles.horizontalImage : styles.image}
        resizeMode="cover"
      />
      <Text
        numberOfLines={2}
        style={isHorizontal ? styles.horizontalTitle : styles.title}>
        {movie.title}
      </Text>
      <Text style={isHorizontal ? styles.horizontalRating : styles.rating}>
        ⭐ {movie.vote_average?.toFixed(1)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Vertical layout (Movie List)
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#2a2a2a',
  },
  title: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
    marginHorizontal: 12,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'left',
  },
  rating: {
    fontSize: 12,
    color: '#ffd700',
    marginTop: 6,
    marginBottom: 12,
    marginHorizontal: 12,
    fontWeight: '500',
  },
  // Horizontal layout (Home)
  horizontalContainer: {
    width: 110,
    marginRight: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  horizontalImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#2a2a2a',
  },
  horizontalTitle: {
    fontSize: 13,
    color: '#fff',
    marginTop: 8,
    marginHorizontal: 8,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'left',
  },
  horizontalRating: {
    fontSize: 11,
    color: '#ffd700',
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 8,
    fontWeight: '500',
  },
});

export default MovieCard;
