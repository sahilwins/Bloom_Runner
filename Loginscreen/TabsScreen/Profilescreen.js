import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const Profilescreen = () => {
  const Data = [
    {
      name:   'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '25/10/2021',
    },
    {
      name:   'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '25/10/2021',
    },
    {
      name:   'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '25/10/2021',
    },
    {
      name:   'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '25/10/2021',
    },
    {
      name:   'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '25/10/2021',
    },
    {
      name:   'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '24/1/2021',
    },
    {
      name:   'Contico shipping agency',
      clinic: 'product custom ',
      invoic: 'W3557932',
      date: '22/11/2021',
    },
  ];
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {/* <Text style={{textAlign: 'center', fontSize: 45}}>Profile Screen</Text> */}

      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                width: '100%',
                height: 200,
                // justifyContent: 'center',
                // alignItems: 'center',
                // backgroundColor:'red'
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>

              <View
                style={{
                  flex: 3,
                  backgroundColor: '#1e90ff',
                  height: 10,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent:'center'
                }}>
                <Text>{item.name}</Text>
                <Text>{item.clinic}</Text>
                <Text>{item.invoic}</Text>
                <Text>{item.date}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({});
