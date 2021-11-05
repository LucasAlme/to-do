import React, { useState } from "react";
import { Text, View } from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { color } from "../../utils/Constants";
import { styles } from "./style";


type Props = {
    title: string;
    checked: boolean;
    onPressCheck: () => void
    onPressRemove: () => void
}

export default function TaskList({ title, checked, onPressCheck, onPressRemove }: Props) {
    return (
        <View style={styles.container} >
            <LinearGradient colors={
                checked ? ["rgba(196, 196, 196, 0)", "rgba(196, 196, 196, 0)"] :
                    [
                        "rgba(196, 196, 196, 1)", "rgba(196, 196, 196, 0.97)", "rgba(196, 196, 196, 0.54)", "rgba(196, 196, 196, 0)", "rgba(196, 196, 196, 0)"
                    ]
            }
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
                <View style={styles.content}>
                    <TouchableOpacity style={checked ? styles.buttonChecked : styles.button} onPress={onPressCheck}>
                        {checked ?
                            <Icon name="check" type="font-awesome-5" color={color.branco} size={13} style={{ paddingTop: 3 }} />
                            :
                            null
                        }
                    </TouchableOpacity>
                    <View style={styles.rightContent}>
                        <Text style={checked ? styles.titleChecked : styles.title}>{title}</Text>
                        <Icon name="trash-alt" type="font-awesome-5" color={color.cinza} size={24} onPress={onPressRemove} />
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}