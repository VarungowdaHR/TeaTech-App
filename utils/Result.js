import { Text, View, StyleSheet, SectionList } from "react-native"
import DiseaseData from '../constants/data'
import Loading from "./Loading"


function Result({res}) {
    
    if(res){

        if(res == 'Image Not Clear' ){
            return(
                <View style={{flex:1}}>
                    <Text style={styles.type}>Image Not Clear</Text>
                </View>
            )
        }

        if(res == 'Healty Leaf'){
            return(
                <View style={{flex:1}}>
                    <Text style={styles.type}>Healty Leaf</Text>
                </View>
            )
        }else{
            for(let i=0;i<5;i++){
            if(DiseaseData[i].name == res){
                const data=DiseaseData[i]

                return(
                    <View style={{flex:1}}>
                        <Text style={styles.type}>Disease: {data.name}</Text>
                        
                        <SectionList
                            sections={[
                            {title: 'Symptoms :', data: data.Symptoms},
                            {title: 'Management :', data: data.Management},
                            {title: 'Survival_and_spread :', data: data.Survival_and_spread}
                            ]}
                            renderItem={({item}) => 
                                <View style={{flex:1, flexDirection:'row', padding:4}}>
                                    <Text style={{color:'white'}}> *  </Text>
                                    <Text style={styles.txt}>{item}</Text>
                                </View>
                            }
                            renderSectionHeader={({section}) => 
                                <View  style={styles.title}>
                                    <Text style={{color:'white',fontFamily:'InterSemiBold',fontSize:20,marginLeft:15}}>{section.title}</Text>
                                </View>
                            }
                            showsVerticalScrollIndicator={false} />
                    </View>
                    
                )
            }
        }
        } 
    }

  return (
    <Loading />
  )
}

const styles=StyleSheet.create({

    title:{
        padding:15,
        width:'100%',
        color:'#ffffff',
        backgroundColor:'#F82727',
        borderRadius:30,

    },

    txt:{
        flex:1,
        flexWrap:'wrap',
        color:'#ffffff',
        fontFamily:'InterRegular',
        fontSize:16

    },

    type:{
        padding:15,
        width:'100%',
        color:'#ffffff',
        fontFamily:'InterBold',
        fontSize:20,
        textAlign:'center'
    }
})


export default Result