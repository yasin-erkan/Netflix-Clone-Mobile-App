import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SectionTitle from './sectionTitle';
import MovieCard from '../movies/movieCard';
import {SectionProps} from '../../models/ui/sectionProps';

const Section: React.FC<SectionProps> = ({data, title}) => {
  return (
    <View style={styles.container}>
      <SectionTitle title={title} />
      <FlatList
        data={data}
        renderItem={({item}) => <MovieCard movie={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
});

export default Section;
