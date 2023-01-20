import React from 'react';
import { StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Boarding from './src/screen/OnBoarding';

const stack= createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name='Onboarding' component={Boarding} options={{headerShown:false}}/>
    </stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
