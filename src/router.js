import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Feather } from '@expo/vector-icons'

import Home from "./pages/home";
import Detail from "./pages/detail";

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name="detail" component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}