import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const Profilescreen = () => {
  const Data = [
    {
      name: 'hello',
    },
  ];
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 45}}>Profile Screen</Text>

      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({});
