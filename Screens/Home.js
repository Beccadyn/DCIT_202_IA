import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';



export default function Home(){
    return(
        <View>
        <Text>Welcome to Express Shop</Text>
        <Text> We're happy to have you!</Text>
        <TextInput placeholder='Search' autoComplete='True' />
    
        
        <StatusBar style="auto" />
      </View>
    );
}