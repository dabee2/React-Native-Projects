import React from "react";
import {View, TextInput, StyleSheet} from 'react-native'

// 재 사용될 컴포넌트
export default InputComponent=(props)=>{
    return(
        <View style={style.container}>
            <TextInput
                onChangeText={props.onChangeText} //글씨가 변경될때 마다 실행될 콜백함수를 property로 전달받기
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder} //컴포넌트
                style={style.input}></TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingHorizontal:16,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginTop:8,
        marginBottom:8,
    },
    input:{
        flex:1,
        color:'#292929'
    }
})