import { useEffect } from 'react';
import { View,Image, Text, Button} from 'react-native';
import React  from 'react';


const Splash = ({navigation}) => {
    useEffect ( () => {
        setTimeout(()=>{
            navigation.replace('Login');
        },3000);
    });
  return (
    <View style={{flex:1,alignItems: 'center',justifyContent:'center',backgroundColor:'#FAF7F0'}}>
      <Image source={require('../../asset/logo.png')} style={{ width: 220, height: 110 }}/>
    </View>
  )
}

export default Splash;