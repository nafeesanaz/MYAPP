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
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/f1.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/f2.png')}
                resizeMode = "contain"
                />
    
                
    </View>

    <View style ={{flexDirection: 'row', margin: 2}}>  
    <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('chair')} >              
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/f3.png')}
                resizeMode = "contain"
                />
    </TouchableNativeFeedback>            
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/f5.png')}
                resizeMode = "contain"
                />
    
                
    </View>

    <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/f6.png')}
                resizeMode = "contain"
                />
            
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/f8.png')}
                resizeMode = "contain"
                />
 
                
    </View>

    <View style ={{flexDirection: 'row', margin: 2}}>  
    <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('cabinet')} >                 
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/f7.png')}
                resizeMode = "contain"
                />
    </TouchableNativeFeedback>
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/f4.png')}
                resizeMode = "contain"
                />
    
                
    </View>



    
    </View> 
    </ScrollView>
       )}
}


