import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import Header from './Header'
import EditButton from './EditButton'

export default class MechanicalScreen extends React.Component {
   

  render() {
    return (
            <View style={{alignItems:'center', justifyContent:'center',backgroundColor:'black'}}>
    <Header />
    <EditButton />
      </View>
    );
  }
}
