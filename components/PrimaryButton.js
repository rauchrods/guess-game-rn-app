import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const PrimaryButton = ({ children, onPress, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [props.style, pressed && styles.pressed]}
      android_ripple={{ color: "#ddb50f" }}
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
    backgroundColor: "#ddb52f",
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
