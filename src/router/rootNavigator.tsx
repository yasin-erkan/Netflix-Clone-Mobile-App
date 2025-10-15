import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Accounts from '../screens/accounts';
import BottomTabNAvigator from './bottomTabNavigator';
import {ACCOUNTS, BOTTOMTAB, MOVIELIST} from '../utils/routes';
import MovieList from '../screens/movies/movieList';

interface Props {}

const RootNavigator: React.FC<Props> = () => {
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
        name={ACCOUNTS}
        component={Accounts}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={BOTTOMTAB}
        component={BottomTabNAvigator}
      />
      <Stack.Screen name={MOVIELIST} component={MovieList} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
