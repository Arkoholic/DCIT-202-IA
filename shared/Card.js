import React from "react";
import { StyleSheet, View} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Card(params){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
            {params.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        
        borderRadius: 12,
        elevation: 8,
        backgroundColor : "white",
        shadowOffset: { width: 1, height: 1},
        shadowColor: "#7a7976",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        marginHorizontal: 15,
        marginVertical: 15,
    },
    cardContent:{
        marginHorizontal: 18, 
        marginVertical: 50,

    }
})