import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [inputNumber, setInputNumber] = useState("1");

  const onInputChange = (input) => {
    setInputNumber(input);
  };

  const onResetHandler = () => {
    setInputNumber("1");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={onInputChange}
        value={inputNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={onResetHandler}>Reset</PrimaryButton>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryButton>Confirm</PrimaryButton>
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
