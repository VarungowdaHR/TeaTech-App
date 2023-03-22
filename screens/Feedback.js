import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";


function Feedback() {
  const [input, setinput] = useState('')
  const onSubmitEdit = () => {
   if(input!=''){
    alert("We respect your feedback. Thank you ❤️ ")
   } 
  }



  return (
    <View style={{flex:1, backgroundColor:'#0b2e22'}}>
      <View style={styles.container}>
        <View style={styles.rate}>
          <Text style={styles.txt}>Rate Us</Text>
          <View>
            <TouchableOpacity onPress={()=>alert('"We respect your feedback. Thank you ❤️ "')} style={{flexDirection:'row',justifyContent:'space-around'}}>
              <Image source={require('../assets/icons/star.png')}  style={styles.img} />
              <Image source={require('../assets/icons/star.png')}  style={styles.img} />
              <Image source={require('../assets/icons/star.png')}  style={styles.img} />
              <Image source={require('../assets/icons/star.png')}  style={styles.img} />
              <Image source={require('../assets/icons/star.png')}  style={styles.img} />
            </TouchableOpacity>
          
          </View>
        </View>
        <View style={styles.rate}>
          <Text style={styles.txt}>We Love Your Feedback</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter your feedback here........" 
          multiline={true} 
          placeholderTextColor="rgba(255, 255, 255, 0.4)" 
          onChangeText={(value)=>setinput(value)} />
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity  onPress={onSubmitEdit} style={styles.btn}>
        <Text style={{color:'#fff', fontFamily:'InterMedium',fontSize:14}}>Submit</Text>
      </TouchableOpacity>
        </View>
      
      </View>
    </View> 
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1, margin:10
  },
  rate:{ width:'100%',marginVertical:10, alignItems:'center'
  },
  txt:{
  fontFamily:'InterBold', fontSize:18, margin:5,color:'#fff',padding:25
  },
  input:{
    height:250,
    width:'100%',
    color:'#fff',
    borderWidth:3,
    borderColor:'#0AA103',
    fontFamily:'InterMedium',
    fontSize:18,
    textAlignVertical: "top",
    padding:14,
    borderRadius:30
  },
  img:{
    width:35, height: 35,margin:10
  },
  btn:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'tomato',
    padding:15,
    borderRadius:30,
    width:'70%',margin:10
  }

})

export default Feedback
