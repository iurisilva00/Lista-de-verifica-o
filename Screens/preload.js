
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import { StyleSheet,View, Image } from 'react-native';
import {  Text, Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../style/MainStyle';
import telainicial from '../telainicial/telainicial';



export default function preload({navigation}){
    const entrar= ()=>{
                navigation.navigate('telainicial')
        
                
  }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
             backgroundColor="#fffaf0"
            barStyle="dark-content"
           />
            <Image style={specifcStyle.logo}
              source={require('../../img/checklist.png')}/>
            
            <Button
            icon={
              <Icon
              name="check"
              size={20}
              color="white"
            />
            }
            title="Entrar"
            
            buttonStyle={specifcStyle.button}
            onPress={()=>entrar()}
            
            
        />
           

        </SafeAreaView>
    
        
        
      );

}
const specifcStyle = StyleSheet.create({
    
    button:{
        
        
        width: '16%',
        height: '20%',
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"#000000",
        marginTop:50
        
        
    },
    
    logo: {
        resizeMode: "contain",
            height: 500,
            width: 600
            
      },

});