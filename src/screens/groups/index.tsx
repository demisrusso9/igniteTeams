import { useState, useCallback } from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { GroupCard } from '@/components/GroupCard'
import { EmptyList } from '@/components/EmptyList'
import { Button } from '@/components/Button'
import { getAllGroup } from '@/storage/group/getAllGroup'
import { Layout } from '@/layout'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate('new')
  }

  async function fetchAllGroups() {
    try {
      const data = await getAllGroup()
      setGroups(data)
    } catch (error) {
      console.log(error)
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
        renderItem={({ item }) => <GroupCard key={item} title={item} />}
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
