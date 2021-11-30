import React, { useState, Component } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import {  Text, Button, Input } from 'react-native-elements';
import styles from '../../style/MainStyle';
import stylesp from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import check from '../check/check';
import firebaseConfig from '../index';
import {
    FormControl,
    Select,
    Container,
    CheckIcon,
    WarningOutlineIcon,
    Center,
    NativeBaseProvider,
    VStack,
  } from "native-base";


export const Example = () => {
    const [service, setService] = React.useState(null)
    
    return (
      <VStack space={1}>
        <Select
          
          selectedValue={service}
          minWidth="340"
          accessibilityLabel="Choose Service"
          placeholder="Gerencia"
          mt={0}
          onValueChange={(itemValue) => setService(itemValue)}
          
        >
          <Select.Item label="GERENCIA ADM. E LOG. INTEGRADA" value="ADM" />
          <Select.Item label="GERENCIA CARVAO" value="GCA" />
          <Select.Item label="GERENCIA COLHEITA FLORESTAL" value="GCL" />
          <Select.Item label="GERENCIA DE HSE E PROC INTEGRADOS" value="GHS" />
          <Select.Item label="GERENCIA MANUTENCAO" value="GMM" />
          <Select.Item label="GERENCIA PATRIMONIAL" value="GSP" />
          <Select.Item label="GERENCIA SILVICULTURA" value="GSI" />
          <Select.Item label="GERENCIA TECNICA" value="GTF" />

        </Select>
      </VStack>
    )
  }
  

  export default function telaincial({navigation}) {
    const[Nome,  setNome]= useState(null)
    const[Registro, setRegistro]=useState(null)
    const[errorName, setErrorName]=useState(null)
    const[errorRegistro, setErrorRegistro]=useState(null)
    
    const validar=()=>{
      let error=false
      setErrorName(null)
      setErrorRegistro(null)
      if(Nome==null){
      setErrorName("Preencha seu nome corretamente")
      error=true
      }

      if(Registro==null)
      {
        setErrorRegistro("Preencha seu registro corretamente")
        error=true
      }
      return !error
    }
    const seguir= ()=>{
      if(validar()){
        navigation.navigate('checar');
      }
       

    }

    return (
      <SafeAreaView style={styles.container}  
      >
        <StatusBar
        backgroundColor="#fffaf0"
        barStyle="dark-content"
        />
        <View style={( stylesp.initial)}>
        <Input
         placeholder="Nome"
         onChangeText={value => {
          setErrorName(null)
          setNome(value)
        }}
         errorMessage={errorName}
       />
       <Input 
         placeholder="Registro"
         onChangeText={value => setRegistro(value)}
         keyboardType="number-pad"
         errorMessage={errorRegistro}
       />
       <NativeBaseProvider >
        <Center >
          <Example 
      
          />
        </Center>
        </NativeBaseProvider>

       <Button
        title="Seguir"
        titleStyle={specifcStyle.titleStyle}
        type="check"
        buttonStyle={specifcStyle.button}
        onPress={()=>seguir()}
      />
    </View>

      
  
    </SafeAreaView>
    
    
  );
}
const specifcStyle = StyleSheet.create({
    
    button:{
    
        width: '20%',
        height: '20%',
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"#000000", 
        marginTop:50
        
    },
    titleStyle: {
        color: 'red',
      },
    
    
});