import React, {memo} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {IMAGE_BASE_URL} from '../../service/urls';
import {MovieCardProps} from '../../models/ui/movieCardProps';
import {screenHeight, screenWidth} from '../../utils/constants';

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
  console.log(movie);
  const imageUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;

  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} resizeMode="cover" />
      <Text numberOfLines={2} style={styles.title}>
        {movie.title}
      </Text>
      <Text style={styles.rating}>⭐ {movie.vote_average?.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    maxWidth: screenWidth / 2,
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: 130,
    height: 195,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 13,
    color: '#fff',
    marginTop: 8,
    fontWeight: '600',
    lineHeight: 18,
  },
  rating: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
    fontWeight: '500',
  },
});

export default memo(MovieCard);
