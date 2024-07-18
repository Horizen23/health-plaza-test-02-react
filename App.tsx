import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import storeConfig from './src/store/store';
import MainNavigation from './src/navigation/MainNavigation';
import LoginScreen from './src/screen/LoginScreen';
import MainScreen from './src/screen/MainScreen';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from './src/screen/SplashScreen';

const App: React.FC = () => {
 
  return (
    <Provider store={storeConfig.store}> 
      <PersistGate loading={<SplashScreen />} persistor={storeConfig.persistor}>
        <MainScreen/>
      </PersistGate>
    </Provider>
  );
};

export default App;
