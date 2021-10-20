import React from 'react'
import { StyleSheet, View,SafeAreaView} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import{
    Avatar,
    Title,
    caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

const Drawercontent = (props) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>

            <View style={styles.drawercontent}>
            <View style={styles.userinfo}>
                <View>
                    <Avatar.Image
                    source={require('../../assets/logo.png')}
                        
                    
                    />

                </View>
            </View>
            </View>

            </ScrollView>
            </SafeAreaView>
    )
}

export default Drawercontent

const styles = StyleSheet.create({
drawercontent:{
    flex:1,
},
userinfo:{
    paddingLeft:20,
}

})
