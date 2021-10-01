import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Arena Flowers',
    pic: require('../../assets/Group147.png'),
  },
  {
    id: 2,
    title: 'Arena Flowers',
    pic: require('../../assets/Group.png'),
  },
  {
    id: 3,
    title: 'Arena Flowers',
    pic: require('../../assets/Group.png'),
  },
];

const Homescreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const RenderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    const Item = ({item, onPress, backgroundColor, textColor}) => (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgroundColor]}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={item.pic} style={{width: 100, height: 100}} />
          <Text style={[styles.title, textColor]}>{item.title}</Text>
        </View>
        <View style={{flex: 2}}></View>
      </TouchableOpacity>
    );
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
});

export default Homescreen;

// import React from 'react';
// import {StyleSheet, Text, View,SafeAreaView, Image,FlatList,StatusBar} from 'react-native';

// const Data=[
//     {
//           id :1,
//             title: 'first Item',
//     },
//     {
//                 id: 2,
//                 title: 'second Item'
//      },

//             {
//                 id:3,
//                 title: 'third Item'

//             },
//         ];
//          const Item =({title})=>(
//              <View style={styles.item}>
//                  <Text style={styles.title}>{title}</Text>
//              </View>
//          )

// const Homescreen = () => {
//     const renderItem=({item})=>(
//         <Item tittle={item.title}/>
//     )

//   return (
//     <SafeAreaView style={{flex: 1}}>
//         <FlatList
//         data={Data}
//         renderItem={renderItem}
//         keyExtractor={item=> item.id}
//         />
//       <Image
//         // style={{height:'50%', width:'80%'}}
//         source={require('../../assets/Group.png')}
//       />
//     </SafeAreaView>
//   );
// };

// export default Homescreen;

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//       },
//       item: {
//         backgroundColor: '#f9c2ff',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//       },
//       title: {
//         fontSize: 32,
//       },
//     });
