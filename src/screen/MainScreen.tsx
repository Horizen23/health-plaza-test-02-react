import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import MainNavigation from '../navigation/MainNavigation';
import LoginScreen from './LoginScreen';
import { useSelectIsAuthenticated } from '../store/auth/hooks';
import SplashScreen from './SplashScreen';
import { getQuestions } from '../services/questionsService';
import { setQuestions } from '../store/questions/questions.slice';

const MainScreen: React.FC = () => {
   const IsAuthenticated =useSelectIsAuthenticated()
   const dispatch = useDispatch();
   const [isReady, setIsReady] = useState(false);

   useEffect(() => {
     const loadResources = async () => {
       try {
        const q = getQuestions()
        dispatch(setQuestions(q))
       } catch (e) {
         console.warn(e);
       } finally {
         setIsReady(true);
       }
     };
 
     loadResources();
   }, []);
   if (!isReady) {
    <SplashScreen />
   }
  return (
      <View style={styles.container}>
        {IsAuthenticated ? (
          <MainNavigation />
        ) : (
          <LoginScreen  />
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MainScreen;
