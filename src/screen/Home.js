import React, { Component } from 'react'
import { 
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Input from '../components/input'
import Color from '../components/colors'
const {height,width}=Dimensions.get('window')
const convertToRupiah = (angka) => {
   let rupiah = '';
   let angkarev = angka.toString().split('').reverse().join('');
   for (var i = 0; i < angkarev.length; i++)
     if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
   return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
 }
export default class App extends Component {
   state={
      check1:false,
      check2:false,
      check3:false,
      err1:false,
      err2:false,
      err3:false,
      val1:null,
      val2:null,
      val3:null,
      hasil:0
   }

   chechlist1=()=>{
      this.setState({ check1: !this.state.check1,err1:false });
   }
   chechlist2=()=>{
      this.setState({ check2: !this.state.check2,err2:false });
   }
   chechlist3=()=>{
      this.setState({ check3: !this.state.check3,err3:false });
   }
   
   penjumlahan=()=>{
      if(this.cekError()==true){
         const{check1,check2,check3,val1,val2,val3}=this.state
         if(check1==true&&check2==true&&check3==true){
            this.setState({
               hasil:Number(val1) + Number(val2) + Number(val3)
            })
         }else if(check1==true&&check2==true){
            this.setState({
               hasil:Number(val1) + Number(val2)
            })
         }else if(check1==true&&check3==true){
            this.setState({
               hasil:Number(val1) + Number(val3)
            })
         }else{
            this.setState({
               hasil:Number(val2) + Number(val3)
            })
         }
      }
   }

   pengurangan=()=>{
      if(this.cekError()==true){
         const{check1,check2,check3,val1,val2,val3}=this.state
         if(check1==true&&check2==true&&check3==true){
            this.setState({
               hasil:Number(val1) - Number(val2) - Number(val3)
            })
         }else if(check1==true&&check2==true){
            this.setState({
               hasil:Number(val1) - Number(val2)
            })
         }else if(check1==true&&check3==true){
            this.setState({
               hasil:Number(val1) - Number(val3)
            })
         }else{
            this.setState({
               hasil:Number(val2) - Number(val3)
            })
         }
      }
   }

   pembagian=()=>{
      if(this.cekError()==true){
         const{check1,check2,check3,val1,val2,val3}=this.state
         if(check1==true&&check2==true&&check3==true){
            let h = Number(val1) / Number(val2) / Number(val3)
            if (isNaN(h)){
               this.setState({hasil:0})
            }else{
               this.setState({hasil:h})
            }
         }else if(check1==true&&check2==true){
            let h = Number(val1) / Number(val2)
            if (isNaN(h)){
               this.setState({hasil:0})
            }else{
               this.setState({hasil:h})
            }
         }else if(check1==true&&check3==true){
            let h = Number(val1) / Number(val3)
            if (isNaN(h)){
               this.setState({hasil:0})
            }else{
               this.setState({hasil:h})
            }
         }else{
            let h = Number(val2) / Number(val3)
            if (isNaN(h)){
               this.setState({hasil:0})
            }else{
               this.setState({hasil:h})
            }
         }
      }
   }

   perkalian=()=>{
      if(this.cekError()==true){
         const{check1,check2,check3,val1,val2,val3}=this.state
         if(check1==true&&check2==true&&check3==true){
            this.setState({
               hasil:Number(val1) * Number(val2) * Number(val3)
            })
         }else if(check1==true&&check2==true){
            this.setState({
               hasil:Number(val1) * Number(val2)
            })
         }else if(check1==true&&check3==true){
            this.setState({
               hasil:Number(val1) * Number(val3)
            })
         }else{
            this.setState({
               hasil:Number(val2) * Number(val3)
            })
         }
      }
   }

   cekError=()=>{
      const{check1,check2,check3}=this.state
      if(check1==false&&check2==false&&check3==false){
         this.setState({
            err1:true,
            err2:true,
            err3:true
         })
         return false
      }else if(check1==false&&check2==false){
         this.setState({
            err1:true,
            err2:true
         })
         return false
      }else if(check1==false&&check3==false){
         this.setState({
            err1:true,
            err3:true
         })
         return false
      }else if(check2==false&&check3==false){
         this.setState({
            err2:true,
            err3:true
         })
         return false
      }else{
         return true
      }
   }

   formatNumber=(num)=> {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
   render(){
      return(
         <ScrollView style={{height:height}}>
            <View style={{height:(height/2)-25}}>
               <View style={{alignItems:'center',paddingTop:30}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:Color.dark}}>
                     Calculator
                  </Text>
               </View>
               <View style={{justifyContent:'flex-end',flex:1}}>
                  <Input
                     val={this.state.val1}
                     click={this.chechlist1}
                     check={this.state.check1}
                     change={(v)=>this.setState({val1:v})}
                     error={this.state.err1}
                  />
                  <Input
                     click={this.chechlist2}
                     check={this.state.check2}
                     val={this.state.val2}
                     change={(v)=>this.setState({val2:v})}
                     error={this.state.err2}
                  />
                  <Input
                     click={this.chechlist3}
                     check={this.state.check3}
                     val={this.state.val3}
                     change={(v)=>this.setState({val3:v})}
                     error={this.state.err3}
                  />
               </View>
            </View>
            
            <View style={{height:height/4,justifyContent:'space-around'}}>
               <View style={{flexDirection:'row',width:width-70,paddingLeft:10}}>
                  <View style={{flex:1,padding:5}}>
                     <TouchableOpacity
                     onPress={this.penjumlahan}
                     style={{borderRadius:7,borderColor:Color.secondary,borderWidth:2,paddingVertical:5,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:Color.primary}}>+</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={{flex:1,padding:5}}>
                     <TouchableOpacity 
                     onPress={this.pengurangan}
                     style={{borderRadius:7,borderColor:Color.secondary,borderWidth:2,paddingVertical:5,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:Color.primary}}>-</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={{flex:1,padding:5}}>
                     <TouchableOpacity 
                     onPress={this.perkalian}
                     style={{borderRadius:7,borderColor:Color.secondary,borderWidth:2,paddingVertical:5,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:Color.primary}}>x</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={{flex:1,padding:5}}>
                     <TouchableOpacity 
                     onPress={this.pembagian}
                     style={{borderRadius:7,borderColor:Color.secondary,borderWidth:2,paddingVertical:5,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:Color.primary}}>:</Text>
                     </TouchableOpacity>
                  </View>
               </View>

               <View
                  style={{paddingVertical:1,backgroundColor:Color.dark,marginVertical:15,width:width-85,marginLeft:15}}
               />
            </View>

            <View style={{height:height/4}}>
               <View style={{flexDirection:'row',width:width-70,paddingLeft:15}}>
                  <View style={{width:width/4}}>
                     <Text style={{fontSize:20,fontWeight:'bold',color:Color.dark}}>
                        Hasil : 
                     </Text>
                  </View>
                  <View style={{flex:1,alignItems:'flex-end'}}>
                     <Text style={{fontSize:20,fontWeight:'bold',color:Color.dark}}>
                        {this.formatNumber(this.state.hasil)}
                     </Text>
                  </View>
               </View>
            </View>
         </ScrollView>
      )
   }
}