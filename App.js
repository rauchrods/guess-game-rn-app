import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./pages/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./pages/GameScreen";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const onConfirmHandler = (inputNumber) => {
    setUserNumber(inputNumber);
  };

  return (
    <LinearGradient
      colors={["#4e0329", "#9c0550", "#e07b50", "#ddb52f"]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.rootScreen}>
        <StatusBar style="light" />
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={{ opacity: 0.15 }}
        >
          {userNumber ? (
            <GameScreen />
          ) : (
            <StartGameScreen onConfirm={onConfirmHandler} />
          )}
        </ImageBackground>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
