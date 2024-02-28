import { Header } from '@/components/Header'
import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { Highlight } from '@/components/Highlight'
import { Input } from '@/components/Input'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Filter } from '@/components/Filter'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Players() {
  const [team, setTeam] = useState('time b')
  const [players, setPlayers] = useState([])

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
    </Container>
  )
}
