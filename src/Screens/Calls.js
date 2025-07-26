import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Feather} from "react-native-vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export  function Calls() {
    return (
        <View style={styles.container}>
            <View style={styles.insideContainer}>
                <View style={styles.chating}>
                    <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50}}/>
                    <View style={styles.chatbody}>
                        <Text style={styles.text}>Mota</Text>
                        <View style={{flexDirection:"row"}}>
                            <Feather name={"arrow-down-left"} size={18} color={"red"} style={{marginTop:2}}/>
                            <Text style={styles.msg}>Yesterday, 12:50 PM</Text>
                        </View>
                    </View>
                    <View style={styles.time}>
                        <FontAwesome name={"phone"} size={27} color={"green"} style={{marginLeft: 140}}/>
                    </View>
                </View>

                <View style={styles.chating}>
                    <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50}}/>
                    <View style={styles.chatbody}>
                        <Text style={styles.text}>Attaullah</Text>
                        <View style={{flexDirection:"row"}}>
                            <Feather name={"arrow-up-right"} size={18} color={"green"} style={{marginTop:2}}/>
                            <Text style={styles.msg}>Yesterday, 12:20 PM</Text>
                        </View>
                    </View>
                    <View style={styles.time}>
                        <FontAwesome name={"phone"} size={27} color={"green"} style={{marginLeft: 140}}/>
                    </View>
                </View>

                <View style={styles.chating}>
                    <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50}}/>
                    <View style={styles.chatbody}>
                        <Text style={styles.text}>Peer Sab</Text>
                        <View style={{flexDirection:"row"}}>
                            <Feather name={"arrow-up-right"} size={18} color={"green"} style={{marginTop:2}}/>
                            <Text style={styles.msg}>Yesterday, 10:30 PM</Text>
                        </View>
                    </View>
                    <View style={styles.time}>
                       <FontAwesome name={"video-camera"} size={23} color={"green"} style={{marginLeft: 140}}/>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    insideContainer: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10
    },
    chating: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    chatbody: {
        flexDirection: "column",
        marginLeft: 4,

    },
    text: {
        fontSize: 15,
        marginLeft: 4

    },
    msg: {
        fontSize: 13,
        marginLeft: 4,
    },
    time: {
        flexDirection: "column",
        marginLeft: 4,
    }

});

