import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";
import colors from "../utils/constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screenContainer}>
      <Title>GameOverScreen</Title>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <View style={{ alignItems: "center", rowGap: 20 }}>
        <Text style={styles.summary}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary500,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  screenContainer: {
    flex: 1,
    alignItems: "center",
    rowGap: 40,
    justifyContent: "center",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});
