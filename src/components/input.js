import React, { Component } from 'react'
import { 
   View,
   TouchableOpacity,
   TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Color from '../components/colors'
const Input = (props)=>{
   return(
      <View style={{flexDirection:'row'}}>
         <View style={{flex:1,padding:10}}>
            <TextInput
            style={{borderColor:Color.secondary,borderWidth:2,borderRadius:7,paddingHorizontal:15,letterSpacing:1.5,fontSize:16}}
            keyboardType='numeric'
            value={props.val}
            onChangeText={props.change}
            selectionColor={Color.primary}
            />
         </View>
         <View style={{padding:10,alignItems:'center',justifyContent:'center'}}>
         {
            props.check==true?
            <TouchableOpacity
            onPress={props.click}
            style={{borderColor:Color.primary,borderWidth:2,width:40,height:40,borderRadius:7,alignItems:'center',justifyContent:'center'}}
            >
               <Icon name='check' size={30} color={Color.primary}/>
            </TouchableOpacity>
            :
            <TouchableOpacity
            onPress={props.click}
            style={{backgroundColor:Color.white,borderColor:props.error===true?Color.danger:Color.secondary,borderWidth:2,width:40,height:40,borderRadius:7}}
            />
         }
         </View>
      </View>
   )
}
export default Input