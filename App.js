import React from 'react'
import { Text, View, SafeAreaView, StatusBar, StatusBarIOS } from 'react-native'
import styles from './style/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import telainicial from './screens/telainicial/telainicial';
import preload from './screens/preload/preload';
import check from './screens/check/check';
import final from './screens/check/finish';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    
    screenOptions={{
    headerShown: false
    
    }}
    >
      
      <Stack.Screen name="preload" component={preload} />
      <Stack.Screen name="telainicial" component={telainicial} />
      <Stack.Screen name="checar" component={check} />
      <Stack.Screen name="finish" component={final} />
     
    </Stack.Navigator>
  );
}



export default function App() {
  return (
   
    
    <NavigationContainer>
    <MyStack />
   </NavigationContainer>
      
    
  );
}
