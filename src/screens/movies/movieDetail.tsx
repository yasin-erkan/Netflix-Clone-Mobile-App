import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {screenStyle} from '../../styles/defaultScreenStyle';
import {AppDispatch, RootState} from '../../store/store';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getMovieDetail} from '../../store/actions/moviesActions';
import {addToMyList, addToWatchLater} from '../../store/slices/movieSlice';
import {IMAGE_BASE_URL} from '../../service/urls';
import MovieCard from '../../components/movies/movieCard';
import {MY_LIST, DOWNLOADS} from '../../utils/routes';

const {width, height} = Dimensions.get('window');

const MovieDetail: React.FC<any> = ({route}) => {
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();
  const movieId = route.params.movieId;
  const {movieDetailData, pending, popularMovies} = useSelector(
    (state: RootState) => state.movies,
  );
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(getMovieDetail(movieId));
  }, []);

  // Shuffle and get random movies for "You May Also Like"
  const getRandomMovies = () => {
    if (!popularMovies || popularMovies.length === 0) return [];
    const shuffled = [...popularMovies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  if (pending || !movieDetailData) {
    return (
      <View style={screenStyle.container}>
        <Text
          style={{
            color: 'gray',
            fontSize: 25,
            textAlign: 'center',
            marginTop: '75%',
          }}>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section with Backdrop */}
      <View style={styles.heroSection}>
        <ImageBackground
          source={{
            uri: `${IMAGE_BASE_URL}${movieDetailData.backdrop_path}`,
          }}
          style={styles.backdrop}
          resizeMode="cover">
          <View style={styles.gradientOverlay} />

          <TouchableOpacity style={styles.playButtonCenter}>
            <Text style={styles.playIcon}>▶</Text>
          </TouchableOpacity>

          <View style={styles.posterContainer}>
            <Image
              source={{
                uri: `${IMAGE_BASE_URL}${movieDetailData.poster_path}`,
              }}
              style={styles.poster}
              resizeMode="cover"
            />
          </View>

          {/* Movie Info Overlay */}
          <View style={styles.movieInfoOverlay}>
            <Text style={styles.title}>{movieDetailData.title}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>
                ⭐ {movieDetailData.vote_average?.toFixed(1)}/10
              </Text>
              <Text style={styles.releaseDate}>
                {(movieDetailData as any).release_date?.split('-')[0]}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <View style={styles.genreContainer}>
          {(movieDetailData as any).genres
            ?.slice(0, 3)
            .map((genre: any, index: number) => (
              <View key={index} style={styles.genreTag}>
                <Text style={styles.genreText}>{genre.name}</Text>
              </View>
            ))}
          {(movieDetailData as any).runtime && (
            <View style={styles.durationTag}>
              <Text style={styles.durationText}>
                ⏱ {Math.floor((movieDetailData as any).runtime / 60)}h{' '}
                {(movieDetailData as any).runtime % 60}m
              </Text>
            </View>
          )}
        </View>

        <View style={styles.overviewHeader}>
          <Text style={styles.sectionTitle}>Overview</Text>
          {/* Action Buttons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                dispatch(addToMyList(movieDetailData));
                navigation.navigate(MY_LIST as never);
              }}>
              <Text style={styles.actionIcon}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>👍</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                dispatch(addToWatchLater(movieDetailData));
                // Navigate to bottom tab first, then to Downloads
                navigation.getParent()?.navigate('BottomTab' as never);
                setTimeout(() => {
                  navigation.getParent()?.navigate(DOWNLOADS as never);
                }, 100);
              }}>
              <Text style={styles.actionIcon}>⬇</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.overview} numberOfLines={expanded ? undefined : 3}>
          {movieDetailData.overview}
        </Text>
        {movieDetailData.overview && movieDetailData.overview.length > 120 && (
          <TouchableOpacity
            onPress={() => setExpanded(!expanded)}
            style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              {expanded ? 'Show Less' : 'Read More'}
            </Text>
          </TouchableOpacity>
        )}

        {/* You May Also Like */}
        <Text style={styles.sectionTitle}>You May Also Like</Text>
        <FlatList
          data={getRandomMovies()}
          renderItem={({item}) => <MovieCard movie={item} isHorizontal />}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.similarMoviesContainer}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  heroSection: {
    height: height * 0.35,
  },
  backdrop: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    opacity: 0.9,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  playerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayerLabel: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  playButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    fontSize: 30,
    color: '#000',
    marginLeft: 4,
  },
  posterContainer: {
    position: 'absolute',
    left: 20,
    bottom: 10,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  playButtonCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -35}, {translateY: -35}],
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 30,
    color: '#000',
    marginLeft: 4,
  },
  movieInfoOverlay: {
    padding: 20,
    paddingLeft: 140,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  rating: {
    fontSize: 16,
    color: '#ffd700',
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3,
  },
  releaseDate: {
    fontSize: 16,
    color: '#ccc',
    fontWeight: '500',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3,
  },
  content: {
    padding: 20,
    paddingTop: 30,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 25,
    gap: 8,
    justifyContent: 'space-between',
  },
  genreTag: {
    backgroundColor: '#e50914',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  genreText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  durationTag: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#444',
  },
  durationText: {
    color: '#aaa',
    fontSize: 12,
    fontWeight: '600',
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 24,
    marginBottom: 10,
  },
  readMoreButton: {
    marginTop: 4,
    marginBottom: 20,
  },
  readMoreText: {
    color: '#e50914',
    fontSize: 15,
    fontWeight: '600',
  },
  duration: {
    fontSize: 16,
    color: '#ccc',
    fontWeight: '500',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 22,
    gap: 10,
    color: '#fff',
  },
  similarMoviesContainer: {
    paddingLeft: 20,
    gap: 15,
  },
  extraInfoContainer: {
    marginTop: 8,
    marginBottom: 25,
  },
  extraInfoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  extraInfoLabel: {
    color: '#888',
    fontSize: 14,
    marginRight: 8,
    fontWeight: '500',
  },
  extraInfoValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
export default MovieDetail;
