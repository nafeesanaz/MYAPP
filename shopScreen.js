import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TouchableNativeFeedback, TextInput} from 'react-native';
//import{ Picker} from 'react-native-community/picker'
import {ScrollView} from 'react-native'




export default class shopScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {ITEMSEARCH: "cabinet" } }
   
    render(){

       

        return(
        <ScrollView style ={{backgroundColor:"#d5e7e8"}}>
            <View Style ={{ 
                flexDirection:"row",
                alignItems:"center",
                marginTop: 30,
                marginHorizontal: 20
            }}>
            
           
            <View style = {{  flexDirection: 'row', margin: 1, paddingVertical: 5, alignItems:'center',justifyContent:'center'}}> 
                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('newitems')}
                    style={{ backgroundColor: '#607D8B',padding: 20, width: 200, borderRadius: 20, marginHorizontal: 2}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>Add New Item to Sell</Text>
                </TouchableOpacity>
                    
            </View>
            <View style = {{  flexDirection: 'row', margin: 2, paddingVertical: 30 }}> 
                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('clothes')}
                    style={{ backgroundColor: '#607D8B',padding: 10, width: 80, borderRadius: 30, marginHorizontal: 2}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>clothes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('electronics')}
                    style={{ backgroundColor: '#607D8B',padding: 10, width: 100, borderRadius: 30, marginHorizontal: 2}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>electronics</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('furniture')}
                    style={{ backgroundColor: '#607D8B',padding: 10, width: 80, borderRadius: 30, marginHorizontal: 2}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>furniture</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('jewellery')}
                    style={{ backgroundColor: '#607D8B',padding: 10, width: 80, borderRadius: 30, marginHorizontal: 2}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>jewellery</Text>
                </TouchableOpacity>
            </View>

            <View style ={{flexDirection: 'row', margin: 2}}>        
           <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('jewellery')} >
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/bracelet.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('clothes')} >
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/shirt.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>        
            </View>

            
            <View style ={{flexDirection: 'row', margin: 2}}>  
            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('electronics')} >   
                     
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/pods.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>
            
            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('clothes')} >   
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/Jeans.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>
            </View>

            <View style ={{flexDirection: 'row', margin: 2}}>   
            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('furniture')} >        
                <Image
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/Sofa.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('jewellery')} >   
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/ring.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>   
            </View>
            <View style ={{flexDirection: 'row', margin: 2}}>   
            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('electronics')} >   
                  
                <Image
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/phone.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('furniture')} >   
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/spoon.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>    
            </View>
            <View style ={{flexDirection: 'row', margin: 2}}>   
            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('electronics')} >   
                  
                <Image
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/ear.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('electronics')} >   
                <Image 
                style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                source = {require ('./assets/images/ring.png')}
                resizeMode = "contain"
                />
            </TouchableNativeFeedback>   
            </View>
            <View style = {{   margin: 5, alignItems:'center', justifyContent:'center'}}> 
                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('headphones')}
                    style={{ backgroundColor: '#607D8B', width: 300, height: 50, borderRadius: 10, marginTop:50, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' , textAlign:'center'}}>SEARCH </Text>
                </TouchableOpacity>
            </View>
              <TextInput
                    onChangeText={(value) => this.setState({ ITEMSEARCH: value}) }
                    style={{ marginTop: 20, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 50, textAlign:'center' }}
                    placeholder="ITEM SEARCH"
                    
            />
             
            <View style ={{flexDirection: 'row', marginTop: 1, alignItems:"center", justifyContent:'center'}}>   
                  
                  <Image
                  style={{ width : "50%", height: 130, borderRadius: 40/2}} 
                  source = {require ('./assets/images/icon1.png')}
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
  