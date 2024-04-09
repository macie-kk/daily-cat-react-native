export type RootStackParamList = {
  Home: undefined
  Cats:
    | {
        id?: string
      }
    | undefined
  Liked: undefined
}

export type CatDto = {
  id: string
  url: string
  width: number
  height: number
}
