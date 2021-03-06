import React from 'react'
import {Text,View,Button,StyleSheet, ImageBackground,TouchableOpacity} from 'react-native'
import image from "../../assets/images/1.png"
const Tile = (props)=>{
  var a = props.name;
  
    return(
        <View style={styles.items}>
  
     <TouchableOpacity  style={styles.btn} onPress={()=>{props.render('Note',{
        itemId:a,
     
      }); 
       }}>
        <ImageBackground style={styles.img} source={image}>

       <Text>{props.name}</Text>
       </ImageBackground>
     </TouchableOpacity>
     



        </View>
    )
}

const styles = StyleSheet.create({

    btn:{
     
      height: 80,
     flex:1,

      // position: 'relative',
      justifyContent:"center",
      
    },
    container: {
        justifyContent:"center",
        flexDirection:'row',
        flex: 1,
        position: 'relative',
        resizeMode: 'cover',
        alignItems:"center"

      },
      items:{
        marginVertical:10,
        height:80,
        justifyContent: 'center', 
        
      

      },
      img:{
        justifyContent:"center",
        alignItems:"center",
        height: 80,
 flex:1,

      }
})



export default Tile