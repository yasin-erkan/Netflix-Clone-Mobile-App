import React from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../store/store';
import {removeFromMyList} from '../../store/slices/movieSlice';
import MovieCard from '../../components/movies/movieCard';

const MyList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {myList} = useSelector((state: RootState) => state.movies);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorite Movies</Text>
      {myList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your list is empty</Text>
          <Text style={styles.emptySubtext}>
            Add movies from the detail page
          </Text>
        </View>
      ) : (
        <FlatList
          numColumns={2}
          data={myList}
          renderItem={({item}) => (
            <MovieCard
              movie={item}
              showRemoveButton={true}
              onRemove={() => dispatch(removeFromMyList(item.id))}
            />
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#888',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
export default MyList;
