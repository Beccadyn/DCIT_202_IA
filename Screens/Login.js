import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Open  to start working on your app!</Text>
        <TextInput placeholder='username'/>
        <TextInput placeholder='email'/>
        <TextInput placeholder='password' secureTextEntry='True'/>
        <Text onPress={()=>navigation.navigate('Home')}> Login</Text>
        
        <StatusBar style="auto" />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;





