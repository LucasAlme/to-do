import React from "react";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes/main.routes";
import { color } from "./src/utils/Constants";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={color.roxo} barStyle="light-content" />
      <Routes />
    </>
  )
}