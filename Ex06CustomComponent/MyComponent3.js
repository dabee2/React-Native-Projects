import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'

//class로 컴포넌트를 만들지 않고 함수로 컴포넌트의 역할을 대신
//화살표 함수
const MyComponent3= ()=>{
    return (
        <View style={style.root}>
            <Text style={style.text}>함수형 컴포넌트</Text>
        </View>
    )
}

const style= StyleSheet.create({
    root:{margin:4,},
    text:{color:'green', padding:2},
})

export default MyComponent3