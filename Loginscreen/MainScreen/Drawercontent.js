import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LoginFF from './LoginFF';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {attemptprofileActions} from '../actions/userProfile';
const Drawercontent = ({navigation, attemptUserProfile, userData}) => {
  useEffect(() => {
    attemptUserProfile({
      user_id: 10073,
      extraData: async loginRespo => {
        console.log('userData', loginRespo);
      },
    });
  }, []);
  console.log('userData', userData);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.drawercontent}>
        <View style={styles.userinfo}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image
              source={{
                uri: userData[0]?.image,
              }}
            />
            <View style={{marginLeft: 15}}>
              <Title>{userData[0]?.first_name + userData[0]?.last_name}</Title>
              <Caption>{userData[0]?.company_name}</Caption>
              <Text>ID No. {userData[0]?.id}</Text>
              <Text style={{marginTop: 3}}>Phone No. {userData[0]?.phone}</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView>
        <Drawer.Section style={styles.drawersect}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )}
            label="Dashbord"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <AntDesign name="setting" color={color} size={size} />
            )}
            label="My Booking"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Entypo name="user" color={color} size={size} />
            )}
            label="My Profile"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Entypo name="log-out" color={color} size={size} />
            )}
            label="Logout"
            onPress={() => {
              navigation.navigate('home');
            }}
          />
        </Drawer.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = function (state) {
  return {
    ...state.userProfileReducer,
  };
};
export default connect(mapStateToProps, dispatch => ({
  attemptUserProfile: bindActionCreators(attemptprofileActions.start, dispatch),
}))(Drawercontent);

const styles = StyleSheet.create({
  drawercontent: {
    flex: 1,
  },
  userinfo: {
    paddingLeft: 20,
  },
  drawersect: {
    // marginTop:1
    marginBottom: 195,
  },
});
