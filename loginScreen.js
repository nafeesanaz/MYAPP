import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default class LoginScreen extends React.Component{
    render(){
        return(
           <View>
               <Text>login screen</Text>
           </View> 
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d5e7e8',
      
    },
  });
  