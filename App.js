import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './Loginscreen/MainScreen/StackScreen';
// import BottomScreen from './Loginscreen/MainScreen/BottomScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
      {/* <BottomScreen/> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

