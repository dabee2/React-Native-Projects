import React,{Component} from "react";
import {View,StyleSheet,Text, FlatList, Image, TouchableOpacity} from "react-native"
import ItemView from "./ItemView";

export default class Main extends Component{


    // RN에서 대량의 데이터를 보여주는 List형태의 뷰를 위한 컴포넌트 : FLatList
    
    //1. 먼저 단순한 연습을 위해 문자열만으로 있는 배열 데이터들(대량의 데이터들)
    state={
        datas:["aaa","bbb","ccc","ddd"],
        datas2:[
            {name:"sam",message:"Hello world",img:require('./image/moana01.jpg')},
            {name:"robin",message:"Hello RN",img:require('./image/moana02.jpg')},
            {name:"hong",message:"Hello android",img:require('./image/moana03.jpg')},
            {name:"kim",message:"Hello world",img:{uri:"https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_960_720.jpg"}},
            {name:"park",message:"Hello world",img:{uri:"https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_960_720.jpg"}},
        ],
    }

    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Flat List Test</Text>

                {/* 1. this.state.datas 라는 대량의 데이터를 Text컴포넌트들로 보여주기 */}
                {/* FlatList 사용 - 필수속성이 2개*/}
                {/* 1) data      - FlatList가 보여줄 대량의 데이털르 지정 */}
                {/* 2) renderItem    - 아이템 하나의 모양(컴포넌트)를 만들어서 리턴해주는 콜백함수 지정 */}
                <FlatList
                    data={this.state.datas}
                    renderItem={(obj)=>{// 이 콜백함수의 파라미터로 객체하나가 전달됨
                        // 이 파라미터 객체안에 3개의 멤버변수가 존재함 [item,index,array]
                        return<Text>{obj.index} : {obj.item}</Text>
                    }}></FlatList>

                {/* 2. FlatList의 renderItem 콜백함수 파라미터를 '구조분해할당'기법으로 사용해보기 */}
                <FlatList
                    data={this.state.datas}
                    renderItem={({item,index})=>{// 이 콜백함수의 파라미터로 객체하나를 구조분해 할당
                        // 이 파라미터 객체안에 3개의 멤버변수가 존재함 [item,index,array]
                        return<Text>{index} : {item}</Text>
                    }}></FlatList>

                {/* 3. 조금더 Item 하나의 모양이 복잡한 것 */}
                <FlatList
                    data={this.state.datas2}
                    renderItem={({index,item})=>{
                        return(
                            <TouchableOpacity style={style.item} onPress={()=>{alert(item.name)}}>
                                <Image style={style.itemImg} source={item.img}></Image>
                                <View>
                                    <Text style={style.itemName}>{item.name}</Text>
                                    <Text style={style.itemMessage}>{item.message}</Text>
                                </View>
                                
                            </TouchableOpacity>
                        )
                    }}
                ></FlatList>

                {/* 4. 아이템하나 컴포넌트를 별도의 함수형 컴포넌트로 제작 */}
                <FlatList
                    style={{marginTop:24}}
                    data={this.state.datas2}
                    renderItem={({item,index})=>{
                        return <ItemView item={item} index={index}></ItemView>
                    }}
                ></FlatList>
                    

            </View>
        )
    }
}
const style = StyleSheet.create({
    root:{
        flex:1, padding:16,
    },
    text:{
        color:"black",

    },
    item:{
        flexDirection:"row",
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:10,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        color:"black",
        fontWeight:"bold",
    },
    itemMessage:{
        fontSize:16,
        color:"black",
        fontWeight:"bold",
    }
})