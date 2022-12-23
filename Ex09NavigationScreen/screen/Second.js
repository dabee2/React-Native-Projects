import React,{Component} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Home from "./Home";


export default class Second extends Component{
    render(){

        // 화면전환되면서 전달된 데이터를 받기
            // const obj = this.props.root.params

            //구조분해할당
            let {name, age} = this.props.route.params




        return(
            <View style={style.root}>
                <Text style={style.text}>Second Component</Text>

                {/* 전달받은 데이터들 확인 */}
                <Text style={style.text}>{name} : {age}</Text>

                <Button title="go back" onPress={this.clickBtn}></Button>
            </View>
        )
    }

    clickBtn= ()=>{
        this.props.navigation.goBack()
    }
    
}

const style = StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{padding:8, color:"black",}
})