import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '../config'
import { getAllGroup } from './getAllGroup'

export async function createGroup(name: string) {
  try {
    const storedGroup = await getAllGroup()

    const storage = JSON.stringify([...storedGroup, name])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}