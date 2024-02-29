import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Highlight } from '@/components/Highlight'
import { Input } from '@/components/Input'
import { Container, Content, Icon } from './styles'
import { useNavigation } from '@react-navigation/native'

export function NewGroup() {
  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate('players', { group: 'time b' })
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title='Nova Turma'
          subtitle='crie uma turma para adicionar pessoas'
        />

        <Input placeholder='Nome da turma' />

        <Button title='Criar' variant='primary' onPress={handleNewGroup} />
      </Content>
    </Container>
  )
}
