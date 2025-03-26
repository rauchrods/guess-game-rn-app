import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [inputNumber, setInputNumber] = useState("");

  const onInputChange = (input) => {
    setInputNumber(input);
  };

  const onResetHandler = () => {
    setInputNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(inputNumber);
    console.log( typeof chosenNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: onResetHandler }]
      );
      return;
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="numbers-and-punctuation"
        onChangeText={onInputChange}
        value={inputNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={onResetHandler}>Reset</PrimaryButton>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>

      <Text>{inputNumber}</Text>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    backgroundColor: "#72063c",
    marginTop: 50,
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
  numberInput: {
    height: 40,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    // borderBlockColor: "#ddb52f",
    // borderWidth: 2,
    width: "100%",
    justifyContent: "space-between",
  },
});
