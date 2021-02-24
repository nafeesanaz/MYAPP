import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';

export default class clothes extends React.Component {


  render() {
       return(
    <ScrollView style ={{backgroundColor:"#d5e7e8"}}>
    <View Style ={{ 
        flexDirection:"row",
        alignItems:"center",
        marginTop: 30,
        marginHorizontal: 20
    }}>
     
     <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/e1.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/e2.png')}
                resizeMode = "contain"
                />
    
                
    </View>

    <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/e3.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/e4.png')}
                resizeMode = "contain"
                />
    
                
    </View>

    <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/e5.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/e6.png')}
                resizeMode = "contain"
                />
    
                
    </View>

    <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/e7.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/e8.png')}
                resizeMode = "contain"
                />
    
                
    </View>



    
    </View> 
    </ScrollView>
       )}
}



