import React, { Component } from "react";
import {Button, Text, View, StyleSheet, Alert, Image} from "react-native";

//RN는 컴포넌트를 상속한 클래스만 화면에 보여짐.
class MainComponent extends Component{

    // Text컴포넌트에 보여질 글씨를 가진 멤버변수
    text="Hello"

    // 화면에 영향을 미치는 값들을 가진 아주 특별한 멤버변수
    // 변수가 여러개 필요할 수도 있기에.. 변수여러개를 가진 객체로 만들어야 함.
    state= {
        msg: "Hello",
        img: require("./image/newyork.jpg"),
    }

    //이 컴포넌트가 보여줄 뷰를 만들어서 리턴해주는 라이프사이클 콜백 메소드
    render(){
        return (
            <View style={style.root}>
                {/* 콜백함수 등록할때 함수명 만 써야 함. ()호출문까지쓰면 화면에 보일떄 자동 실행 됨 */}
                {/* <Button title="button" onPress={clickBtn()}></Button> */}
                {/* 콜백함수를 클래스밖에 전역함수로 지정할 수 있지만 권장하지 않음. */}
                {/* <Button title="button" onPress={clickBtn}></Button> */}

                {/* 그래서 가급적 이벤트 처리용 콜백함수는 멤버메소드로 만들것을 권장함 */}
                {/* JS언어에서는 멤버를 사용할때 반드시 this. 키워드가 있어야만 함. */}
                <Button title="button" onPress={this.clickBtn}></Button>

                {/* 버튼클릭시에 글씨변경해보기 */}
                <Button title="글씨변경" color="green" onPress={this.changeTextByArrowFunction}></Button>
                {/* Text의 글씨가 고정되지 않고 변경되려면 별도의 변수에 글씨가 있어야만 함. */}
                {/* 일반 멤버변수를 사용하면 값변경시 화면갱신이 안됨 */}
                {/* <Text>{this.text}</Text> */}
                {/* 화면갱신에 영향을 주는 아주 특별한 멤버변수 */}
                <Text style={style.msg}>{this.state.msg}</Text>

                {/* 버튼클릭시에 이미지 변경해보기 */}
                <Button title="change image" color={"orange"}></Button>
                {/* 이미지가 변경되려면 state라는 특별한 변수에 이미지 값이 있어야함 */}
                <Image source={this.state.img} style={style.img} onPress={this.changeImage}></Image>
            </View>
            
        )
        
    }//render method..

    changeImage= ()=>{
        // state의 멤버 중에서 변경할 값만 설정하면 다른값들은 그대로 유지됨
        this.setState({img:require("./image/paris.jpg")})
    }

    //화살표 함수
    changeTextByArrowFunction = ()=>{
        //화면에 영향을 미치는 특별한 멤버변수 state를 변경
        //단, setState()라는 메소드를 이용해야만 함.
        this.setState({msg:"Nice to meet you."})        
    }

    // 종합하면 *****************************************
    // 화면에 보이는 값을 가진 멤버는 무조건 state로 만들고
    // 멤버메소드는 화살표함수로 만드는 것이 에러가 별로 없음.
    // *************************************************



    changeTextByState(){
        //state의 변수값을 변경.
        //[주의!] 화면갱신이 되려면 반드시 = 대입연산자 말고
        //this.state.msg="nice"
        //setState()라는 멤버메소드를 이용해야만 자동갱신됨
        this.setState({msg:"nice"}) // <--여기서 에러남
        //이유!
        //this.키워드가 클래스를 지칭하지 않고 이 changeTextState()라는 함수를
        //객체를 인식하여 this가 함수가 되버림.
        //마치 안드로이드에서 Listener 안에서 this 를 사용하면 리스너객체를 의미하는
        //상황과 유사함.
        //this를 함수로 인식하지 않도록 하려면.. 선언적함수나, 익명함수가 아니라..
        //화살표 함수로 만들어야 this가 클래스로 인식됨.
        //그래서 이벤트용 콜백함수들은 특별한 경우가 아니면 무조건 화살표함수로 만들것을 권함.
    }

    clickBtn() {
        //Text컴포넌트를 참조하는 것이 아니라
        //Text컴포넌트가 보여주는 글씨를 가진 변수[this.text]의 값을 변경
        this.text="nice to meet you."
        alert(this.text)
        //값은 변경되었지만 화면을 다시 그리라는(갱신) 명령을 하지 않음.
        //여기서 RN만의 독특한 시스템이 존재함.
        //RN의 컴포넌트들은 state라는 아주 특별한 멤버변수를 기본으로 내장하고 있음.
        //기본적으로 RN의 컴포넌트가 보여주는 값들은 무조건 state라는 변수에 저장해야
        //화면에 보여지고 값 변경시 갱신도 됨.
        //this.text 는 일반멤버변수여서 값이 변경되도 화면갱신이 자동으로 이루어지지 않음.
    }


}//MainComponent class..

// 전역 함수의 위치 MainComponent 클래스 밖임. 즉, 멤버가 아님.
// 버튼을 클릭했을때 발동할 콜백용 함수
// 동작은 되지만. 컴포넌트의 멤버가 아니기에 컴포넌트의 버튼을 클릭하여 발동하는
// 콜백용으로 사용하기는 적합하지 않음. [예. 멤버변수 접근이 불가능..]
function clickBtn2(){
    //경고창
    // alert('aaa')
    //RN용 경고창 다이얼로그
    Alert.alert('PRESS Button')
}

// 컴포넌트들의 스타일을 설정하는 객체
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    
    },
    msg:{
        color:'black',
        fontWeight:'bold',
        marginTop:8,
        paddingLeft:8,
        marginBottom:24,
    },
    img:{
        marginTop:8,
        flex:1,
        width:null,
        resizeMode:'cover'
    }
})



//MainComponent 클래스를 다른 .js 문서에서 사용할 수 있도록..
export default MainComponent