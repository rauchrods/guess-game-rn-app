import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/constants/colors";

const deviceWidth = Dimensions.get("window").width;

console.log("deviceWidth", deviceWidth);
const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: deviceWidth < 380 ? 12 : 18,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 18 : 22,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
