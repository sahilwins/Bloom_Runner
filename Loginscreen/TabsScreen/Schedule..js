import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Mapp from '../MainScreen/Mapp';

const Schedule = ({navigation}) => {
  // return(
  //   <View style={{flexDirection:'row',}}>
  //     <Text>Route</Text>
  //     <Text>Map</Text>
  //   </View>
  // )

  const Data = [
    {
      time: '8am-9pm',
      orderid: '101135',
      message: ' leave by door if not at home  Delivery by 10am',
      location: '15034, North Scottsdale Road, Scottsdale, AZ, United States',
      order: 1,
    },
    {
      time: '8am-9pm',
      orderid: '101135',
      message: ' leave by door if not at home  Delivery by 10am',
      location: '15034, North Scottsdale Road, Scottsdale, AZ, United States',
      order: 2,
    },
    {
      time: '8am-9pm',
      orderid: '101135',
      message: ' leave by door if not at home  Delivery by 10am',
      location: '15034, North Scottsdale Road, Scottsdale, AZ, United States',
      order:'3'
    },
    {
      time: '8am-9pm',
      orderid: '101135',
      message: ' leave by door if not at home  Delivery by 10am',
      location: '15034, North Scottsdale Road, Scottsdale, AZ, United States',
      order:'4'
    },
    {
      time: '8am-9pm',
      orderid: '101135',
      message: ' leave by door if not at home  Delivery by 10am',
      location: '15034, North Scottsdale Road, Scottsdale, AZ, United States',
      order:'5'
    },
    {
      time: '8am-9pm',
      orderid: '101135',
      message: ' leave by door if not at home  Delivery by 10am',
      location: '15034, North Scottsdale Road, Scottsdale, AZ, United States',
      order:'6'
    },
  ];

  const CardItem = ({item}) => {
    return (
      <View style={styles.cardcontainer}>
        <View style={{flexDirection: 'row', marginLeft: 40}}>
          <Text style={{marginTop: 30, color: 'purple', fontSize: 13}}>
            Order {item.order}
          </Text>
          <Text
            style={{
              marginLeft: 25,
              marginTop: 30,
              color: 'purple',
              fontSize: 13,
            }}>
            {item.time}
          </Text>
          <Entypo
            name="location"
            size={26}
            color={'purple'}
            style={{marginTop: 28, marginLeft: 25}}
          />
          <Text
            style={{
              marginLeft: 25,
              marginTop: 30,
              color: 'purple',
              fontSize: 13,
            }}>
            4 Miles
          </Text>
        </View>
        <View style={{flex: 1, marginTop: 20, alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign name="gift" size={15} color={'grey'} />
            <Text style={{fontSize: 13, marginLeft: 10}}>Order Id</Text>
          </View>
          <Text style={{marginTop: 5, marginLeft: 26, fontSize: 10}}>
            101135
          </Text>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <SimpleLineIcons name="note" size={13} color={'grey'} />
            <Text style={{fontSize: 12, marginLeft: 10}}>Note For Driver </Text>
          </View>

          <Text style={{marginTop: 5, fontSize: 10, marginLeft: 20}}>
            Leave by door if not at home
          </Text>
          <Text style={{fontSize: 10, marginLeft: 20}}>Delivery by 10am</Text>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Entypo
              name="location-pin"
              size={16}
              color="color"
              marginLeft={2}
            />
            <Text style={{fontSize: 10, marginLeft: 5}}>
              15034,North scottdale road,
            </Text>
          </View>
          <Text style={{fontSize: 10, marginLeft: 22}}>
            scottdale,AZ,United States
          </Text>
        </View>
        <View style={{width:1,height:15,alignSelf:'center',backgroundColor:'black'}}>

        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          <Text
            style={{
              borderWidth: 0.5,
              marginRight: 20,
              paddingHorizontal: 10,
              borderRadius: 3,
              marginTop: 20,
            }}>
            Route
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Mapp')}
          style={{flexDirection: 'row'}}>
          <Text
            style={{
              borderWidth: 0.5,
              paddingHorizontal: 15,
              borderRadius: 3,
              marginTop: 20,
              // flexDirection: 'row',
            }}>
            Map
          </Text>
        </TouchableOpacity>
        
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={Data}
          renderItem={({item}) => <CardItem item={item} />}
        />
      </View>
      
    </View>
  );
};
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardcontainer: {
    alignSelf: 'center',
    width: deviceWidth - 25,
    height: 250,
    marginTop: 40,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'grey',
    // flexDirection: 'coloumn',
    justifyContent: 'center',
  },
});

export default Schedule;
