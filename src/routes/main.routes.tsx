import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/home";
import Splash from "../pages/splash";

const Stack = createStackNavigator();

export function Routes() {

    function AppRoutes() {
        return (
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name='Splash' component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
}

