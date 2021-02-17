import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {Username: "David"}
        this.state = {Password: "1234"}
        
    } 

         onLogin = () => {
         if (this.state.username == 'David' &&  this.state.password == '1234') 
        {

            this.props.navigation.navigate('Shop')
        }
        else {
            this.setState({errMsg: 'Username or Password Incorrect'})
        }
    } 
   

    render(){
        
        return(
           <View style={styles.container}>
               <Text style={{ fontSize: 25,fontWeight:'bold', marginTop:20, color: '#607D8B' }}>Welcome Back!</Text>
               <Text style={{ fontsize: 16, fontWeight:'bold', color:'gray', marginTop: 20 }}>Sign in to continue</Text>
              
               <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="Username"
                    onChangeText = {(text) => 
                        {
                            this.setState({errMsg: ''}),
                            this.setState({ username: text })
                        }
                    }
                />

                <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText = {(text) => 
                        {
                            this.setState({errMsg: ''}),
                            this.setState({ password: text })}
                        }

                />
                
                <Text style={{ color: '#ad5058', textAlign: 'center', marginTop: 30}}>{this.state.errMsg}</Text>
        
           <View style = {{ alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
            
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Shop')}
                    style={{ width: 200, backgroundColor: '#607D8B', padding: 10, alignItems:'center', justifyContent:'center', borderRadius: 40, marginTop: 30}}
                >
            
                <Text style = {{ textalign: 'center', color: '#fff', fontsize: 16}}>Login Now</Text>
                </TouchableOpacity>
                <Text style = {{ marginTop: 10}}> Forgot Password?</Text>
                </View>
    
                <View style={{flexDirection:'row', marginTop: 30}}>
                <View style={{height: 40, width: 40, borderRadius:40/2, backgroundColor:'#607D8B',marginHorizontal: 10, alignItems:'center', justifyContent:'center'}}>
                <Text style= {{ fontSize: 25, fontWeight: 'bold', color:'#FFF'}}>f</Text>
                </View>
                
                <View style={{ height:40, width: 40, borderRadius: 40/2, backgroundColor: '#ab6565', marginHorizontal: 10, alignItems:'center', justifyContent:'center'}}>
                <Text style={{ fontSize:25, fontWeight: 'bold', color: '#FFF'}}>G</Text>
                </View>

                <View style={{ height: 40, width: 40, borderRadius:40/2, backgroundColor:'#5e274e', alignItems:'center', justifyContent:'center',marginHorizontal: 10}}>
                <Text style ={{ fontSize:25, fontWeight: 'bold', color: '#FFF'}}>IG</Text>
                </View>
            </View>

            <View style={{ flexDirection:'row', marginTop: 10 }}>
                <Text style={{ color:'gray'}}>
                    don't have an account?
                </Text>
                <Text style={{fontWeight:'bold', color:'#607D8B'}}>
                    Sign Up
                </Text>
            </View>
        </View>


        
    
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d5e7e8',
      padding: 20,
      alignItems:'center',
      
    },
});

