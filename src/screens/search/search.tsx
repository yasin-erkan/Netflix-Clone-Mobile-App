import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppDispatch, RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieSearch} from '../../store/actions/moviesActions';
import MovieCard from '../../components/movies/movieCard';

const Search: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const {searchResults, pending} = useSelector(
    (state: RootState) => state.movies,
  );

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.length > 2) {
      dispatch(getMovieSearch(text));
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search movies..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {pending ? (
        <Text style={styles.loadingText}>Searching...</Text>
      ) : searchResults && searchResults.length > 0 ? (
        <FlatList
          numColumns={2}
          data={searchResults}
          renderItem={({item}) => <MovieCard movie={item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.resultsContainer}
        />
      ) : searchQuery.length > 2 ? (
        <Text style={styles.noResults}>No results found</Text>
      ) : (
        <Text style={styles.placeholderText}>Start typing to search...</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchInput: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 15,
    margin: 20,
    marginTop: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  loadingText: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  noResults: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  resultsContainer: {
    paddingHorizontal: 10,
  },
});

export default Search;
