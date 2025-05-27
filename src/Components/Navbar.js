import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import Main from './Main';
import Login from './Login';
import Lists from './Lists';
import Home from './Home';
import Design_Pages from './Design_Pages';

const Stack = createStackNavigator();

const Navigationfiles = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Lists" component={Lists} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Design" component={Design_Pages} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigationfiles