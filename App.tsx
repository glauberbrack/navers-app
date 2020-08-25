import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Routes';

import { ContextProvider } from './src/contexts/ContextData';

import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  useFonts
} from '@expo-google-fonts/montserrat';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });
  

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <NavigationContainer>
            <ContextProvider>
                <Routes />
            </ContextProvider>
        </NavigationContainer>
      </>
    );
  }

}
