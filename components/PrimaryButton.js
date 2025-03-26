import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import colors from "../utils/constants/colors";

const PrimaryButton = ({ children, onPress, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [props.style, pressed && styles.pressed]}
      android_ripple={{ color: colors.accent400 }}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.accent500,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
    margin: 4,
    // width: 100,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
