import { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Input } from '@/components/Input'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Filter } from '@/components/Filter'
import { PlayerCard } from '@/components/PlayerCard'
import { EmptyList } from '@/components/EmptyList'
import { Button } from '@/components/Button'
import { Loading } from '@/components/Loading'

import { playerAddByGroup } from '@/storage/player/playerAddByGroup'
import { AppError } from '@/utils/AppError'
import { playersGetByGroupAndTeam } from '@/storage/player/playersGetByGroupAndTeam'
import { PlayerStorageDTO } from '@/storage/player/PlayerStorageDTO'
import { groupRemoveByName } from '@/storage/group/groupRemoveByName'
import { playerRemoveByGroup } from '@/storage/player/playerRemoveByGroup'

import { Layout } from '@/layout'

import { Form, HeaderList, NumberOfPlayers } from './styles'

type RouteParams = {
  group: string
}

export function Players() {
  const [isLoading, setIsLoading] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [team, setTeam] = useState('time a')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const route = useRoute()
  const { navigate } = useNavigation()

  const { group } = route.params as RouteParams

  async function handleAddPlayer() {
    if (playerName.trim() === '') {
      return Alert.alert('Nova Pessoa', 'Informe o nome da pessoa')
    }

    try {
      await playerAddByGroup({ name: playerName, team }, group)

      fetchPlayersByTeam()
      setPlayerName('')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)
      const playersByTeam = await playersGetByGroupAndTeam(group, team)

      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert('Pessoas', 'Não foi possível buscar os times')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()
    } catch (error) {
      console.log(error)
      Alert.alert('Pessoas', 'Não foi possível a pessoa do time')
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group)
      navigate('groups')
    } catch (error) {
      console.log(error)
      Alert.alert('Pessoas', 'Não foi possível remover o time')
    }
  }

  async function handleRemoveGroup() {
    Alert.alert(`Turma: ${group}`, 'Tem certeza que deseja remover a turma?', [
      { text: 'Sim', onPress: async () => groupRemove() },
      { text: 'Não', style: 'cancel' }
    ])
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Layout>
      <Header showBackButton />

      <Highlight title={group} subtitle='adicione a galera e separe os times' />

      <Form>
        <Input
          placeholder='Nome do participante'
          autoCorrect={false}
          value={playerName}
          onChangeText={setPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />

        <ButtonIcon name='add' variant='primary' onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['time a', 'time b', 'time c']}
          keyExtractor={item => item}
          horizontal
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 }
          ]}
          ListEmptyComponent={
            <EmptyList message='Não há pessoas nesse time.' />
          }
        />
      )}

      <Button
        title='Remover turma'
        variant='secondary'
        onPress={handleRemoveGroup}
      />
    </Layout>
  )
}
