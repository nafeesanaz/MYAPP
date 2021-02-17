import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default class signupScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {FullName: "" }
        this.state = {Username: ""}
        this.state = {Password: ""}
        
    } 

    validate_field=()=>{
        const { username, password} = this.state
        if(username == ""){
            alert("Enter Username")
            return false
        } else if (password == ""){
            alert("Enter Username")
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
            <View style={styles.container}>
              <Text style = {{
                  fontSize: 24, 
                  fontWeight: 'bold',
                  color: '#607D8B', 
                  paddingBottom: 10, 
                  marginBottom: 10, 
                  borderBottomColor:'gray', 
                  borderBottomWidth:1}}>Sign Up Now</Text>
            
            <TextInput
                    onChangeText={(value) => this.setState({ FullName: value}) }
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="FullName"
                    
            />

            <TextInput
                    onChangeText={(value) => this.setState({ Username: value}) }
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="Username"
                    
            />

            <TextInput
                    onChangeText={(value) => this.setState({ Password: value}) }
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="Password"
                    
            />

            

            <TouchableOpacity
                onPress={ () => this.making_api_call()}
                style={{ backgroundColor: '#607D8B',padding: 10, width: 100, borderRadius: 30, marginHorizontal: 2}}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>Submit</Text>
            </TouchableOpacity>
            <View>
                <Text style={"FullName ==>"+this.state.FullName}></Text>
                <Text style ={"username ==> "+this.state.Username}></Text>
                <Text style ={"password ==> "+this.state.Password}></Text>
            </View>
            
            <Text style= {{textAlign:'center', fontSize: 15, fontWeight:'200', color :'#607D8B', marginTop: 20}}> Or Via Social Media </Text>
               <View style={{flexDirection:'row', marginTop: 20}}>
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



  