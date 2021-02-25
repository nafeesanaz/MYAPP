import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Button} from 'react-native';



export default class signupScreen extends React.Component{


    constructor(props){
        super(props)
        this.state = {NAME: "" }
        this.state = { PRICE: ""}
        this.state = {LOCATION: ""}
        this.state = {DELIVERYORPICKUP: ""}
        
    } 

    validate_field=()=>{
        const { NAME, PRICE} = this.state
        if(username == ""){
            alert("Enter NAME")
            return false
        } else if (password == ""){
            alert("Enter NAME")
            return false
        }
        return true
    }

    making_api_call=()=>{
        if (this.validate_field()){
            alert("You are now signed up")
        }
    }

    

    render(){
      
        return(
            <ScrollView>
            <View style={styles.container}>
              <Text style = {{
                  fontSize: 24, 
                  fontWeight: 'bold',
                  color: '#607D8B', 
                  paddingBottom: 10, 
                  marginBottom: 10, 
                  borderBottomColor:'gray', 
                  borderBottomWidth:1}}>ADD NEW ITEMS</Text>
            
            <TextInput
                    onChangeText={(value) => this.setState({ NAME: value}) }
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="NAME"
                    
            />

            <TextInput
                    onChangeText={(value) => this.setState({ PRICE: value}) }
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="PRICE"
                    
            />

            <TextInput
                    onChangeText={(value) => this.setState({ LOCATION: value}) }
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="LOCATION"
                    
            />

           
            <TextInput
                    onChangeText={(value) => this.setState({ DELIVERYORPICKUP: value}) }
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="DELIVERY OR PICKUP"
                    
            />

            

            <TouchableOpacity
                onPress={ () => this.making_api_call()}
                style={{ backgroundColor: '#607D8B',padding: 10, width: 300, borderRadius: 10, marginHorizontal: 2}}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>SAVE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ () => this.making_api_call()}
                style={{ backgroundColor: '#607D8B',padding: 10, width: 300, borderRadius: 10, marginHorizontal: 2, marginTop:30}}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>CANCEL</Text>
            </TouchableOpacity>
          
            

            </View>
            </ScrollView>  
        ) 
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#d5e7e8',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        marginBottom: 10,
        alignItems:'center',
    }
    });



  