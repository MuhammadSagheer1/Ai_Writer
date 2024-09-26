import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStack from './src/navigations/stacks/RootStack';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
     <RootStack/>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
