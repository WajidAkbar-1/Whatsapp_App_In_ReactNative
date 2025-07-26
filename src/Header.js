import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Feather, Fontisto, Entypo} from "react-native-vector-icons"
export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>WhatsApp</Text>
                <View style={styles.iconcontainer}>
                    <Feather name="camera" size={20} color="white" style={{marginRight: 20}}/>
                    <Fontisto name="search" size={20} color="white" style={styles.icon}/>
                    <Entypo name="dots-three-vertical" size={20} color="white" style={styles.icon}/>

                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#0e806a',
        paddingTop: 30,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
    },
    header: {
        fontSize: 18,
        color: "white",
    },
    iconcontainer: {
        flexDirection: "row",
        width: 100,
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 200,
    },
    icon: {
        marginRight: 6,

    }


});
