import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Input } from '@/components/Input'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Filter } from '@/components/Filter'
import { PlayerCard } from '@/components/PlayerCard'
import { EmptyList } from '@/components/EmptyList'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { Button } from '@/components/Button'

export function Players() {
  const [team, setTeam] = useState('time b')
  const [players, setPlayers] = useState(['a'])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <Form>
        <Input placeholder='Nome do participante' autoCorrect={false} />
        <ButtonIcon name='add' variant='primary' />
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

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard onRemove={() => {}} name={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
        ListEmptyComponent={<EmptyList message='Não há pessoas nesse time.' />}
      />

      <Button
        title='Remover turma'
        variant='secondary'
      />
    </Container>
  )
}
