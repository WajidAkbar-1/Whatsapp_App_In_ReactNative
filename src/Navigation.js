import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Chats} from "./Screens/Chats";
import {Status} from "./Screens/Status";
import {Calls} from "./Screens/Calls";
import {Community} from "./Screens/Community";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import materialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createMaterialTopTabNavigator();
export function Navigation() {
    return (
        <Tab.Navigator
            initialRouteName={"Chats"}
        screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarIndicatorStyle: {
                backgroundColor: 'white'
            },
            tabBarLabelStyle: {
                fontWeight: 'bold'
            },
            tabBarStyle: {
                backgroundColor: '#0e806a'
            },
            }}
            >
            <Tab.Screen name={"Community"} component={Community}
                        options={{
                            tabBarIcon: ({color}) => (
                                <MaterialCommunityIcons name="account-group" color={color} size={24} style={{marginTop:17, height: 40}}/>
                            ),
                            tabBarLabel: '',
                        }}
            />
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Status" component={Status} />
            <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e806a',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
