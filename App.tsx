import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/Navigators/AuthNavigator';
import MainNavigator from './src/Navigators/MainNavigator';
import { StatusBar } from 'react-native';
import Colors from './src/Theme/Colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.backgroundColor} />
      <NavigationContainer>
        {/* <AuthNavigator/> */}
        <MainNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
