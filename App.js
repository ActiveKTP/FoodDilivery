import React from 'react';

//import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';



import { Restaurant, OrderDelivery } from './screens'
import Tabs from './navigation/tabs'

import StackNavigation from './StackNavigation';

//const Stack = createStackNavigator();

const App = () => {

  const [loaded] = useFonts({
    "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),

  })

  if (!loaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )

}

export default App;