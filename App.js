import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./pages/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./pages/GameScreen";
import { useState } from "react";
import GameOverScreen from "./pages/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const [gameIsOver, setGameIsOver] = useState(true);

  const onConfirmHandler = (inputNumber) => {
    setUserNumber(inputNumber);
    setGameIsOver(false);
  };

  let screen = <StartGameScreen onConfirm={onConfirmHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={() => setGameIsOver(true)}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={["#4e0329", "#9c0550", "#e07b50", "#ddb52f"]}
      style={styles.linearGradient}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
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
