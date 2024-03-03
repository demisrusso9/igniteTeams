import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../config";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storedGroup = await playersGetByGroup(group)

    const filtered = storedGroup.filter((item) => item.name !== playerName)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify(filtered))
  } catch (error) {
    throw error
  }
}