import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Schedule = () => {
  // return(
  //   <View style={{flexDirection:'row',}}>
  //     <Text>Route</Text>
  //     <Text>Map</Text>
  //   </View>
  // )
  return (
    <View style={{flex: 1}}>
      <Text> Route</Text>
      <Text>Map</Text>
      <View style={styles.cardcontainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 30, color: 'purple'}}>order 1</Text>
          <Text style={{marginLeft: 25, marginTop: 30, color: 'purple'}}>
            8am-10am
          </Text>
          <Entypo
            name="location"
            size={26}
            color={'purple'}
            style={{marginTop: 28, marginLeft: 25}}
          />
          <Text style={{marginLeft: 25, marginTop: 30, color: 'purple'}}>
            4 Miles
          </Text>
          <Text style={{marginLeft: 25, marginTop: 30, color: 'purple'}}>
            4 Miles
          </Text>
        </View>
        <View style={{flex: 1, backgroundColor: ''}}>
          <Text>Order Id</Text>
        </View>
      </View>
    </View>
  );
};
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardcontainer: {
    alignSelf: 'center',
    width: deviceWidth - 25,
    // backgroundColor: '',
    height: '80%',
     marginTop:40,
    borderRadius: 10,

    borderWidth: 0.5,
    borderColor: 'grey',
    // flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Schedule;
