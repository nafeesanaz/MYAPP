import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableNativeFeedback,TouchableOpacity, Image} from 'react-native';
    
    export default class bracelet extends React.Component {
    render() {
           return(

    <View style={styles.container}>

<View style={{marginTop: 10}}></View>
      <Text style = {{ fontSize: 16, fontWeight:'bold', color:'#2c3436', textAlign:'center', marginHorizontal: 40, marginBottom:20}} 
      >GOLD GEM BRACELET</Text>

       <Image 
          style={{ width : "100%", height: 200, borderRadius: 10/2, marginTop: 0, marginBottom: 0}} 
          source = {require ('./assets/images/j2.png')}
          resizeMode = "contain"
      />
     <View style={{marginTop: 10}}></View>
      <Text style = {{ fontSize: 16, fontWeight:'bold', color:'#2c3436', textAlign:'center', marginHorizontal: 40}} 
      >Price: £5 </Text>
      <View style={{marginTop: 10}}></View>
      <Text style = {{ fontSize: 16, fontWeight:'bold', color:'#2c3436', textAlign:'center', marginHorizontal: 40}} 
      >Condition: NEW </Text>
      <View style={{marginTop: 10}}></View>
      <Text style = {{ fontSize: 16, fontWeight:'bold', color:'#2c3436', textAlign:'center', marginHorizontal: 40}} 
      >QUANTITY : 2 BRACELETS </Text>
      <View style={{marginTop: 10}}></View>
      <Text style = {{ fontSize: 16, fontWeight:'bold', color:'#2c3436', textAlign:'center', marginHorizontal: 40}} 
      >Location: OULU </Text>
      <View style={{marginTop: 10}}></View>
      <Text style = {{ fontSize: 16, fontWeight:'bold', color:'#2c3436', textAlign:'center', marginHorizontal: 40}} 
      >DELIVERY: AVAILABLE </Text>

    <View style = {{  flexDirection: 'row', margin: 5}}> 
                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('clothes')}
                    style={{ backgroundColor: '#607D8B', width: 100, height: 30, borderRadius: 20, marginTop:50}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' , textAlign:'center'}}>BUY NOW</Text>
                </TouchableOpacity>
    </View>
      
    </View>
        


           )}
    
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5e7e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
