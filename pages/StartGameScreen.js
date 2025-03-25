import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [inputNumber, setInputNumber] = useState(1);

  const onInputChange = (input) => {
    if (typeof input == "number") {
      setInputNumber(input);
      return;
    } else {
      console.log("Please enter a number no text allowed");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        // keyboardType="decimal-pad"
        style={styles.input}
        value={inputNumber}
        onChangeText={(input) => onInputChange(input)}
        placeholder="Enter Any Number"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "auto",
    textAlign: "center",
  },
});
