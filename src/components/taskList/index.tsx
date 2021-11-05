import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { color } from "../../utils/Constants";
import { styles } from "./style";


type Props = {
    title: string
}

export default function TaskList({ title }: Props) {
    return (
        <TouchableOpacity style={styles.container} >
            <LinearGradient colors={["rgba(196, 196, 196, 1)", "rgba(196, 196, 196, 0)"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
                <View style={styles.content}>
                    <CheckBox
                        checkedIcon='check'
                        checkedColor={color.verde}
                        uncheckedColor={color.cinzaEscuro2}
                        containerStyle={styles.checkBoxStyle}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}