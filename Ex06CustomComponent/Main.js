import React,{Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2'
import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
import MyComponent5 from './MyComponent5'

export default class Main extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.title}>Custom Component</Text>

                {/* 나만의 Component 만들어 사용해보기 [마치 Fragment 처럼] */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>

                {/* 별도의 컴포넌트를 사용할때 다른 데이터가 보이도록. 값을 전달,함수도 전달가능*/}
                <MyComponent2 aaa='SAM' btnTitle='로그인' color='green' onPress={this.clickBtn}></MyComponent2>
                <MyComponent2 aaa='ROBIN' btnTitle='click me' color='indigo' onPress={this.clickBtn}></MyComponent2>

                {/* Component를 상속받는 클래스를 만들어서 사용하는 방법이 다소 코드가 길다는 느낌 */}
                {/* 함수도 객체니까.. 함수를 Component역할로 사용할 수도 있음. */}
                {/* Functional Component(함수형 컴포넌트) 라고 부름 - 요즘 대세 */}

                {/* 컴포넌트를 리턴하는 함수를 호출하여 컴포넌트를 보여주기 */}
                { MyComponent3() }
                {/* 이 함수를 마치 컴포넌트처럼 태그문으로 사용할 수 있도록 허용 */}
                <MyComponent3></MyComponent3>

                {/* 함수형컴포넌트를 사용하면서 값 전달하기 */}
                <MyComponent4 name='SAM' title='press' color='yellow'></MyComponent4>
                <MyComponent4 name='ROBIN' title='click' color='aqua'></MyComponent4>

                {/* 함수형컴포넌트에서 state 사용해보기 */}
                <MyComponent5></MyComponent5>



            </View>
        )
    }

    clickBtn= ()=>{
        alert("clicked button")
    }

}

// style object
const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    title:{color:'black', fontSize:24, padding:8, fontWeight:'bold',},
})