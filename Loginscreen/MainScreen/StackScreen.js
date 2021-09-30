import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import BottomScreen from './BottomScreen';

const Stack = createStackNavigator();
const FirstScreen = () => {
  return (
    <Stack.Navigator
    initialRouteName=''
    screenOptions={({route,navigation})=>({
      headerShown:false ,
      gestureEnabled: true

    })}
    
    >
      <Stack.Screen component={Home} name="home" />
      <Stack.Screen component={BottomScreen} name="BottomScreen" />
    </Stack.Navigator>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
