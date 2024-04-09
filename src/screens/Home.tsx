import React from 'react'
import { StyleSheet, View } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../types'
import Button from '../components/Button'
import { colors } from '../theme'
import HeartIcon from '../components/icons/HeartIcon'

type HomeProps = StackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation, route }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.push('Cats')} width={180}>
        Show me a cat
      </Button>
      <Button
        onPress={() => navigation.push('Liked')}
        color={colors.pink}
        textColor={colors.red}
        width={180}
        icon={<HeartIcon fill={colors.red} height={18} width={undefined} />}
      >
        Favourites
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    gap: 16,
  },
})

export default Home
