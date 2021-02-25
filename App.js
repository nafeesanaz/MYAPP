import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import homeScreen from './homeScreen';
import loginScreen from './loginScreen';
import signupScreen from './signupScreen';
import ShopScreen from './shopScreen';
import clothes from './clothes';
import electronics from './electronics';
import furniture from './furniture';
import jewellery from './jewellery';
import clothesinfo from './clothesinfo';
import clothestwo from './clothestwo';
import clothes3 from './clothes3';
import sweater from './sweater';
import collarT from './collarT';
import controller from './controller';
import headphones from './headphones';
import chair from './chair';
import cabinet from './cabinet';
import bracelet from './bracelet';



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
          <Stack.Screen name="Shop" component = {ShopScreen} />
          <Stack.Screen name="clothes" component = {clothes} />
          <Stack.Screen name="electronics" component = {electronics} />
          <Stack.Screen name="furniture" component = {furniture} />
          <Stack.Screen name="jewellery" component = {jewellery} />
          <Stack.Screen name="clothesinfo" component = {clothesinfo}/>
          <Stack.Screen name="clothestwo" component ={clothestwo}/>
          <Stack.Screen name="clothes3" component ={clothes3}/>
          <Stack.Screen name="sweater" component ={sweater}/>
          <Stack.Screen name="collarT" component ={collarT}/>
          <Stack.Screen name="controller" component ={controller}/>
          <Stack.Screen name="headphones" component ={headphones}/>
          <Stack.Screen name="chair" component ={chair}/>
          <Stack.Screen name="cabinet" component ={cabinet}/>
          <Stack.Screen name="bracelet" component ={bracelet}/>
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