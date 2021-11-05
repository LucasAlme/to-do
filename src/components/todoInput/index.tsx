import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { color } from "../../utils/Constants";
import { styles } from "./style";
import { ChevronRight } from "react-native-feather";

type Props = TextInputProps & {
    width?: string;
    placeholder?: string;
    onPressButton: () => void;
}

export default function TodoInput({ width, placeholder, onPressButton, ...rest }: Props) {
    return (
        <View style={[styles.input, width ? { width: width } : { width: '100%' }]}>
            <TextInput style={styles.text} placeholder={placeholder} placeholderTextColor={color.cinza} {...rest} />
            <View style={styles.inside} />
            <ChevronRight stroke={color.cinza} height={32} width={32} onPress={onPressButton} />
        </View>
    )
}