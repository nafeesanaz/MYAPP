import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
    
    export default class clothes extends React.Component {
    render() {
           return(

    <View style={styles.container}>
       <Image 
          style={{ width : "100%", height: 300, borderRadius: 40/2}} 
          source = {require ('./assets/images/logo3.png')}
          resizeMode = "contain"
      />
      
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
