import { Header } from '@/components/header'
import { Container } from './styles'
import { Highlight } from '@/components/highlight'
import { GroupCard } from '@/components/groupCard'

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />

      <GroupCard  title='ReactJS' />
    </Container>
  )
}
