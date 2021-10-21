import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const Profilescreen = () => {
  const Data = [
    {
      name: 'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '25/10/2021',
      paid: 'pay Now',
    },
    {
      name: 'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '25/10/2021',
      paid: 'pay Now',
    },
    {
      name: 'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '25/10/2021',
      paid: 'pay Now',
    },
    {
      name: 'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '25/10/2021',
      paid: 'pay Now',
    },
  ];
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.toView}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/logo.png')}
          />
          <View style={{}}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: 19,
              }}>
              CONTICO SHIPPING AGENCY
            </Text>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: 19,
              }}>
              PRIVATE LIMITED
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>APPOINTMENTS CREATED FOR PAYMENTS</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
        }}>
        <View
          style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'dodgerblue',
          }}>
          <Text>CLICK HERE TO BOOK ANOTHER APPOINTMENT</Text>
          <Text>>>>>>>>></Text>
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <View style={styles.cardView}>
              <View style={styles.firstView}>
                <Image source={require('../../assets/B35D.png')} />
              </View>
              <View style={styles.secondView}>
                <View
                  style={{
                    paddingLeft: 25,
                    justifyContent: 'space-around',
                    flex: 1,
                  }}>
                  <Text>{item.name}</Text>
                  <Text>Shipping :{item.clinic}</Text>
                  <Text>Invoice no :{item.invoic}</Text>
                  <Text>Appointment Date{item.date}</Text>
                </View>
                <View style={styles.butonView}>
                  <TouchableOpacity>
                    <Text style={styles.payNow}>{item.paid}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 70,
    height: 60,
    // marginBottom:20,
  },
  cardView: {
    flex: 1,
    width: '100%',
    height: 150,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',

    marginVertical: 6,
  },
  firstView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondView: {
    flex: 2.5,
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  payNow: {
    textAlign: 'center',
  },
  butonView: {
    backgroundColor: 'skyblue',
    width: '100%',
  },
  toView: {
    justifyContent: 'center',
    paddingLeft: 20,
    width: '100%',
    height: 100,

    backgroundColor: 'lightblue',
  },
});
