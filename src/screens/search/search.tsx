import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screenStyle} from '../../styles/defaultScreenStyle';

const Search: React.FC = () => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <Text>Search</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
