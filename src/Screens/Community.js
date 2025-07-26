import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
export  function Community() {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50, marginLeft:4}}/>
                <View style={styles.textview}>
                    <Text style={{fontSize:16, fontWeight:"bold"}}>New Community</Text>
                </View>
            </View>
            <Text style={{backgroundColor:"#CECECE", height: 10, padding:5, paddingLeft:8}}></Text>
            <View style={styles.recentupdate}>
                <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50, marginLeft:4}}/>
                <Text style={{marginLeft: 12, fontSize:18, fontWeight:"bold"}}>Gul Khan Community</Text>
            </View>
            <View style={styles.recentupdate}>
                <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50, marginLeft:4}}/>
                <Text style={{marginLeft: 12, fontSize:18, fontWeight:"bold"}}>Sher Khan Community</Text>
            </View>

            <View style={styles.recentupdate}>
                <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50, marginLeft:4}}/>
                <Text style={{marginLeft: 12, fontSize:18, fontWeight:"bold"}}>Ali Khan Community</Text>
            </View>

            <View style={styles.recentupdate}>
                <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50, marginLeft:4}}/>
                <Text style={{marginLeft: 12, fontSize:18, fontWeight:"bold"}}>Peer Khan Community</Text>
            </View>




        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    innercontainer: {
        height: 80,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",

    },
    textview: {
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: 12,
    },
    recentupdate: {
        height: 80,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        marginLeft:4
    }
});
