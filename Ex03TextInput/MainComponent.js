import React,{Component} from "react";
import{View,Text,Button,TextInput,StyleSheet,Alert} from "react-native"

//다른 js에서 사용할 것이므로 class를 선언하면서 export 까지
export default class MainComponent extends Component{

    //화면에 영향을 주는 특별한 변수
    state={
        text:"Hello",
        text2:"RESULT",
        text3:"result",
    }

    //화면변경에 영향이 없는 일반 멤버변수
    //TextInput의 글씨가 변경될때 마다 그 글씨를 저장하는 변수
    data=""

    render(){
        return(
            <View style={style.root}>
                {/* 사용자 글씨 입력 컴포넌트 */}
                {/* 스타일이 없으면 존재가 안보임. */}
                {/* 기본적으로는 한줄 입력 */}
                <TextInput style={style.input}></TextInput>

                {/* 글씨를 변경할때 마다 입력된 글씨가 아래쪽에 Text컴포넌트에 보이도록 */}
                <TextInput onChangeText={this.changeText} style={style.input}></TextInput>
                <Text style={style.txt}>{this.state.text}</Text>

                {/* 글씨를 입력하고 키보드의 완료버튼을 눌렀을때 써있는 글씨를 Text에 보여주기 */}
                <TextInput style={style.input} onSubmitEditing={this.submitEdit}></TextInput>
                <Text style={style.txt}>{this.state.text2}</Text>

                {/* 글씨를 입력하고 아래 위치한 버튼을 클릭했을때 글씨를 보여주기 */}
                {/* 여러줄 입력 속성 */}
                <TextInput multiline={true} numberOfLines={5} onChangeText={this.changeText2} style={style.input} ></TextInput>
                <Button onPress={this.show} title="입력완료"></Button>
                <Text style={style.txt}>{this.state.text3}</Text>
            </View>
        )
    }// render method

    // 버튼 클릭시 일반멤버변수에 저장된 글씨를 Text컴포넌트의 state값으로 설정
    show=()=>{
        this.setState({text3:this.data})
    }

    //TextInput의 글씨가 변경될때 마다 그 글씨를 일반변수에 저장
    changeText2= (value)=>{
        this.data=value
    }


    //TextInput컴포넌트의 입력을 완료하고 키보드의 완료버튼을 클릭했을때 반응하도록 등록한 콜백용 메소드
    submitEdit= (obj)=>{//완료버튼 클릭시 써있는 글씨를 가진 이벤트 객체가 파라미터로 옴.[SubmitEvent객체라고 부름]
        
        this.setState({text2:obj.nativeEvent.text})
    }

    //TextInput컴포넌트의 글씨가 변경될때 마다 발동하도록 등록한 콜백용 메소드
    changeText = (value) =>{ // 변경된 글씨가 이 ㅋㄹ백 용 메소드의 파라미터로 전달되어 옴.
        //Text컴포넌트가 보여주는 값을 가진 state 변수의 값을 변경
        this.setState({text:value})
    }

}// MainC

//스타일 객체
const style = StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    input:{
        borderWidth:2,
        backgroundColor:"white",
        borderColor:"green",
        borderRadius:8,
        paddingHorizontal:16,
        marginTop:16,
    },
    txt:{
        marginTop:8,
        fontWeight:'bold',
        padding:8,
        color:"black",
    }
})