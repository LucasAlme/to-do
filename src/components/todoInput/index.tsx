import React from "react";
import { View, Text, TextInput } from "react-native";
import { color } from "../../utils/Constants";
import { styles } from "./style";
import { ChevronRight } from "react-native-feather";

type Props = {
    width?: string;
    placeholder?: string;
}

export default function TodoInput({ width, placeholder }: Props) {
    return (
        <View style={[styles.input, width ? { width: width } : { width: '100%' }]}>
            <TextInput style={styles.text} placeholder={placeholder} placeholderTextColor={color.cinza} />
            <View style={styles.inside} />
            <ChevronRight stroke={color.cinza} height={32} width={32} />
        </View>
    )
}