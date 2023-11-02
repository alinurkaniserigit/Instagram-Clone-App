import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthHome from '../screens/Auth/AuthHome';
import Confirm from '../screens/Auth/Confirm';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthHome" component={AuthHome} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Confirm" component={Confirm} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
