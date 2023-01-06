import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CharacterDetails } from './src/screen/CharacterDetails';

import ListPage from './src/screen/ListPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Personnages">
        <Stack.Screen name="Personnages" component={ListPage} />
        <Stack.Screen name="Details" component={CharacterDetails} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};



export default App;
