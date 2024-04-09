import { LIKED_KEY } from '../cons'
import { CatDto } from '../types'
import { getData, saveData } from './storage'

export const addToLiked = async (cat: CatDto | null) => {
  if (!cat) return

  const liked = await getData<CatDto[]>(LIKED_KEY)

  saveData(LIKED_KEY, liked ? [...liked, cat] : [cat])
}

export const removeFromLiked = async (cat: CatDto | null) => {
  if (!cat) return

  const liked = await getData<CatDto[]>(LIKED_KEY)

  if (!liked) return

  saveData(
    LIKED_KEY,
    liked.filter((c) => c.id !== cat.id),
  )
}
