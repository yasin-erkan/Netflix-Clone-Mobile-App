import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabBarIconProps} from '../../models/ui/tabBarIconProps';
import {DOWNLOADS, HOME, MYLIST, SEARCH} from '../../utils/routes';

import {
  Home2,
  VideoPlay,
  SearchNormal,
  ArrowCircleDown2,
} from 'iconsax-react-nativejs';

const TabBarIcon: React.FC<TabBarIconProps> = ({size, color, focus, name}) => {
  switch (name) {
    case HOME:
      return (
        <Home2 size={size} color={color} variant={focus ? 'Bold' : 'Outline'} />
      );
    case MYLIST:
      return (
        <VideoPlay
          size={size}
          color={color}
          variant={focus ? 'Bold' : 'Outline'}
        />
      );
    case SEARCH:
      return (
        <SearchNormal
          size={size}
          color={color}
          variant={focus ? 'Bold' : 'Outline'}
        />
      );
    case DOWNLOADS:
      return (
        <ArrowCircleDown2
          size={size}
          color={color}
          variant={focus ? 'Bold' : 'Outline'}
        />
      );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default TabBarIcon;
