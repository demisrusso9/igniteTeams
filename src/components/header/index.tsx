import { Highlight } from '../highlight'
import { Container, Logo, BackButton, BackIcon } from './styles'
import logoImg from '@/assets/logo.png'

interface GroupsProps {
  showBackButton?: boolean
}

export function Header({ showBackButton }: GroupsProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  )
}
