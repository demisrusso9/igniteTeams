import { ButtonIconStyleProps, Container, Icon } from './styles'
import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface ButtonIconProps extends TouchableOpacityProps, ButtonIconStyleProps {
  name: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ name, variant, ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={name} variant={variant} />
    </Container>
  )
}
