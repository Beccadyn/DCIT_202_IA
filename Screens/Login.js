import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App({navigation}) {
  const [Email, setemail] = useState("")
  const [Password, setpassword] = useState("")
    return (
      <View style={styles.container}>
        <Text> Login or sign in to your account</Text>
        <Text> Email: </Text>
        <TextInput placeholder='email' onChangeText={(Email)=>setemail(Email)}/>
        <Text> Password: </Text>
        <TextInput placeholder='password' onChangeText={(Password)=>setpassword(Password)} secureTextEntry='True'/>
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





