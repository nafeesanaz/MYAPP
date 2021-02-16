import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import homeScreen from './homeScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
  return (
    <View style = {styles.container}> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component = {homeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  
    </View>
  );
}

}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#B0BEC5',
    flex: 1,
    
  }
});