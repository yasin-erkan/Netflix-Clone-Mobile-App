import React, {memo, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SectionTitle from './sectionTitle';
import MovieCard from '../movies/movieCard';
import {SectionProps} from '../../models/ui/sectionProps';
import {useNavigation} from '@react-navigation/native';
import {MOVIELIST} from '../../utils/routes';
import {CATEGORIES} from '../../utils/constants';

type RootStackParamList = {
  'Movie List': {
    category: CATEGORIES;
  };
};

const Section: React.FC<SectionProps> = ({data, title, category}) => {
  const navigation = useNavigation<any>();
  const handleNavigate = useCallback(() => {
    navigation.navigate(MOVIELIST, {category: category});
  }, [navigation, category]);

  return (
    <View style={styles.container}>
      <SectionTitle title={title} onPress={handleNavigate} />
      <FlatList
        data={data}
        renderItem={({item}) => <MovieCard movie={item} isHorizontal={true} />}
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

export default memo(Section);
