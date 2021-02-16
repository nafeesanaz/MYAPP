import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import homeScreen from './homeScreen';
import loginScreen from './loginScreen';
import signupScreen from './signupScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {

    return (
    <View style = {styles.container}> 
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component = {homeScreen} />
          <Stack.Screen name="Login" component = {loginScreen} />
          <Stack.Screen name="Signup" component = {signupScreen} />
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