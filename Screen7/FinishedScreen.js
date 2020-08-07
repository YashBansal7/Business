import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import Header from  '../FinishedScreen/Header'
import EditButton from './EditButton'
export default class FinishedScreen extends React.Component {
   

  render() {
    return (
            <View style={{alignItems:'center', justifyContent:'center',backgroundColor:'black'}}>
    <Header />

    
    
    <EditButton />
      </View>
    );
  }
}
