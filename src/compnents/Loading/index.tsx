import React from "react";
import { View, ImageBackground, Image, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import backgroundImage from "../../assets/splash.png";
import logo from "../../assets/Logo.png";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backGroundImage}
        source={backgroundImage}
        resizeMode="cover"
      >
        <Image source={logo} style={styles.logo} resizeMode="cover" />

        <ActivityIndicator color="#FF7622" size={"large"} />
      </ImageBackground>
    </View>
  );
}
