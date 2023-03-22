import {View, Image, Text, StyleSheet, TouchableOpacity, Easing} from 'react-native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Camera from '../screens/Camera';
import Discription from '../screens/Discription';
import { ImgDiscrip } from '../screens/ImgDiscrip';
import Feedback from '../screens/Feedback';


const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

const CustomTabBarButton=({children, onPress})=>(
  <TouchableOpacity style={{
    top:-15,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }} 
  onPress={onPress} >
    <View style={{
      width:100,
      height:90,
      borderRadius:70,
      backgroundColor:'#013705',
      borderWidth:10,
      borderColor:'#013705'
    }}>{children}</View>
  </TouchableOpacity>
)

function HomeTabs(){
    return (
        <Tab.Navigator screenOptions={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarStyle:{
            backgroundColor:'#013705',
            height:60,
            borderTopColor:'transparent',
            position:'absolute',
            bottom:0
          }
        }}
        >
          <Tab.Screen name="Home1" component={Home} options={{
            tabBarIcon:({focused})=>(
              <View style={{alignItems:'center', justifyContent:'center',}}>
                <Image source={require('../assets/icons/home.png')} 
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor:focused?'#75FD6A':'#fff'
                }} />
                <Text style={{color:focused?'#75FD6A':'#fff',fontFamily:'InterMedium',fontSize:10}}>HOME</Text>
              </View>
            )
          }} />

          <Tab.Screen name="Camera" component={Camera} options={{
            tabBarIcon:({focused})=>(
              <Image source={require('../assets/icons/camerap.png')} 
              resizeMode='contain'
              style={{width:35,
              height:35,
              tintColor:focused?'#75FD6A':'#fff'}} />
            ),
            tabBarButton:(props)=>(
              <CustomTabBarButton {...props} />
            )
          }} />


          <Tab.Screen name="Details" component={Feedback} options={{
            tabBarIcon:({focused})=>(
              <View style={styles.iconholder}>
                <Image source={require('../assets/icons/feedback.png')} 
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor:focused?'#75FD6A':'#fff'
                }} />
                <Text style={{color:focused?'#75FD6A':'#fff',fontFamily:'InterMedium',fontSize:10}}>FEEDBACK</Text>
              </View>
            )
          }} />
        </Tab.Navigator>    
      );
     
}



function Tabs() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown:false,
      cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
      }} animation='fade' >
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Discription" component={Discription} />
      <Stack.Screen name="ImgDiscrip" component={ImgDiscrip} />
    </Stack.Navigator>  
  )
}



const styles=StyleSheet.create({
  iconholder:{
    alignItems:'center',
    justifyContent:'center',
  }

})

export default Tabs