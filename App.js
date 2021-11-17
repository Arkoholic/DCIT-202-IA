import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import DetailScreenShoe from './screens/DetailScreenShoe';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreenWatch from './screens/DetailScreenWatch';
import DetailScreenPhone from './screens/DetailScreenPhone';
import DetailScreenShirt from './screens/DetailScreenShirt';



export default function App(){
  const AppNavigator = createNativeStackNavigator();
    return( 
     <View style={{ flex:1}}>
       <NavigationContainer>
         <AppNavigator.Navigator screenOptions={{headerShown: false}}>
          <AppNavigator.Screen name="Login" component={Login} />
          <AppNavigator.Screen name="Home" component={Home} options={{headerShown: true}}/>
          <AppNavigator.Screen name="DetailScreenShoe" component={DetailScreenShoe} />
          <AppNavigator.Screen name="DetailScreenWatch" component={DetailScreenWatch}/>
          <AppNavigator.Screen name="DetailScreenPhone" component={DetailScreenPhone}/>
          <AppNavigator.Screen name="DetailScreenShirt" component={DetailScreenShirt}/>
         </AppNavigator.Navigator>
       </NavigationContainer>
     </View>
      
  
    );}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
 
});

