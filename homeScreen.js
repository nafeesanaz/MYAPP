import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, button, Screen } from 'react-native';

export default class homeScreen extends React.Component{
  render(){
    
        this.props.navigation.setOptions({
          headerBackTitle:'',
          headerShown: false,
 
        })

        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown: false,
   
          })
  
          this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown: false,
   
          })

    return(
      
    <View style={styles.container}>
       <Image 
          style={{ width : "100%", height: 300, borderRadius: 40/2}} 
          source = {require ('./assets/images/logo3.png')}
          resizeMode = "contain"
      />
      <View style={{marginTop: 10}}></View>
      <Text style = {{ fontSize: 16, fontWeight:'bold', color:'#2c3436', textAlign:'center', marginHorizontal: 40}} 
      >Welcome to Buy and sell! A platform where you can purchase or sell second hand Items.</Text>

      <View style = {{  flexDirection: 'row', margin: 5, paddingVertical: 10 }}> 
      <TouchableOpacity
        onPress={ () => this.props.navigation.navigate('Login')}
        style={{ backgroundColor: '#607D8B',padding: 10, width: 100, borderRadius: 30, marginHorizontal: 2}}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => this.props.navigation.navigate('Signup')}
        style={{ backgroundColor: '#607D8B',padding: 10, width: 100, borderRadius: 30, marginHorizontal: 2}}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => this.props.navigation.navigate('Shop')}
        style={{ backgroundColor: '#607D8B',padding: 10, width: 100, borderRadius: 30, marginHorizontal: 2}}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>SHOP</Text>
      </TouchableOpacity>
    </View>

        <Text style= {{textAlign:'center', fontSize: 15, fontWeight:'100'}}> Connect Account </Text>
               <View style={{flexDirection:'row', marginTop: 30}}>
                <View style={{height:40, width:40, borderRadius: 40/2, backgroundColor:'#607D8B', marginHorizontal: 10, alignItems:'center', justifyContent:'center'}}>
                <Text style= {{ fontSize: 25, fontWeight: 'bold', color:'#FFF'}}>f</Text>
                </View>
                
                <View style={{ height:40, width: 40, borderRadius: 40/2, backgroundColor: '#ab6565', marginHorizontal: 10, alignItems:'center', justifyContent:'center'}}>
                <Text style={{ fontSize:25, fontWeight: 'bold', color: '#FFF'}}>G</Text>
                </View>

                <View style={{ height: 40, width: 40, borderRadius:40/2, backgroundColor:'#5e274e', alignItems:'center', justifyContent:'center',marginHorizontal: 10}}>
                <Text style ={{ fontSize:25, fontWeight: 'bold', color: '#FFF'}}>IG</Text>
                </View>
                </View>
      
    </View>
    
    ); 
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5e7e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
