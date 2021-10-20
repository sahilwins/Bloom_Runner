import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Forgot from './Forgortpass';
import BottomScreen from './BottomScreen';

import LoginFF from './LoginFF';

const Logo = ({text}) => {
  const pic = require('../../assets/logo.png');

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <Image source={pic} style={{marginLeft: 10}} />
        <Text>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();
const FirstScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        gestureEnabled: true,
      })}>
      <Stack.Screen component={Home} name="home" />

      <Stack.Screen component={LoginFF} name="LoginFF" />
      <Stack.Screen component={Forgot} name="Forgot" />
    </Stack.Navigator>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
