//리액트 라이브러리 사용
import React, { Component } from "react"
//리액트 네이티브 라이브러리의 클래스들 import
import { Button, Text, View, StyleSheet, Image } from "react-native"



//리액트 네이티브는 Component를 상속받은 클래스들만이 화면에 보여질 수 있음.
class MyApp extends Component{
    //리액트의 Component클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드[콜백메소드-라이프사이클 메소드]
    //이 메소드에서 리턴한 뷰가 화면에 보여짐
    //리액트 네이티브는 JS와 XML언어를 하나의 문서안에서 혼합하여 사용할 수 있는 JSX 언어를 사용함.
    render(){
        // return <Text>Hello world!</Text>

        //지역변수. 
        let name="SAM"
        let btnTitle = "click me"

        //2개 이상의 뷰들을 배치 - return에 여러개가 불가능 하니. 그룹으로 묶어야 함.
        //그룹용으로 사용하는 컴포넌트 : View
        //JSX언어는 JS안에 XML사용가능, XML안에서 JS변수,함수 사용도 가능함
        //XML영역안에서 {} 사용하면 JS의 변수,함수를 사용할 수 있음.
        //스타일 적용하기.. CSS와 비슷한데 조금 다른방식임
        //style속성의 값은 반드시 JS로 만든 객체여야함.
        //가급적 style속성값으로 적용하는 객체는 StyleSheet 클래스를 이용하여
        // 만든 객체를 설정할 것을 권장!
        return (
            <View style={style.root}>
                <Text style={style.title}>Hello {name} 님</Text>
                <Text style={style.msg}>Nice to meet you.</Text>
                {/* Button컴포넌트는 style속성이 없음. */}
                {/* <Button title={btnTitle}></Button> */}
                {/* 혹시 스타일을 주고 싶다면. Button을 감싸는 뷰를 만들어 적용 */}
                <View style={{marginTop:16,}}>
                    <Button title='button'></Button>
                </View>

                {/* 이미지 컴포넌트 사용해보기 */}
                {/* 이미지의 source값은 이미지객체를 만들어서 주어야 함. */}
                {/* RN에서 이미지객체를 만드는 함수가 존재함. : require() */}
                <Image source={ require('./image/bg_note.jpg') } style={style.img}></Image>

            </View>
        )

    

    }


}

// 아래처럼 스타일별로 객체를 만들고 변수로 참조하는 방식은
// 추후 코드가 길어지면.. 식별이 다소 어려워짐. 그리고 자동완성도 안됨
// 그래서 스타일만을 위해 등장한 전용클래스 : StyleSheet [권장]
const style=StyleSheet.create({
    root:{ 
        flex:1,
        backgroundColor:"#AAFFFF",
        padding:16,
    },
    title:{
        color:"red",
        fontSize:20,
        fontWeight:"bold",
        margin:16,
    },
    msg:{
        color:"black",
        padding:8,
    },
    img:{
        margin:4,
        flex:1,
        width:null, //null을 주면 화면 너비만하게..
        resizeMode:'contain',
    },
})

// 스타일 값을 설정한 리터럴 객체 - css와 비슷한데 조금 다름
const rootStyle= {
    backgroundColor:"#AAFFFF",
    //View의 세로사이즈는 기본 wrap으로 되어 있어서
    //화면 전체 사이즈가 되도록 설정
    // height: '100%', //단위 표시하려면 '' 필요 
    //RN는 기본 배치 스타일이 flex로 되어 있음.
    //flex 스타일에서 뷰들끼리의 상대적 값으로 크기를
    //결정하는 flex-grow 속성이 있음. 이게 RN에서는
    //그냥 flex 속성명으로 변경
    flex: 1,
    padding:16,
    // flexDirection:'row'  가로방향 기본방향은 'column'(세로) 설정.
}

let textStyle = {
    color:"red",
    fontSize:20, //기본단위dp
    fontWeight: "bold",
    margin: 16,
}
const plainText = {
    margin:8,
    color:'black',

}
// 버튼 스타일 객체
const btnStyle = {
    margin:40,
    color:"blue",
}


//이 .js 문서 밖에서 MyApp 클래스를 인식할 수 있도록.. export
export default MyApp