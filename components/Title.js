import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
  }
});
