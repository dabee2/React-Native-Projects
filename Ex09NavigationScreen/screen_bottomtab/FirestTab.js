import React from "react";
import {View,Text,StyleSheet} from 'react-native'

export default FirstTab=()=>{

    return(
        <View style={style.root}>
            <Text style={style.text}>FirstTab</Text>
        </View>
    )
}


const style = StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center',},
    text:{padding:8,color:'black',},
})