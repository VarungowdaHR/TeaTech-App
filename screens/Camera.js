import { Text, SafeAreaView, TouchableOpacity, View, StyleSheet, ImageBackground } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

function OpenCamera({navigation}) {

  const [image, setImage] = useState(null)
  const [cameraPermission, setCameraPermission] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(null);

  useEffect(()=>{
    if(image!=null){
      navigation.navigate('Discription',{image})
    }

  },[image])


  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(cameraPermission.status === 'granted');
    console.log();
    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    setGalleryPermission(imagePermission.status === 'granted');
  }

  useEffect(() => {
    permisionFunction();
  }, []);


  const openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      base64:true
    });

    if(!pickerResult.cancelled){
      setImage(pickerResult)
    }
  }
  



  // Open camera
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      aspect: [3, 4],
      quality: 1,
      base64:true
    });
    if(!result.cancelled){
      setImage(result)
    }

    
  }

  return (
    <SafeAreaView style={{flex:1}}>
        <FocusedStatusBar backgroundColor="#081900" />
        <ImageBackground source={require('../assets/images/final.jpg')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
          <View style={styles.container}>
            <View style={styles.box}>
                  <TouchableOpacity onPress={openCamera}>
                    <Text  style={styles.btn}>Capture Image</Text>
                  </TouchableOpacity>

                  <Text style={{color:'#fff', fontFamily:'InterMedium'}}>OR</Text>
                  <TouchableOpacity onPress={openImagePickerAsync} >
                    <Text style={styles.btn}>Upload from device</Text>
                  </TouchableOpacity>
          </View>
        </View>
    </ImageBackground>
       
    </SafeAreaView>
  )
}




const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:'50%',
    alignItems:'center',
    justifyContent:"center",
  },
  box:{
    flexDirection:"column",
    alignItems:"center",
    justifyContent:'center',
    padding:15,
    backgroundColor:'rgba(255, 255, 255, 0.1)',
    borderRadius:30,
    borderBottomColor:'rgba(255, 255, 255, 0.5)',
    borderLeftColor:'rgba(255, 255, 255, 0.5)',
    borderRightColor:'rgba(0, 0, 0, 0.5)',
    borderTopColor:'rgba(0, 0, 0, 0.5)',
    borderWidth:1,

  },
  btn:{
    minWidth:'60%',
    textAlign:'center',
    padding:20,
    margin:10,
    backgroundColor:'#E84C03',
    color:'white',
    borderRadius:30,
    fontFamily:'InterSemiBold',
    fontSize:14,
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation:50,
    borderWidth:1,
  }

})

export default OpenCamera