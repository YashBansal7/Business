import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import Header from './Header';
import FinishedButton from './FinishedButton';
import RawButton from './RawButton';
import MechanicalButton from './MechanicalButton'
import MechanicalScreen from '../Screen6/MechanicalScreen'

export default class StockScreen1 extends React.Component {
  tobu=()=>{
    this.props.navigation.navigate('HomeScreen')
  } 

  buz=()=>{
    this.props.navigation.navigate('MechancalScreen')
  }

  render() {
    return (
            <View style={{alignItems:'center', justifyContent:'center',backgroundColor:'black'}}>
   <View>
    <Header />
    <MechanicalButton />
    <RawButton />
    <FinishedButton />
    </View>

    <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.tobu ()}>
                <Text style = {Styles.buttonText}> Home </Text>
                </TouchableOpacity>
               </View>

      </View>
    );
  }
}

const Styles = StyleSheet.create({
  buzzer:{
    backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:250 , height:60,  borderRadius:200
    ,borderColor:'aqua',borderWidth:5,margin:25,
  },
  buttonText:{
    color:'aqua' , fontSize:35// ,fontFamily:'Segoe Print'
  }
})