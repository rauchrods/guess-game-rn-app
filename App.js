import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./pages/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.rootScreen}>
        <StatusBar style="light" />
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle= {{ opacity: 0.15 }}
        >
          <StartGameScreen />
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
