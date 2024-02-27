import { Container } from './styles'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { GroupCard } from '@/components/GroupCard'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { EmptyList } from '@/components/EmptyList'
import { Button } from '@/components/Button'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

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

      <Button title='Cadastrar turma' variant='primary' />
    </Container>
  )
}
