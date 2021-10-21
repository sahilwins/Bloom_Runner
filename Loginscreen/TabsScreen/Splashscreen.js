import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('home');
    }, 2000);
  }, []);
  const pic = require('../../assets/logo.png');
  return (
    <View style={{flex: 1}}>
      <View style={styles.nst}>
        <FastImage source={pic} style={{width: 300, height: 300}} />
      </View>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  nst: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
