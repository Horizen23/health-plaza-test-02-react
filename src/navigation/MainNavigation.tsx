import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import QuizScreen from '../screen/QuizScreen';
import LeaderboardScreen from '../screen/LeaderboardScreen';
import { TouchableOpacity, Text } from 'react-native';
import { logoutUser } from '../store/auth/AuthSlice';

const Tab = createBottomTabNavigator();

const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Quiz" component={QuizScreen}  options={({ navigation }) => ({
        headerRight: () => <ButtonLogout />,
      })}/>
        <Tab.Screen name="Leaderboard" component={LeaderboardScreen}  options={({ navigation }) => ({
        headerRight: () => <ButtonLogout />,
      })} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const ButtonLogout: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

export default MainNavigation;
