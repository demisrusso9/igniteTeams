import { useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { GroupCard } from '@/components/GroupCard'
import { EmptyList } from '@/components/EmptyList'
import { Button } from '@/components/Button'
import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate('new')
  }

  return (
    <Container>
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
        style={{ marginBottom: 16 }}
        onPress={handleNewGroup}
      />
    </Container>
  )
}
