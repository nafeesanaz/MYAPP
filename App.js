import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const stack = createStackNavigator();

export default class App extends React.Component {
  render() {
  return (
    <View> 
      <NavigationContainer>
        <Stack.Navigator>
          <stack.screen name="Home" component = {HomeScreen} />
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