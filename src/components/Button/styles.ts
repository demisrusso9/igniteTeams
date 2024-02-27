import styled from 'styled-components/native'

interface ButtonStyleProps {
  variant: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ?
      theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  
  /* min-height: 56px;
  max-height: 56px;
  flex: 1 */
  
  height: 56px;

  align-items: center;
  justify-content: center;

  padding: 16px 24px;
  border-radius: 6px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`