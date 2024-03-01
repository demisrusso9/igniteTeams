import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '../config'
import { getAllGroup } from './getAllGroup'
import { AppError } from '@/utils/AppError'

export async function createGroup(name: string) {
  try {
    const storedGroup = await getAllGroup()

    if (storedGroup.includes(name)) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const storage = JSON.stringify([...storedGroup, name])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}