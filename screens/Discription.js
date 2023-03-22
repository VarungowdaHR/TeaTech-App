import {View, Image, StyleSheet, SafeAreaView} from "react-native"
import DiseaseModel from "../components/DiseaseModel";
import FocusedStatusBar from "../components/FocusedStatusBar";
import Goback from "../utils/Goback";

const Discription = ({route, navigation}) => {

    const image=route.params.image;
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#201E09',}}>
      <FocusedStatusBar backgroundColor='#201E09' />
        <View style={styles.container}>
            <Image source={{uri: image.uri}}  style={{width:'100%', height: '100%' ,borderRadius:35,}}  />
            <Goback navigation = {navigation} />    
        </View>
        <View style={{flex:1}}>
          {image? <DiseaseModel imagedata={image.uri} />:null}
        </View>
    </SafeAreaView>
     
  )
}

const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:'37%',
    borderRadius:35,
    backgroundColor:'#201E09',
    marginBottom:5,
    shadowColor: '#FFFE02',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 60,
    elevation:15,
    position:'relative',
    top:0,
  }
})


export default Discription