import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App({navigation}) {
    return (
      <View style={styles.container}>
        <Text> Login or sign in to your account</Text>
        <Text> Email: </Text>
        <TextInput placeholder='email'/>
        <Text> Password: </Text>
        <TextInput placeholder='password' secureTextEntry='True'/>
        <Button title = 'Login' onPress={()=>navigation.navigate('Home')}/>
        
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





