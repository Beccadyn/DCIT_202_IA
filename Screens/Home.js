// src/views/Home.js
import React from 'react';
import { View, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import product from '../Screens/product';

class Home extends React.Component {
    render() {
      return (
        <View style= {styles.row}>
           <View style={styles.col}>
              <product/>
            </View>
            
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
export default withNavigation(Home);
