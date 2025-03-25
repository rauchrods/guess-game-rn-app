import { SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./pages/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.rootScreen}>
      <StatusBar style="auto" />
      <LinearGradient colors={["#4e0329", "#ddb52f"]}>
        <StartGameScreen />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#ddb52f",
  },
});
