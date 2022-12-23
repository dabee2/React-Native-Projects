import React from "react";
import {View,Text,StyleSheet} from 'react-native'

export default ThirdTab=()=>{

    return(
        <View style={style.root}>
            <Text style={style.text}>ThirdTab</Text>
        </View>
    )
}


const style = StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center',},
    text:{padding:8,color:'black',},
})