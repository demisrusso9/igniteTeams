import { ButtonIcon } from '../ButtonIcon'
import { Container, Name, Icon } from './styles'

interface PlayerCardProps {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name='person' />
      <Name>{name}</Name>
      <ButtonIcon name='close' variant='secondary' onPress={onRemove} />
    </Container>
  )
}
