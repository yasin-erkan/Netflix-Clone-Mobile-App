import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Accounts from '../screens/accounts';
import BottomTabNAvigator from './bottomTabNavigator';
import {ACCOUNTS, BOTTOMTAB} from '../utils/routes';

interface Props {}

const RootNavigator: React.FC<Props> = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={BOTTOMTAB}>
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
    </Stack.Navigator>
  );
};

export default RootNavigator;
