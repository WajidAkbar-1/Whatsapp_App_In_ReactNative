import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";


export  function Chats() {
    return (
        <View style={styles.container}>
        <View style={styles.insideContainer}>
            <View style={styles.chating}>
                <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50}}/>
                <View style={styles.chatbody}>
                    <Text style={styles.text}>Mota</Text>
                    <Text style={styles.msg}>Apna Scope Document Send kr pora</Text>
                </View>
                <View style={styles.time}>
                <Text style={{marginLeft: 50, fontSize: 12}}>10:30 pm</Text>
                    <TouchableOpacity style={{marginLeft: 64, marginTop: 2, backgroundColor:"lightgreen", borderRadius: 25, alignItems:"center", height: 22, width: 25}}>
                        <Text>3</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.chating}>
                <Image source={require("../image/PXL_20230426_041115640.jpg")} style={{width: 50, height: 50, borderRadius: 50}}/>
                <View style={styles.chatbody}>
                    <Text style={styles.text}>Manshoor</Text>
                    <Text style={styles.msg}>Assignment Send kr Design ki</Text>
                </View>
                <View style={styles.time}>
                    <Text style={{marginLeft: 87, fontSize: 12}}>10:30 pm</Text>
                    <TouchableOpacity style={{marginLeft: 194, marginTop: 2, backgroundColor:"lightgreen", borderRadius: 25, alignItems:"center", height: 22, width: 25}}>
                        <Text>3</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.chating}>
                <Image source={require("../image/IMG_2848.jpg")} style={{width: 50, height: 50, borderRadius: 50}}/>
                <View style={styles.chatbody}>
                    <Text style={styles.text}>Tanoli</Text>
                    <Text style={styles.msg}>Attack krna war start ha </Text>
                </View>
                <View style={styles.time}>
                    <Text style={{marginLeft: 118, fontSize: 12}}>04:50 pm</Text>

                </View>
            </View>
            <View style={styles.chating}>
                <Image source={require("../image/IMG-20230918-WA0072.jpg")} style={{width: 50, height: 50, borderRadius: 50}}/>
                <View style={styles.chatbody}>
                    <Text style={styles.text}>AMIGOS!</Text>
                    <Text style={styles.msg}>Suba kn kn Jaye ga Uni</Text>
                </View>
                <View style={styles.time}>
                    <Text style={{marginLeft: 127, fontSize: 12}}>10:30 pm</Text>
                    <TouchableOpacity style={{marginLeft: 140, marginTop: 2, backgroundColor:"lightgreen", borderRadius: 25, alignItems:"center", height: 22, width: 25}}>
                        <Text>50</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.chating}>
                <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50}}/>
                <View style={styles.chatbody}>
                    <Text style={styles.text}>AttaUllah</Text>
                    <Text style={styles.msg}>charta ye</Text>
                </View>
                <View style={styles.time}>
                    <Text style={{marginLeft: 200, fontSize: 12}}>10:30 pm</Text>
                    <TouchableOpacity style={{marginLeft: 207, marginTop: 2, backgroundColor:"lightgreen", borderRadius: 25, alignItems:"center", height: 22, width: 25}}>
                        <Text>3</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.chating}>
                <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50}}/>
                <View style={styles.chatbody}>
                    <Text style={styles.text}>Peer Saab</Text>
                    <Text style={styles.msg}>Unity mai kar na kai yara</Text>
                </View>
                <View style={styles.time}>
                    <Text style={{marginLeft: 120, fontSize: 12}}>10:30 pm</Text>

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
