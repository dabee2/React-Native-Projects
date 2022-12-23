import React, {Component} from "react"
import {View} from "react-native"

export default class Main extends Component{
    render(){
        return (
            // RN는 컴포넌트 1개만 return 할 수 있음. 그래서 여러개를 배치하려면
            // ViewGroup용 컴포넌트가 하나 필요함. RN에서 그룹용 클래스가 View 임

            // 1) 3개의 자식뷰 배치하기 
            // <View>
            //     {/* 뷰의 크기값은 숫자(단위:dp)이거나 %단위로 지정할 수 있음. */}
            //     {/* 단위를 쓸때는 문자열로 값을 지정해야함. */}
            //     <View style={{width:50,height:50,backgroundColor:"red"}}></View>
            //     <View style={{width:100,height:100,backgroundColor:"green"}}></View>
            //     <View style={{width:"50%",height:150,backgroundColor:"blue", left:50}}></View>
            // </View>

            //2) 자식뷰들의 높이값을 숫자로 명시하면 디바이스별 해상도에 대응하기 어려움
            //   자식뷰의 높이값을 화면 해상도의 비율에 맞게 설정하는 속성값 : flex [마치 android의 layouy-weight 비슷]
            //   자식뷰가 비율로 높이를 지정하려면.. 부모뷰의 높이값이 있어야 함.
            // <View style={{height:600}}>
            //     <View style={{backgroundColor:"red",flex:1}}></View>
            //     <View style={{backgroundColor:"green",flex:2}}></View>
            //     <View style={{backgroundColor:"blue",flex:4}}></View>
            // </View>

            //3) 부모뷰의 높이값을 숫자로 지정하면 해상도에 대응이 어려움
            //   부모뷰의 높이도 비율로 지정할 것을 권장[flex:1] - android의 높이값 match-parent 와 같음
            // <View style={{flex:1}}>
            //     <View style={{backgroundColor:"red",flex:1}}></View>
            //     <View style={{backgroundColor:"green",flex:2}}></View>
            //     <View style={{backgroundColor:"blue",flex:4}}></View>
            // </View>

            //4) 자식뷰들의 배치 방향(direction)이 기본적으로 수직(column)인데..
            //   수평배치로 설정 [자식뷰들의 flex값은 높이가 아니라 너비가 됨]
            // <View style={{flex:1, flexDirection:"row"}}>
            //     <View style={{backgroundColor:"red",flex:1}}></View>
            //     <View style={{backgroundColor:"green",flex:1}}></View>
            //     <View style={{backgroundColor:"blue",flex:1}}></View>
            // </View>

            //5) 자식뷰들의 높이와 너비를 개별 지정하여 배치하고 정렬하기
            //   flex스타일에서 정렬속성은 2개 : justifyContent, alignItems
            //   alignItems:'strech' 모드는 사이즈가 없을 때만 가능함. [default 설정값]
            // <View style={{flex:1, flexDirection:"column",justifyContent:"space-around", alignItems:"baseline"}}>
            //     <View style={{backgroundColor:"red",width:50,height:50}}></View>
            //     <View style={{backgroundColor:"green",width:50,height:50}}></View>
            //     <View style={{backgroundColor:"blue",width:50,height:50}}></View>
            // </View>

            //6 direction을 'row'로 해보기
            // <View style={{flex:1, flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
            //     <View style={{backgroundColor:"red",width:50,height:50}}></View>
            //     <View style={{backgroundColor:"green",width:50,height:50}}></View>
            //     <View style={{backgroundColor:"blue",width:50,height:50}}></View>
            // </View>

            //7) 자식뷰의 높이값을 숫자와 flex를 혼합사용
            // <View style={{flex:1,flexDirection:"column"}}>
            //     <View style={{height:50,backgroundColor:"red"}}></View>

            //     {/* 나머지 자식뷰들은 flex로 높이값 지정 [남은 공간을 비욜로 차지함] */}
            //     <View style={{flex:1,backgroundColor:'green'}}></View>
            //     <View style={{flex:2,backgroundColor:'blue'}}></View>
            // </View>

            //8) 중첩구조로 뷰 영역들 배치하기
            // <View style={{flex:1,flexDirection:"column"}}>
            //     {/* 크게 수직으로 2분할 [1:2 비율] */}

            //     {/* 8.1) 상단 1의 영역 */}
            //     <View style={{flex:1,flexDirection:"row"}}>            
            //         <View style={{flex:2,backgroundColor:'red'}}></View>
            //         <View style={{flex:1,}}>
            //             <View style={{flex:1,backgroundColor:'yellow'}}></View>
            //             <View style={{flex:2,backgroundColor:'brown'}}></View>
            //         </View>
            //     </View>
            //     {/* 8.1) 상단 1의 영역 */}
            //     <View style={{flex:2, flexDirection:"row"}}>
            //         <View style={{flex:1,backgroundColor:'green'}}></View>
            //         <View style={{flex:2,backgroundColor:'blue'}}></View>
            //     </View>            
            // </View>

            //9) 기본적으로는 LinearLayout처럼 뷰들이 겹치지 않음
            //   뷰를 겹쳐서 배치해보기.. [position속성 : absolute, fixed]
            <View style={{flex:1,flexDirection:"column"}}>
                {/* 크게 수직으로 2분할 [1:2 비율] */}

                {/* 8.1) 상단 1의 영역 */}
                <View style={{flex:1,flexDirection:"row"}}>            
                    <View style={{flex:2,backgroundColor:'red'}}>

                        {/* 뷰를 겹친다는 것은 절대적 위치 설정값으로 배치하는 것임 */}
                        {/* absolute 포지션의 기준좌표는 좌상단 */}
                        <View style={{width:50,height:50,backgroundColor:"white",left:10,top:10, position:"absolute"}}></View>
                        <View style={{width:50,height:50,backgroundColor:"gray",left:20,top:20, position:"absolute"}}></View>



                    </View>
                    <View style={{flex:1,}}>
                        <View style={{flex:1,backgroundColor:'yellow'}}></View>
                        <View style={{flex:2,backgroundColor:'brown'}}></View>
                    </View>
                </View>

                {/* 8.1) 상단 1의 영역 */}
                <View style={{flex:2, flexDirection:"row"}}>
                    <View style={{flex:1,backgroundColor:'green'}}></View>
                    <View style={{flex:2,backgroundColor:'blue'}}></View>
                </View>            
            </View>

        )
    }
}