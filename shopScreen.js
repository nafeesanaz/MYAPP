import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default class shopScreen extends React.Component{
    render(){
        return(
           <View>
               <Text>Shop screen</Text>
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
  