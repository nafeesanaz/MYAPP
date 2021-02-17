import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class clothes extends React.Component {


  render() {
      
  return (
    <View style={styles.container}>
      <Text>Hi there</Text>
  
    </View>
  );
}

}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#B0BEC5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

