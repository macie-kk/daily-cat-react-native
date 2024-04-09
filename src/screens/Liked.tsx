import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { CatDto, RootStackParamList } from '../types'
import { colors } from '../theme'
import { getData } from '../services/storage'
import { useState } from 'react'
import { LIKED_KEY } from '../cons'
import Button from '../components/Button'

type LikedProps = StackScreenProps<RootStackParamList, 'Liked'>

const Liked = ({ navigation, route }: LikedProps) => {
  const [liked, setLiked] = useState<CatDto[]>([])

  navigation.addListener('focus', (e) => {
    getLiked()
  })

  const getLiked = async () => {
    const data = await getData<CatDto[]>(LIKED_KEY)

    if (!data) return console.log('no data')

    setLiked(data)
  }

  if (!liked.length)
    return (
      <View
        style={[styles.outerContainer, { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48 }]}
      >
        <Text style={{ fontSize: 32, fontWeight: '500', color: colors.red }}>No liked cats :(</Text>
        <Button onPress={() => navigation.push('Cats')} color={colors.cream} textColor={colors.coffee}>
          Click to see cats :)
        </Button>
      </View>
    )

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {liked.map((cat, i) => (
          <View
            key={cat.id}
            style={[
              styles.catContainer,
              {
                paddingLeft: i % 2 === 0 ? 8 : 4,
                paddingRight: i % 2 === 0 ? 4 : 8,
                paddingTop: i < 2 ? 8 : 4,
                paddingBottom: 4,
              },
            ]}
          >
            <Pressable
              onPress={() => navigation.push('Cats', { id: cat.id })}
              style={{ width: '100%', height: '100%' }}
            >
              <Image source={{ uri: cat.url }} style={styles.catImage} />
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.pink,
    flex: 1,
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  catContainer: {
    flexShrink: 0,
    width: '50%',
    aspectRatio: 1 / 1,
  },
  catImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
})

export default Liked
