import React,{Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class MyComponent extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.text}>나만의 컴포넌트</Text>
                <Button title='버튼'></Button>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{margin:4,},
    text:{color:'black',padding:2,},
})