import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IMAGE_BASE_URL} from '../../service/urls';
import {MovieCardProps} from '../../models/ui/movieCardProps';
import {screenWidth} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
  const navigation = useNavigation<any>();
  const imageUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: movie.id})}
      style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} resizeMode="cover" />
      <Text numberOfLines={2} style={styles.title}>
        {movie.title}
      </Text>
      <Text style={styles.rating}>⭐ {movie.vote_average?.toFixed(1)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (screenWidth - 50) / 2,
    marginBottom: 20,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'left',
    paddingHorizontal: 2,
  },
  rating: {
    fontSize: 13,
    color: '#e50914',
    marginTop: 6,
    fontWeight: '700',
    paddingHorizontal: 2,
  },
});

export default MovieCard;
