import React,{Component} from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default class Home extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Home Component</Text>
                <Button title="go to Second" onPress={this.clickBtn}></Button>
                <Button title="go to Second with 현재화면 finish" onPress={this.clickBtn2} color = 'green'></Button>
                <Button title="go to Second with Data" onPress={this.clickBtn3} color = 'yellow'></Button>
            </View>
        )
    }

    clickBtn=()=>{
        // react navigation을 이용하여 화면 전환하는 코드
        // Navigator의 Screen으로 등록된 컴포넌트들에서 자동으로 
        // 화면을 전환하는 능력을 가진 객체 하나가 전달됨.
        // 이 객체를 이용하여 화면을 전환함.
        // 컴포넌트에 전달된 데이터는 자동으로 props 라는 특별한 멤버변수에
        // 자동저장됨
        this.props.navigation.navigate('Second') // Second 화면은 자동으로 '업버튼'이 존재함
    }

    clickBtn2= ()=>{
        this.props.navigation.replace('Second') // 현재화면 finish 하며 이동[Second 화면에 '업버튼'이 없음]
    }

    clickBtn3= ()=>{
        //화면 전환하면서 데이터를 가지고 이동하기 [name,age 전달해보기] 
        this.props.navigation.navigate('Second',{name:'sam',age:'20'}) // 두번째 파라미터에 전달할 데이터를 객체로 만들어 전달
        
    }
    
}

const style = StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{padding:8, color:"black",}
})

