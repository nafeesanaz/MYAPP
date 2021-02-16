import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, button, Screen } from 'react-native';

export default class homeScreen extends React.Component{
  render(){
    return(
      
    <View style={styles.container}>
       <Image 
          style={{ width : "100%", height: 300}} 
          source = {require ('./assets/images/logo3.png')}
          resizeMode = "contain"
      />

      <Text style = {{ fontSize: 40, color: '#486061', fontFamily: 'sans-serif-light', fontWeight: 'bold'}} >Hello!</Text>
      <Text style = {{ fontSize: 16, color:'#050505', textAlign:'center', marginHorizontal: 20}} 
      >Welcome to Buy and sell! A platform where you can purchase or sell second hand Items.</Text>

      <View style = {{  flexDirection: 'row', margin: 5, paddingVertical: 10 }}> 
      <TouchableOpacity
        onPress={ () => this.props.navigation.navigate('login')}
        onPress={() => alert('Hello world!')}
        style={{ backgroundColor: '#607D8B',padding: 10, width: 100, borderRadius: 30, marginHorizontal: 2}}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Hello world!')}
        style={{ backgroundColor: '#607D8B',padding: 10, width: 100, borderRadius: 30, marginHorizontal: 2}}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Hello world!')}
        style={{ backgroundColor: '#607D8B',padding: 10, width: 100, borderRadius: 30, marginHorizontal: 2}}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>SHOP</Text>
      </TouchableOpacity>
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
