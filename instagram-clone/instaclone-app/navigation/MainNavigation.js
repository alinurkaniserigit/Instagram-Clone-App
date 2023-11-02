import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PhotoNavigation from './PhotoNavigation';
import TabNavigation from './TabNavigation';
import MessageNavigation from './MessageNavigation';
import { stackStyles } from './config';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: stackStyles,
      }}
    >
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhotoNavigation"
        component={PhotoNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageNavigation"
        component={MessageNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
