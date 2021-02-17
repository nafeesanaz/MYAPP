import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default class signupScreen extends React.Component{
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
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="Full Name"
                    
            />

            <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="Username"
                    
            />

            <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="Password"
                    
            />

            <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="Confirm Password"
                    
            />
            
            
            <Text style= {{textAlign:'center', fontSize: 15, fontWeight:'bold', color :'#607D8B'}}> Or Via Social Media </Text>
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



  