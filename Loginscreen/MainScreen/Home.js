import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {
  const iimage = require('../../assets/logo.png');
  const idea = require('../../assets/logo.png');
  return (
    <SafeAreaView style={styles.inst}>
      {/* <FastImage
        style={{width: 100, height: 200}}
        source={idea}
        resizeMode={FastImage.resizeMode.contain}
      /> */}
      <View>
        <FastImage source={iimage} style={{width: 200, height: 200}} />
      </View>
      <Text
        style={{
          color: 'purple',
          fontWeight: 'bold',
          marginTop: 60,
          fontSize: 30,
        }}>
        CONTICO APP
      </Text>
      <View
        style={{
          width: '80%',
          height: 40,
          borderWidth: 0.5,
          paddingHorizontal: 10,
          justifyContent: 'center',
          borderColor: '#9B9B9B',
          borderRadius: 20,
          marginTop: 20,
        }}>
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder=" Email"
        />
      </View>
      <View
        style={{
          width: '80%',
          height: 40,
          borderWidth: 0.5,
          paddingHorizontal: 10,
          alignItems: 'center',
          borderColor: '#9B9B9B',
          flexDirection: 'row',
          borderRadius: 20,
          marginTop: 15,
        }}>
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder="password"
          secureTextEntry
        />

        {/* <FontAwesome5 name="eye-slash" size={15} color={'grey'} /> */}
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Forgot');
        }}
        style={styles.flowfassword}>
        <Text
          style={{fontSize: 20, color: 'black', justifyContent: 'flex-end'}}>
          Forgot Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BottomScreen');
        }}
        style={styles.flow}>
        <Text style={{fontSize: 20, color: 'white'}}>login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  inst: {
    // backgroundColor:'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flow: {
    // flex:1,
    // justifyContent:'center',

    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    fontSize: 40,
    borderRadius: 20,
    height: 40,
  },
  flowfassword: {
    // flex:1,
    justifyContent: 'center',
    marginTop: 20,
    width: '80%',
    fontSize: 40,
    borderRadius: 20,
    height: 40,
  },
});
