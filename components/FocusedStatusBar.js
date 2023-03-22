import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar=(props)=>{

    const isfocused=useIsFocused();

    return isfocused? <StatusBar animated={true} {...props} /> : null; 
}

export default FocusedStatusBar