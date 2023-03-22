import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const DiseaseCard = ({ data, navigation }) => {


  return (
    <View
      style={{
        backgroundColor: '#204E0F',
        borderRadius: 20,
        margin:10,
        flex:1,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 60,
        elevation:3,
        marginBottom:20
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius:30,
          }}
        />
      </View>

      <View style={{ width: "100%",flex:1, alignItems:'center', justifyContent:'space-between', flexDirection:'row', padding:10, height:100}}>
        <View>
          <Text style={{fontFamily:'InterMedium',fontSize: 14, color:'white'}}>Disease Type:</Text>
          <Text style={{fontFamily:'InterSemiBold',fontSize: 18, color:'white',padding:5}}>{data.name}</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('ImgDiscrip',{image:data.image, name:data.name})}}>
            <Text style={{fontFamily:'InterMedium', color:'white'}}>View more</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles=StyleSheet.create({
  btn:{
    backgroundColor:'#FB6E2C',
    paddingHorizontal:19,
    paddingVertical:10,
    borderRadius:30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 15,
  }
})

export default DiseaseCard;