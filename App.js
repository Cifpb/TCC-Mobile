import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { setStatusBarStyle } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#161413"}barStyle ="light-content"/>
     <Routes/>
    </NavigationContainer>
  );
}

