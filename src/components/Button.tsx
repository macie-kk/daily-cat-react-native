import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { colors } from '../theme'

type ButtonProps = {
  children: React.ReactNode
  width?: number
  height?: number
  color?: string
  textColor?: string
  icon?: React.JSX.Element
  onPress: () => void
}

export default function Button({ onPress, children, color, textColor, icon, width, height }: ButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: color || colors.teaGreen, width: width || null, height: height || null },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor || colors.white }]}>
        {children} {icon}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },
})
