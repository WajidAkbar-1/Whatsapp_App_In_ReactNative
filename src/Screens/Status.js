import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
export  function Status() {
    return (
           <View style={styles.container}>
               <View style={styles.innercontainer}>
                   <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50, marginLeft:4}}/>
                   <View style={styles.textview}>
                       <Text style={{fontSize:18, fontWeight:"bold"}}>My Status</Text>
                       <Text style={styles.text}>tab to add status update</Text>
                   </View>
               </View>
               <Text style={{backgroundColor:"#CECECE", height: 30, padding:5, paddingLeft:8}}>Recent updates</Text>
               <View style={styles.recentupdate}>
                     <Image source={require("../image/icon.png")} style={{width: 50, height: 50, borderRadius: 50, marginLeft:4}}/>
                   <Text style={{marginLeft: 12, fontSize:18, fontWeight:"bold"}}>WhatsApp</Text>
                   <AntDesign name={"checkcircle"} size={20} color={"#0e806a"} style={{marginTop: -17, marginLeft: 3}}/>
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
