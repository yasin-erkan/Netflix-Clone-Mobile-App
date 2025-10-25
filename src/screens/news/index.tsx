import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screenStyle} from '../../styles/defaultScreenStyle';

const MyList: React.FC = () => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <Text style={{fontSize: 30, color: 'white'}}>My List</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
export default MyList;
