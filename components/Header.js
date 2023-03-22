import {View, Image, Text, TouchableOpacity} from 'react-native'

export function Header1() {
  return (
    <View style={{ backgroundColor: '#0b2e22', padding: 5, marginTop:10,flex:1}}>
      <View style={{flexDirection: "row",justifyContent: "space-between",alignItems: "center"}}>
          <Image source={require('../assets/icons/logo.png')} resizeMode="contain" style={{ width: 170, height: 70 }} />
          <TouchableOpacity onPress={()=>alert('Sorry, Menu bar is currently disabled')}>
            <Image
          source={require('../assets/icons/more.png')}
          resizeMode="contain"
          style={{ width: 35, height: 35, tintColor:'#E6FEEB', margin:15 }}
        />
          </TouchableOpacity>
        
      </View>

      <View style={{ marginVertical: 20, marginHorizontal:12 }}>
        <Text style={{fontSize: 25,fontFamily:'InterBold', color:'#EEFDF1',}}>
          Tea Leaf
        </Text>
        <Text style={{fontSize: 15,fontFamily:'InterSemiBold', color:'#EEFDF1',}}>
          Disease Detector
        </Text>
      </View>
    </View>
    
    
  )
}
