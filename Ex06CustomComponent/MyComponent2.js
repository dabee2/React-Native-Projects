import React,{Component} from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'

export default class MyComponent2 extends Component{    
    render(){
        return (
            <View style={style.root}>
                {/* 이 컴포넌트를 사용하는 쪽(Main.js)에서 속성으로 전달한 값은 */}
                {/* props라는 아주 특별한 멤버변수에 저장되어 있음. */}
                {/* 전달할때 사용한 속성명이 props의 멤버로 존재하게 됨 */}
                <Text style={style.text}>안녕하세요. {this.props.aaa} 님</Text>
                <Button onPress={this.props.onPress} color={this.props.color} title={this.props.btnTitle}></Button>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{margin:4,},
    text:{color:'blue',padding:2,},
})