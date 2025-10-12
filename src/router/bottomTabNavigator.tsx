import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/home';
import News from '../screens/news';
import Search from '../screens/search/search';
import Downloads from '../screens/downloads/downloads';
import {HOME, NEWS, SEARCH, DOWNLOADS} from '../utils/routes';
import TabBarIcon from '../components/router/tabBarIcon';

const BottomTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: 'black',
        },
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: 'white',

        tabBarIcon: ({size, focused, color}) => (
          <TabBarIcon
            name={route.name}
            color={color}
            size={size}
            focus={focused}
          />
        ),
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={NEWS} component={News} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
