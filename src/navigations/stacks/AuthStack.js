import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthForms from '../../view/auth/AuthForms';
import Verify from '../../view/auth/Verify';
import ForgetPassword from '../../view/auth/ForgetPassword';
import EsaayOutliner from '../../view/tabScreens/EsaayOutliner';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthForms"
        component={AuthForms}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
