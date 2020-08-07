import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';


export default class RawButton extends React.Component {
   

  render() {
    return (
            <View style={{ alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity style= {Styles.sbutton}>
      <Text style = {Styles.sbtext}> Raw </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  sbutton:{
    backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:250 , height:100 ,  borderRadius:200,
    borderColor:'aqua',borderWidth:5,marginTop:50,
  },
  sbtext:{
    color:'aqua' , fontSize:35// ,fontFamily:'Segoe Print'
  }
})