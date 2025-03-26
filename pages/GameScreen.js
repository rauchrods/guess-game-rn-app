import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },

})