import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";

const logo = require('../../assets/logo3x.png')


export default function Splash() {

    const navigation = useNavigation();


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000)
    }, [])

    return (
        <View style={styles.background}>
                <Image source={logo}  />
                <Text style={styles.text}>Seu aplicativo{`\n`}favorito de afazeres</Text>
        </View>
    )
}