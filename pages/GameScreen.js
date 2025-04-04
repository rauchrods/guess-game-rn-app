import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../utils/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess == userNumber) {
      console.log("Game Over");
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Okay", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add-circle" size={24} color={colors.primary500} />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons
                name="remove-circle-sharp"
                size={24}
                color={colors.primary500}
              />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.instructionText}>Past Guesses</Text>

        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              key={itemData.index}
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },

  instructionText: {
    color: colors.accent500,
    fontSize: 22,
    textAlign: "center",
  },
  inputContainer: {
    padding: 16,
    backgroundColor: colors.primary500,
    marginTop: 20,
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 10,
    // borderWidth: 2,
    // width: 150,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
