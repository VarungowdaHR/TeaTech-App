import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { Header1 } from "../components/Header";
import DiseaseData from '../constants/data';
import DiseaseCard from "../components/DiseaseCard";



const Home=({navigation})=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <FocusedStatusBar backgroundColor="#081900" />
                <View style={{zIndex:1,flex:1,marginBottom:60}}>
                    <FlatList
                        data={DiseaseData}
                        renderItem={({ item }) => <DiseaseCard data={item} navigation={navigation} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<Header1 />} />
                </View>
                <View style={{position: "absolute",top: 0,bottom: 0,right: 0,left: 0, zIndex: -1}} >
                    <View style={{ height: 300, backgroundColor: '#0b2e22' }} />
                    <View style={{backgroundColor:'#0b2e22',flex:1, }} />
                </View>
        </SafeAreaView>
    )
}


export default Home