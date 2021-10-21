import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profilescreen from '../TabsScreen/Profilescreen';
import Screennotification from '../TabsScreen/Screennotification';
import Drawercontent from './Drawercontent';

const Drawer = createDrawerNavigator();

const LoginFF = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Drawercontent {...props} />}>
      <Drawer.Screen
        name="profile"
        component={Profilescreen}
        options={{
          title: false,
          headerBackground: props => (
            <SafeAreaView
              style={{
                flex: 1,
                backgroundColor:'purple',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color:'white',fontSize:19,fontWeight:'bold'}}>CMC Patient Portal</Text>
            </SafeAreaView>
          ),
        }}
      />
      <Drawer.Screen name="Current Bookings" component={Screennotification} />
    </Drawer.Navigator>
  );
};

export default LoginFF;

const styles = StyleSheet.create({});
