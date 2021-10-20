import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profilescreen from '../TabsScreen/Profilescreen';
import Screennotification from '../TabsScreen/Screennotification';
import Drawercontent from './Drawercontent';

const Drawer = createDrawerNavigator();

const LoginFF = () => {
  return (
    <Drawer.Navigator drawerContent={props=> <Drawercontent {...props}/>}>
      <Drawer.Screen name="Profile" component={Profilescreen} />
      <Drawer.Screen name="Current Bookings" component={Screennotification} />
    </Drawer.Navigator>
  );
};

export default LoginFF;

const styles = StyleSheet.create({});
