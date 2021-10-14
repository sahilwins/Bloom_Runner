import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Directions} from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
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
            latitude: 30.7333,
            longitude: 76.7794,
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
            marginTop: 25,
          }}>
          <Text style={{color: 'purple', marginLeft: 50}}>Order1</Text>
          <Text style={{color: 'purple'}}>8am-10am</Text>
          <Entypo
            name="location"
            size={20}
            color={'purple'}
            style={{marginBottom: 2, marginLeft: 2}}
          />
          <Text style={{color: 'purple', marginRight: 50}}>4 Miles</Text>
        </View>

        <View
          style={{
            width: '98%',
            height: 1,
            backgroundColor: 'grey',
            alignSelf: 'center',
            marginBottom: 10,
          }}></View>
      </View>
      <View
        style={{
          height: '5%',
          width: '100%',
        }}>
        <View
          style={{
            // flex:1
            flexDirection: 'row',
          }}>
          <AntDesign
            name="gift"
            size={20}
            color={'black'}
            style={{marginLeft: 25}}
          />
          <View style={{marginBottom: 20}}>
            <Text style={{color: 'black', marginLeft: 10, fontSize: 15}}>
              order Id
            </Text>
            <Text
              style={{
                color: 'black',
                marginLeft: 10,
                marginTop: 7,
                fontSize: 13,
              }}>
              101135
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '98%',
            height: 1,
            backgroundColor: 'grey',
            alignSelf: 'center',
            marginBottom: 10,
          }}></View>
      </View>
      <View
        style={{
          height: '2%',
          width: '100%',
        }}></View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <SimpleLineIcons
          name="note"
          size={14}
          color={'black'}
          style={{marginLeft: 25}}
        />

        <View
          style={{marginLeft: 9, justifyContent: 'center', marginBottom: 12}}>
          <Text style={{fontSize: 13}}>Note For Driver</Text>
          <Text style={{marginTop: 9, fontSize: 12}}>
            Leave by door if not at home
          </Text>
          <Text style={{fontSize: 13}}>Delivery by 10am</Text>
        </View>
      </View>

      <View
        style={{
          width: '98%',
          height: 1,
          backgroundColor: 'grey',
          alignSelf: 'center',
          marginBottom: 10,
        }}></View>

      <View
        style={{
          height: '1%',
          width: '100%',
        }}></View>
      <View style={{flexDirection: 'row', marginLeft: 20}}>
        <Entypo
          name="location-pin"
          size={19}
          color="color"
          // style={{marginLeft:2}}
        />

        <View style={{marginLeft: 10, marginBottom: 10}}>
          <Text>153034,North Scottsdale Road</Text>
          <Text>Scottsdale,AZ,United States</Text>
        </View>
      </View>

      <View
        style={{
          width: '98%',
          height: 1,
          backgroundColor: 'grey',
          alignSelf: 'center',
          marginBottom: 10,
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 22,
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
          }}>
          To be Delivered
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="radio-button-off-sharp" size={40} color={'purple'} />
          <Fontisto name="angle-dobule-right" size={20} color={'purple'} />
          <Ionicons
            style={{marginRight: 10}}
            name="chevron-forward"
            size={40}
            color={'grey'}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            marginRight: 0,
          }}>
          Delivered
        </Text>
      </View>

      <View
        style={{
          width: '98%',
          height:1,
          backgroundColor: 'grey',
        }}></View>

         <View
        style={{
          width: '98%',
          height: 10,
          // backgroundColor: 'grey',
          alignSelf: 'center',
          marginBottom: 10,
        }}></View>
        <View>
<Text>
  hlo
</Text>
        </View>

<View
        style={{
          width: '98%',
          height:1,
          // backgroundColor: 'grey',
        }}></View>


  
        
       
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
