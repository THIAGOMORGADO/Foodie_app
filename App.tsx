import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./src/compnents/Loading";

export default function App() {
  return (
    <>
      <StatusBar translucent />
      <Loading />;
    </>
  );
}
