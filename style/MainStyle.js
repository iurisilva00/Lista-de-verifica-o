import { StatusBar } from 'react-native';
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { flexDirection } from 'styled-system';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ff7f50',
      justifyContent: "center",
      color:"#dc143c",
      alignItems: 'center',
      
      paddingTop: Platform.OS==="android" ? 40: 0
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      justifyContent: "center"
    },
    checkbox: {
      alignSelf: "center",
      justifyContent: "center"
    },
    label: {
      backgroundColor:"#dc143c",
      height: 15,
      
    },
    sectionHeader: {
    
      fontSize: 20,
      color:"#dc143c",
      backgroundColor:'#fffafa',
      height: 580,
      width:390,
      flexDirection: "column",
      
    },
    item: {
      alignItems: 'center',
      justifyContent: "center",
      fontSize: 20,
      color:"#dc143c",
      
      backgroundColor:'#fffafa',
   
    
    },
    flatlist:{
    flex: 1,
    

    },
   
  });
  export default styles