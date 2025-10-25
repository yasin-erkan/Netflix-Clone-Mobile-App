import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Accounts from '../screens/accounts';
import BottomTabNAvigator from './bottomTabNavigator';
import {
  ACCOUNTS,
  BOTTOMTAB,
  MOVIE_DETAIL,
  MOVIELIST,
  MY_LIST,
} from '../utils/routes';
import MovieList from '../screens/movies/movieList';
import MovieDetail from '../screens/movies/movieDetail';
import MyList from '../screens/my list';

const RootNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={BOTTOMTAB}
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={BOTTOMTAB}
        component={BottomTabNAvigator}
      />
      <Stack.Screen name={ACCOUNTS} component={Accounts} />
      <Stack.Screen name={MOVIELIST} component={MovieList} />
      <Stack.Screen name={MOVIE_DETAIL} component={MovieDetail} />
      <Stack.Screen name={MY_LIST} component={MyList} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
