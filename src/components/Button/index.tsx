import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  variant: 'primary' | 'secondary'
}

export function Button({ title, variant }: ButtonProps) {
  return (
    <Container variant={variant}>
      <Title>{title}</Title>
    </Container>
  )
}
