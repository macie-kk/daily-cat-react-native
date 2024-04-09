import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, StyleSheet, View } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'
import { CatDto, RootStackParamList } from '../types'
import { colors } from '../theme'
import HeartIcon from '../components/icons/HeartIcon'
import { addToLiked, removeFromLiked } from '../services/liked-list'

type CatsProps = StackScreenProps<RootStackParamList, 'Cats'>

const Cats = ({ navigation, route }: CatsProps) => {
  const [cat, setCat] = useState<CatDto | null>(null)
  const [showFull, setShowFull] = useState<boolean>(false)
  const [liked, setLiked] = useState<boolean>(false)

  useEffect(() => {
    if (liked) {
      addToLiked(cat)
    } else {
      removeFromLiked(cat)
    }
  }, [liked])

  useEffect(() => {
    const fetchCat = async () => {
      let query = 'search'
      if (route.params?.id) {
        setLiked(true)
        query = route.params.id
      }

      console.log(query)

      const response = await fetch(`https://api.thecatapi.com/v1/images/${query}`)
      const json = (await response.json()) as CatDto[]

      setCat(Array.isArray(json) ? json[0] : json)
    }

    fetchCat()
  }, [])

  if (!cat) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.coffee} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable style={{ flex: 1, width: '100%' }} onPress={() => setShowFull(!showFull)}>
          <Image resizeMode={showFull ? 'contain' : 'cover'} source={{ uri: cat.url }} style={styles.image} />
        </Pressable>
        <Pressable onPress={() => setLiked(!liked)} style={{ padding: 16 }}>
          <HeartIcon width={32} height={32} fill={liked ? colors.red : 'transparent'} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    display: 'flex',
    width: '90%',
    height: '60%',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.coffee,
  },
  text: {
    marginTop: -92,
    marginBottom: 16,
    fontSize: 32,
    textAlign: 'center',
  },
})

export default Cats
