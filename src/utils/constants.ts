import {Dimensions} from 'react-native';

const API_KEY = '7e39d5f15d883d5e22577acfa82344b7';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM5ZDVmMTVkODgzZDVlMjI1NzdhY2ZhODIzNDRiNyIsIm5iZiI6MTc1MjMyMzM0Ny4xMzMsInN1YiI6IjY4NzI1NTEzOTJiY2M0YmFkZTZlOWY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3_1NM9Pv3IZxz69gS-dVRw0QRCasUnkVJqPCeDbBwM';

enum CATEGORIES {
  POPULAR = 'popular',
  TOPRATED = 'topRated',
  NOWPLAYING = 'nowPlaying',
  UPCOMING = 'upcoming',
}

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export {API_KEY, TOKEN, CATEGORIES, screenHeight, screenWidth};
