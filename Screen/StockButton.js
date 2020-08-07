import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';


export default class StockButton extends React.Component {
   

  render() {
    return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity style= {Styles.buzzer}>
      <Text style = {Styles.buttonText}> Stocks </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  buzzer:{
    backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:250 , height:100 ,  borderRadius:200,borderColor:'aqua',borderWidth:5,
  },
  buttonText:{
    color:'aqua' , fontSize:35 ,
  //  fontFamily:'Segoe Print'
  }
})