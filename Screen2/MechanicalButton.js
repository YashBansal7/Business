import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';


export default class MechanicalButton extends React.Component {
   

  render() {
    return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity style= {Styles.sbutton}>
      <Text style = {Styles.sbtext}> Mechanical </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  sbutton:{
    backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:250 , height:100 ,  borderRadius:200,
    borderColor:'aqua',borderWidth:5,marginTop:110,
  },
  sbtext:{
    color:'aqua' , fontSize:35// ,fontFamily:'Segoe Print'
  }
})