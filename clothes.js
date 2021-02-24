import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableNativeFeedback, Image} from 'react-native';

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
     <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('clothesinfo')} >                   
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/jjeans.png')}
                resizeMode = "contain"
                />
      </TouchableNativeFeedback>
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/pants.png')}
                resizeMode = "contain"
                />
    
                
    </View>

    <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/sweater.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/blue.png')}
                resizeMode = "contain"
                />
    
                
    </View>

    <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/gray.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/check.png')}
                resizeMode = "contain"
                />
    
                
    </View>

    <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/white.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/conv.png')}
                resizeMode = "contain"
                />
    
                
    </View>



    
    </View> 
    </ScrollView>

       )}
}



