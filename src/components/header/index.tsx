import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";

const logo = require('../../assets/logo.png')
export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Image source={logo} style={{ marginTop: 21 }} />
                <Text style={styles.subtitle}>Você tem <Text style={{ fontWeight: 'bold' }}>3 tarefas</Text></Text>
            </View>
        </View>
    )
}