import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Feather, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

import Home from "./pages/home";
import Detail from "./pages/detail";

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="home"
                    component={Home}
                    options={{
                        title: "ALUGUE",
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 15}}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        )
                    }}    
                />
                <Stack.Screen 
                    name="detail"
                    component={Detail}
                    options={({ navigation }) => ({
                        title: "Detalhe",
                        headerTitleAlign: 'left',
                        headerTitleStyle: { 
                            fontSize: 20, 
                            fontWeight: 'bold', 
                            fontFamily: 'Montserrat_700Bold',
                        },
                        headerLeft: () => (
                            <TouchableOpacity 
                                onPress={() => navigation.goBack()} 
                                style={{ marginLeft: 10 }}
                            >
                                <Ionicons 
                                    name="chevron-back" 
                                    size={32} 
                                    color="black" 
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 15}}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        )
                    })}   
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}