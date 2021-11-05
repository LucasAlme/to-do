import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";

const logo = require('../../assets/logo.png')

type Props = {
    numberTask: number;
}

export default function Header({ numberTask }: Props) {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Image source={logo} style={{ marginTop: 21 }} />
                <Text style={styles.subtitle}>Você tem <Text style={{ fontWeight: 'bold' }}>{numberTask} tarefas</Text></Text>
            </View>
        </View>
    )
}