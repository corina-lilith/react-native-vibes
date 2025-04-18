
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

type Props = {
  children: React.ReactNode
}

export default function Background({ children }: Props) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
  },
})
