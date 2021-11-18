// src/views/Home.js
import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Product from '../components/Product';
class HomeScreen extends React.Component {
    render() {
      return (
        <View style = {styles.row}>
            <View style={styles.col}></View>
             <Product/>
        </View>
      );
    }
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col: {
        flex: 1,
    },
  });
export default withNavigation (HomeScreen);
