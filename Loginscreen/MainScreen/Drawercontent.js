import React from 'react';
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

const Drawercontent = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.drawercontent}>
        <View style={styles.userinfo}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image source={require('../../assets/logo.png')} />
            <View style={{marginLeft: 15}}>
              <Title>Kevin sharma</Title>
              <Caption> @Indian</Caption>
              <Text>ID No.997</Text>
              <Text style={{marginTop:3}}>phone No.997546637</Text>
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
            label="Home"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <AntDesign name="setting" color={color} size={size} />
            )}
            label="Setting"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Entypo name="user" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Entypo name="log-out" color={color} size={size} />
            )}
            label="LogOut"
            onPress={() => {
              navigation.navigate('home');
            }}
          />
        </Drawer.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Drawercontent;

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
