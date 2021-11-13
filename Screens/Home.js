import React from 'react';
import { StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { SearchBar, Image } from 'react-native-elements';



export default function Home(){
    return(
        <View>
        <Text>Welcome to Express Shop</Text>
        <Text> We're happy to have you!</Text>
        <SearchBar placeholder = "search here" />
        <Image
             style={{ width: 200, height: 200 }}
             resizeMode = "contain"
           source={require('./assets/office.jpg')}
           PlaceholderContent={<ActivityIndicator />}
      
/>       
        <Image
          style= {{ width:150, height:150}}
          resizeMode = "contain"
          source={require("peach shoe.png")}/>
          PlaceholderContent= {<ActivityIndicator/>}


        <Image 
          style = {{width:150, height:150}}
          resizeMode = "contain"
          source = {require("crop_top_hoodie.png")}
        />

    
        
        <StatusBar style="auto" />
      </View>
    );
}