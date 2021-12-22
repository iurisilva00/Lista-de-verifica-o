import React from 'react'
import { Text, View, SafeAreaView, StatusBar, StatusBarIOS } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import checklistOptions from './options'

import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import styles from '../../style/MainStyle';
import { StyleSheet } from 'react-native';
import { Input, button } from 'react-native-elements';

export default function final({ route }){
    
    /**
     * Recebe todos os itens com problema da ultima tela
     */
    const [text, onChangeText] = React.useState("");
    const { problems } = route.params
    if({problems}==null)
    {
        return(
            <View style={specifcStyle.button}>
             <Text>Finalizado</Text>
                
          
            </View>
        );
    }
    else{
        return(
            <View style={specifcStyle.button}>
            

          </View>
        );
    }
    
    
   
}
const specifcStyle = StyleSheet.create({    
    button:{
        flex: 1,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor:"#000000", 
       
    },
    titleStyle: {
      color: 'red',
      justifyContent: "center",
      alignItems:"center",
      backgroundColor:"#000000", 
    },
  });
  
  