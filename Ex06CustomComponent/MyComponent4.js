import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

const MyComponent4= (props)=>{ //속성으로 전달된 값들이 파라미터로 전달됨
    return (
        <View style={style.root}>
            {/* 함수형컴포넌트는 Component클래스를 상속하지 않았기에 */}
            {/* props라는 아주 특별한 멤버변수가 없음. */}
            {/* 대신 함수형 컴포넌트에 속성으로 전달된 값들을 멤버로 가진 하나의 객체가 */}
            {/* 이 함수의 파라미터로 전달되어 옴. */}
            <Text style={style.text}>Hello {props.name} </Text>
            <Button title={props.title} color={props.color}></Button>
        </View>
    )
}

const style= StyleSheet.create({
    root:{margin:4,},
    text:{color:'indigo',padding:2,},
})

export default MyComponent4