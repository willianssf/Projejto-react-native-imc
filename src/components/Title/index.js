import React from "react";
import { View, Text} from "react-native";
import styles from "./style";
import Form from "../Form";
export default function Title(){
    return(
        <View style={styles.boxTitle}> 
            <Text style={styles.textTitle}>ONEBITHEALTH</Text> 
            <Form/>
        </View>
    );
}