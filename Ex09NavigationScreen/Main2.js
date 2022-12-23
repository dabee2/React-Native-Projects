import { NavigationContainer } from "@react-navigation/native";
import React from "react";

// BottomTabNavigator를 만들어주는 함수 import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirestTab from "./screen_bottomtab/FirestTab";
import SecondTab from "./screen_bottomtab/SecondTab";
import ThirdTab from "./screen_bottomtab/ThirdTab";
import { Image } from "react-native";

// BottomTabNavigator 객체 생성
const BottomTab = createBottomTabNavigator()

export default Main2=()=>{

    return(
        <NavigationContainer>
            <BottomTab.Navigator
                initialRouteName="Second"
                screenOptions={{
                    tabBarActiveTintColor:'red',
                    tabBarInactiveTintColor:'black',
                    tabBarActiveBackgroundColor:'gray',
                    tabBarInactiveBackgroundColor:'white',
                    tabBarShowLabel:true,
                    tabBarLabelPosition:'beside-icon',

                }}>    
                <BottomTab.Screen 
                    name='First'
                    component={FirestTab}
                    options={{
                        tabBarLabel:'첫번째',                        
                        tabBarIcon:()=>{return <Image source={require('./image/logo.png')} style={{width:24,height:24,}}></Image>},
                        tabBarBadge:2,
                        headerShown:false,
                    }}></BottomTab.Screen>
                <BottomTab.Screen name='Second' component={SecondTab}></BottomTab.Screen>
                <BottomTab.Screen name='Third' component={ThirdTab}></BottomTab.Screen>
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}