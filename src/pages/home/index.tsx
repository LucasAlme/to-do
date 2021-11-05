import React from "react";
import { View } from "react-native";
import Header from "../../components/header";
import TodoInput from "../../components/todoInput";
import { styles } from "./style";

export default function Home() {
    return (
        <View style={styles.background}>
            <Header />
            <View style={{ paddingHorizontal: 24 }}>
                <TodoInput placeholder="Adicione uma tarefa" />
            </View>
        </View>
    )
}