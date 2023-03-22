import {View, Image, SafeAreaView} from "react-native"
import Result from "../utils/Result"
import Goback from "../utils/Goback"
import FocusedStatusBar from "../components/FocusedStatusBar"

export const ImgDiscrip = ({route, navigation}) => {
    const {image, name}=route.params

return ({image}?(
    <SafeAreaView style={{flex:1, backgroundColor:'#201E09'}}>
      <FocusedStatusBar backgroundColor='#201E09' />
        <View style={{ width:'100%', height:'40%',position:'relative', top:0,borderRadius:35,}}>
          <Image source={image} style={{width:'100%', height:'100%',borderRadius:35,}} />
          
          <Goback navigation = {navigation} />

        </View> 

        <Result res={name} />

    </SafeAreaView>):<View style={{flex:1, backgroundColor:'#201E09'}}></View>
  )
}

