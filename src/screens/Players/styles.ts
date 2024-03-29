import styled from 'styled-components/native'

export const Form = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`

export const NumberOfPlayers = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`