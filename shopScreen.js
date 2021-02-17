import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
//import{ Picker} from 'react-native-community/picker'
import {ScrollView} from 'react-native'


export default class shopScreen extends React.Component{
    state = {
        Location: "Location"
    }

    render(){
        return(
        <ScrollView style ={{backgroundColor:"#FFF"}}>
            <View Style ={{ 
                flexDirection:"row",
                alignItems:"center",
                marginTop: 40,
                marginHorizontal: 20
            }}>
            

            <View style = {{  flexDirection: 'row', margin: 5, paddingVertical: 10 }}> 
                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('clothes')}
                    style={{ backgroundColor: '#607D8B',padding: 10, width: 80, borderRadius: 30, marginHorizontal: 2}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>clothes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('Signup')}
                    style={{ backgroundColor: '#607D8B',padding: 10, width: 100, borderRadius: 30, marginHorizontal: 2}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>electronics</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('Shop')}
                    style={{ backgroundColor: '#607D8B',padding: 10, width: 80, borderRadius: 30, marginHorizontal: 2}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>furniture</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('Shop')}
                    style={{ backgroundColor: '#607D8B',padding: 10, width: 80, borderRadius: 30, marginHorizontal: 2}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>jewellery</Text>
                </TouchableOpacity>
            </View>

            <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/bracelet.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/shirt.png')}
                resizeMode = "contain"
                />
                
            </View>

            <View style ={{flexDirection: 'row', margin: 2}}>                
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/pods.png')}
                resizeMode = "contain"
                />
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/Jeans.png')}
                resizeMode = "contain"
                />
                
            </View>

            <View style ={{flexDirection: 'row', margin: 2}}>   
                  
                <Image
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/Sofa.png')}
                resizeMode = "contain"
                />
          
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/ring.png')}
                resizeMode = "contain"
                />
                
            </View>

            </View>

            

            
        </ScrollView>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d5e7e8',
      
    },
  });
  