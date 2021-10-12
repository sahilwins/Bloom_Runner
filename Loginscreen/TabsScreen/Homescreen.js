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
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const DATA = [
  {
    id: 1,
    title: 'DewDropFlorist',
    pic: require('../../assets/Group147.png'),
  },
  {
    id: 2,
    title: 'Arena Flowers',
    pic: require('../../assets/Group.png'),
  },
  {
    id: 3,
    title: 'Lageracropt',
    pic: require('../../assets/B35D.png'),
  },
];

const Homescreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const RenderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'white' : '';
    // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'purple' : 'black';
    const Item = ({item, onPress, backgroundColor, textColor}) => (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgroundColor]}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={item.pic} style={{width: 100, height: 110}} />
          <Text style={[styles.title, textColor]}>{item.title}</Text>
          <Text style={{fontSize: 10, color: 'grey', textAlign: 'center'}}>
            17NMainst.ArenaFlowers,MI 49341,United States
          </Text>
        </View>
        <View
          style={{
            height: 155,
            width: 1,
            backgroundColor: 'black',
            alignSelf: 'center',
            marginLeft: 5,
          }}
        />
        <View
          style={{flex: 2, backgroundColor: 'white', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign name="gift" size={15} color={'grey'} />
            <Text style={{fontWeight: 'bold', marginLeft: 10, fontSize: 11}}>
              order Id
            </Text>
          </View>
          <Text style={{marginTop: 3, marginLeft: 25, fontSize: 10}}>
            101135
          </Text>

          <View style={{flexDirection: 'row', marginTop: 15}}>
            
              <SimpleLineIcons name="note" size={13} color={'grey'}  />
            
            <Text
              style={{
                fontWeight: 'bold',
                // marginTop: 2,
                marginLeft: 10,
                fontSize: 11,
              }}>
              Note for Driver
            </Text>
          </View>

          <Text style={{marginLeft: 25, fontSize: 10}}>
            Leave by home if not at home
          </Text>
          <Text style={{marginLeft: 25, fontSize: 10}}>Delivery by 10am</Text>
          <Text style={{marginLeft: 25, marginTop: 7, fontSize: 10}}></Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            <Entypo name="location-pin" size={20} color="color" />
            <Text style={{fontSize: 10}}>
              {' '}
              Scottdale,AZ,United staes 16035,North Scottdales Road,
            </Text>
          </View>
        </View>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 15,
          // borderBottomWidth:0.5
          // borderBottomColor: 'grey'
        }}>
        <View style={{borderBottomWidth: 0.5}}>
          <Text>15-08-2020</Text>
        </View>
        <View style={{borderBottomWidth: 0.5}}>
          <Text>15-08-2020</Text>
        </View>
        <View style={{borderBottomWidth: 0.5}}>
          <Text>15-08-2020</Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 20,
          // alignItems:'center'
        }}>
        <Text
          style={{
            marginLeft: 10,
            width: '20%',
            borderWidth: 0.5,
            textAlign: 'center',
            paddingVertical: 5,
            borderRadius: 5,
          }}>
          {' '}
          8am-10am{' '}
        </Text>

        <Text style={styles.tac}>10am-12am</Text>

        <Text style={styles.tac}>12pm-2pm</Text>
        <Text style={styles.act}>All</Text>
      </View>

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
    marginTop: StatusBar.currentHeight || 3,
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 1,
    width: '100%',
    height: 200,
    flexDirection: 'row',
    // marginTop: 100,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
  },
  tac: {
    borderWidth: 0.5,
    textAlign: 'center',
    paddingVertical: 5,
    marginLeft: 20,
    width: '20%',
    borderRadius: 5,
  },
  act: {
    borderWidth: 0.5,
    textAlign: 'center',
    paddingVertical: 5,
    width: '10%',
    borderRadius: 5,
    marginRight: 20,
    
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
