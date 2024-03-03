import { useState, useCallback } from 'react'
import { Alert, FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { GroupCard } from '@/components/GroupCard'
import { EmptyList } from '@/components/EmptyList'
import { Button } from '@/components/Button'
import { groupGetAll } from '@/storage/group/groupGetAll'
import { Layout } from '@/layout'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate('new')
  }

  function handleGroupCard(group: string) {
    navigate('players', { group })
  }

  async function fetchAllGroups() {
    try {
      const data = await groupGetAll()
      setGroups(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível buscar as turmas')
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAllGroups()
    }, [])
  )

  return (
    <Layout>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            key={item}
            title={item}
            onPress={() => handleGroupCard(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyList message='Que tal cadastrar a primeira turma?' />
        }
      />

      <Button
        title='Cadastrar turma'
        variant='primary'
        onPress={handleNewGroup}
      />
    </Layout>
  )
}
