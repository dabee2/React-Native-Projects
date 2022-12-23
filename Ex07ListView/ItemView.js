import React from "react";
import {View,StyleSheet,Text, FlatList, Image, TouchableOpacity} from "react-native"

export default ItemView=(props)=>{
    return(
        <TouchableOpacity style={style.item} onPress={()=>{alert(props.item.name)}}>
        <Image style={style.itemImg} source={props.item.img}></Image>
        <View>
            <Text style={style.itemName}>{props.item.name}</Text>
            <Text style={style.itemMessage}>{props.iteitem.message}</Text>
        </View>
        
    </TouchableOpacity>

    )
}

const style = StyleSheet.create({
    root:{
        flex:1, padding:16,
    },
    text:{
        color:"black",

    },
    item:{
        flexDirection:"row",
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:10,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        color:"black",
        fontWeight:"bold",
    },
    itemMessage:{
        fontSize:16,
        color:"black",
        fontWeight:"bold",
    }
})