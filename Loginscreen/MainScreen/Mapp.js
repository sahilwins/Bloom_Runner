import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import {Directions} from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Mapp from '../MainScreen/'

const Mapp = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'grey',
            marginRight: 20,
            paddingHorizontal: 10,
            borderRadius: 3,
          }}>
          <Text>Route</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            paddingHorizontal: 15,
            borderRadius: 3,
            // margin: 20,
          }}>
          <Text>Map</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <View
        style={{
          height: 300,
          width: '100%',
          backgroundColor: 'grey',
        }}

        // style={{flex: 1, width: 50, height: 50, marginTop: 1}}>
      >
        <MapView
          //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0115,
            longitudeDelta: 0.0123,
          }}></MapView>
      </View>
      <View
        style={{
          height: '8%',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            marginTop:25
          }}>
          <Text style={{color: 'purple',marginLeft:50}}>Order1</Text>
          <Text style={{color: 'purple'}}>8am-10am</Text>
          <Entypo
            name="location"
            size={26}
            color={'purple'}
            style={{  marginBottom:2, marginLeft: 2}}/>
          <Text style={{color: 'purple', marginRight:50}}>4 Miles</Text>
        </View>
        
        <View
          style={{
            width: '98%',
            height: 1,
            backgroundColor: 'grey',
            alignSelf: 'center',
            marginBottom:10
          }}></View>
      </View>
      <View
        style={{
          height: '8%',
          width: '100%',
        }}>
        <View
          style={{
            flex:1
          
          }}>
          <Text style={{color: 'black',marginLeft:30,marginBottom:5,fontSize:17}}>order Id</Text>
          <AntDesign name="gift" size={19} color={'grey'}  marginBottom={5}/>

          <Text style={{color: 'black',marginLeft:30,marginBottom:5}}>101135</Text>
         
        </View>
        
        <View
          style={{
            width: '98%',
            height: 1,
            backgroundColor: 'grey',
            alignSelf: 'center',
            marginBottom:10
          }}></View>
      </View>
    </View>
  );
};

export default Mapp;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // marginTop: 20,
    height: 300,
    borderColor: 'grey',
  },
});
