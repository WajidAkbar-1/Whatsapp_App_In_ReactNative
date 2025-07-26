import React  from "react";
import { StyleSheet, Text, View } from "react-native";
import {Header} from "./src/Header";
import {Navigation} from "./src/Navigation";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
       <NavigationContainer>
             <View style={styles.container}>
                    <Header/>
                 <View style={{
                        flex: 1,
                        width: "100%",
                        backgroundColor: "white",
                 }}>
                     <Navigation/>
                 </View>
             </View>

         </NavigationContainer>

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
