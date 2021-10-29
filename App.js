import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Home from './Screens/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open  to start working on your app!</Text>
      <TextInput placeholder='email'/>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
