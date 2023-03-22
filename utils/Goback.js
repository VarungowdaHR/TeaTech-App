import { TouchableOpacity, Image, StyleSheet} from 'react-native'

export default function Goback({navigation}) {
  return (
    <TouchableOpacity style={styles.img} onPress={ ()=> navigation.goBack() }>
        <Image source={require('../assets/icons/back.png')} style={{width:20, height:20}} />
    </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
    img:{
        position:'absolute',
        top:20,
        left:10,
        width:40,
        height:40,
        borderRadius:50,
        backgroundColor:'#E8FCE6',
        tintColor:'#063A01',
        alignItems:'center',
        justifyContent:'center'
      }
})