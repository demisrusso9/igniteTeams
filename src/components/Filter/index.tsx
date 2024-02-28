import { TouchableOpacityProps } from 'react-native'
import { Container, Title, FilterStyleProps } from './styles'

interface FilterProps extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export function Filter({ title, isActive }: FilterProps) {
  return (
    <Container isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  )
}
