import React from 'react';
import {View, StyleSheet,Text,Image,ImageBackground} from 'react-native';
import { MaterialIcon } from "@expo/vector-icons"

const Header = () => {
    return (
        <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
            <View style={styles.headerTitle}>
                <Image 
                source={require("../assets/easyworship.png")}
                style={styles.headerImage}
                />
                <Text style={styles.headerText}>Game Zone</Text>
            </View>
        </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red"
    },
    headerText:{
        fontWeight:"bold",
        fontSize:20,
        color:"#333",
        letterSpacing:1 
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10
    },
    headerTitle:{
        flexDirection:"row"
    }
})

export default Header;
