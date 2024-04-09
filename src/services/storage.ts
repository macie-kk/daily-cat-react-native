import AsyncStorage from '@react-native-async-storage/async-storage'

type DataType = string | Record<string, any> | Array<any>

export const saveData = (key: string, data: DataType) => {
  try {
    let stringifiedData = data
    if (typeof data !== 'string') {
      stringifiedData = JSON.stringify(data)
    }
    AsyncStorage.setItem(key, stringifiedData as string)
  } catch (e) {
    console.log(e)
  }
}

export const getData = async <T>(key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return JSON.parse(value) as T
    }
  } catch (e) {
    console.log(e)
  }
}

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log(e)
  }
}
