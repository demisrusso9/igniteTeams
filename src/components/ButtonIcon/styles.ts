import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export interface ButtonIconStyleProps {
  variant: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity`
  height: 56px;
  width: 56px;

  align-items: center;
  justify-content: center;

  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconStyleProps>(({ theme, variant }) => ({
  size: 24,
  color: variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``