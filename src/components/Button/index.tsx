import { TouchableOpacityProps } from 'react-native'
import { Container, Title, ButtonStyleProps } from './styles'

interface ButtonProps extends TouchableOpacityProps, ButtonStyleProps {
  title: string
}

export function Button({ title, variant, ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
