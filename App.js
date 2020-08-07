import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen';
import ProductionScreen from './Screen5/ProductionScreen';
import StockScreen1 from './Screen2/StockScreen1';
import MechanicalScreen from './Screen6/MechanicalScreen'
import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import SaleScreen from './Screen3/SaleScreen';
import Attendance from './Screen8/Attendance'
 
 // import RawScreen from './RawScreen/RawScreen'
//  import FinishedScreen from './FinishedScreen/FinishedScreen'


  export default function App() {
    return (
     <View style={{flex:1 , backgroundColor:'black'}}>   
      <AppContainer />   
     
     </View>
  );
}

  var AppNavigator = createSwitchNavigator({
    HomeScreen: {screen :HomeScreen  },
    ProductionScreen:{screen : ProductionScreen} ,
    StockScreen1 : {screen: StockScreen1},
    SaleScreen : {screen:SaleScreen},
    Attendance : {screen:Attendance}
  })
  const AppContainer = createAppContainer(AppNavigator)

  
 
  
  /*  <RawScreen />
    <StockScreen1 />
    <FinishedScreen />
    <AttendanceScreen1 />
    <ProductionScreen />
    

  const MechNavigator = createSwitchNavigator({
    StockScreen1: {screen : StockScreen1},
    MechanicalScreen: {screen : MechanicalScreen}
  })
   const MechContainer = createAppContainer(MechNavigator)
  */