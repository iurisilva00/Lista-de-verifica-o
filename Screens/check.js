import React, { useState, useEffect} from 'react';
import { SafeAreaView, StatusBar, StyleSheet,   BackAndroid } from 'react-native';
import { View, CheckBox, FlatList, SectionList } from 'react-native';
import {   Button, Input } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CheckBoxIcon from 'react-native-elements/dist/checkbox/CheckBoxIcon';

import { ScrollView } from 'react-native';
import styles from '../../style/MainStyle';
import { RadioButton, Text, List, Divider, TextInput } from 'react-native-paper';

import { InteractionManager } from 'react-native';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import Constants from 'expo-constants';
import checklistOptions from './options'
import final from './finish';

export default function check({navigation}) {    
  /**
   * Cria um objeto contendo os items da checklist considerando que nenhuma opção foi marcada
   * 0: nenhuma opçao
   * 1: primeira opção
   * 2: segunda opção
   * 3: terceira opção
   */
   const [text, setText] = React.useState({
    

   });
   
  
  
  const [items, setItems] = useState(checklistOptions.reduce((acc, curr) => {
    /**
     * Checa se a chave correspondente ao título do item está presente no objeto acumulado, caso não esteja acrescenta no objeto e marca
     * nenhuma opção (0)
     */
    if (!(curr.title in acc))
      acc[curr.title] = "0"
    
    return acc    
  }, {}))

  /**
   * Função que pega o item selecionado e seta o valor igual a 1, 2 ou 3, dependendo da opção selecionada
   */
  const handlePress = (item, value) => {
    setItems(v => ({
      ...v,
      [item]: value
    }))
   
  }

  /**
   * Função chamada pelo botão de enviar
   */
  
 

  const handleSubmit = () =>  {
    const problems = []

    Object.entries(items).forEach(([key, value]) => {
      if (value === "2")
        problems.push(key)
    })

    navigation.navigate('finish', {
      problems
    });   
     
    /**
     * Atualmente a função não faz nada a não ser um console.log de todos os itens e seus respectivos valores,
     * é aqui que o tratamento dos dados a serem enviados deve ser feito.
     */
    
  }
  
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="#ff00ff00"
          barStyle="dark-content"
        />
        <View style={styles.sectionHeader}> 
       
          <FlatList
            
            data={checklistOptions}
            
            renderItem={({item})=>(
            
            <View >
              
                <Divider style={styles.label}/>
                <Text style={styles.item}>{item.title}</Text>
                <Divider />
                
                <RadioButton.Group
                  onValueChange={value => handlePress(item.title, value)}
                  value={items[item.title]}
                > 
                <Divider />
                  <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                  }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Text>Conforme</Text>
                      <RadioButton value="1" />
                    </View>
                    <View>
                      <Text >Não Conforme</Text>
                      <RadioButton value="2">
                      
                      </RadioButton>
                          
                      
                    </View>
                    <View>
                      <Text>Não Aplica</Text>
                      <RadioButton value="3" />
                    </View>
                  </View>
                
                </RadioButton.Group>

            </View>
        )}

        keyExtractor={(item, index)=>index.toString()}       
        />
      </View>
      <Button
        title="Salvar"
        titleStyle={specifcStyle.titleStyle}
        type="check"
        buttonStyle={specifcStyle.button}
        onPress={()=> handleSubmit()}
      />
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

