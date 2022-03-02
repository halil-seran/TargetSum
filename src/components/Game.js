import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Game = ({ randomNumberCount }) => {
  const target = 10 + Math.floor(40 * Math.random());
  return (
    <View style={styles.container}>
      <View style={styles.targetNumberContainer}>
        <Text style={styles.targetNumber}>{target}</Text>
      </View>
      <Text style={styles.targetNumber}>{randomNumberCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  targetNumberContainer: {
    margin: 80,
    backgroundColor: "orange",
    alignItems: "center",
    borderRadius: 15,
  },
  targetNumber: {
    fontSize: 80,
  },
});
