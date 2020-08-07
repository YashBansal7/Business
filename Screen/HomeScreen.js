import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import Header from './Header'
import StockScreen1 from '../Screen2/StockScreen1';
import SaleScreen from '../Screen3/SaleScreen'
import ProductionScreen from '../Screen5/ProductionScreen'
import Attendance from '../Screen8/Attendance'
export default class HomeScreen extends React.Component {

  gotobuzzer=()=>{
    this.props.navigation.navigate('ProductionScreen')
  }

  gobuzzer=()=>{
    this.props.navigation.navigate('StockScreen1')
  }

  buzzer=()=>{
    this.props.navigation.navigate('SaleScreen')
  }

  buzz=()=>{
    this.props.navigation.navigate('Attendance')
  }

  render() {
    return (
            <View style={{ alignItems:'center', justifyContent:'center',backgroundColor:'black'}}>
              <View> 
                  <Header />
                </View>
          
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.buzz ()}>
                <Text style = {Styles.buttonText}> Attendance </Text>
                </TouchableOpacity>
               </View>


              <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.gotobuzzer ()}>
                <Text style = {Styles.buttonText}> Production </Text>
                </TouchableOpacity>
               </View>

              
               <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.buzzer ()}>
                <Text style = {Styles.buttonText}> Sale </Text>
                </TouchableOpacity>
               </View>
  
               <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.gobuzzer ()}>
                <Text style = {Styles.buttonText}> Stocks </Text>
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