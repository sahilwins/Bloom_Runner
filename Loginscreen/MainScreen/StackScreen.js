import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import BottomScreen from './BottomScreen';
import Mapp from './Mapp';

const Logo = ({text}) => {
  const pic = require('../../assets/logo25.png');

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
      })}
      // screenOptions={{
      //   headerTitle: false,
      //   headerBackground: props => <Logo {...props} text="" />,
      //   headerShown: true,
      //   title:true

      // }}
    >
      <Stack.Screen component={Home} name="home" />
      <Stack.Screen component={BottomScreen} name="BottomScreen" />
      <Stack.Screen
        component={Mapp}
        name="Mapp"
        options={{
          headerBackground: props => <Logo {...props} text="" />,
          headerShown: true,
          title: true,
          headerTitle: false,
          headerLeft: null
        
        }}
      />
    </Stack.Navigator>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
