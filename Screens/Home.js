import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';



export default function Home(){
    return(
        <View>
        <Text>Open  to start working on your app!</Text>
        <TextInput placeholder='email'/>
        <Image source ={ require('C:\Users\USER\ReactAssignment\assets\office.jpg')}/>
        <StatusBar style="auto" />
      </View>
    );
}