import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from '../TabsScreen/Homescreen';
import Profilescreen from '../TabsScreen/Profilescreen';
import Schedule from '../TabsScreen/Schedule.';
import Screennotification from '../TabsScreen/Screennotification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const LogoTitle = ({text}) => {

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        
      <Text>{text}</Text>
    </SafeAreaView>
  );
};
const BottomScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: false,
        headerBackground: props => <LogoTitle {...props} text="" />,
        headerShown: true,
        title:false
      }}>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MySchedule"
        component={Schedule}
        options={{
          tabBarLabel: 'my schedule',
          tabBarIcon: ({color, size}) => (
            <Entypo name="clock" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Screennotification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={Profilescreen}
        options={{
          tabBarLabel: 'My profile',
          tabBarIcon: ({color, size}) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomScreen;

const styles = StyleSheet.create({});

// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const BottomScreen = () => {
//     return (
//         <View>
//             <Text></Text>
//         </View>
//     )
// }

// export default BottomScreen

// const styles = StyleSheet.create({})
