import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import BottomTab from '../tabs/BottomTab';
// import EsaayOutliner from '../../view/tabScreens/EsaayOutliner';
import CitationAssistance from '../../view/tabScreens/CitationAssistance';
import EsaayOutliner from '../../view/tabScreens/EsaayOutliner';
import ChatScreen from '../../view/tabScreens/ChatScreen';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="BottomTabs" component={BottomTab} />
        <Stack.Screen name="EssayOutliner" component={EsaayOutliner} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen
          name="CitationAssistance"
          component={CitationAssistance}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
