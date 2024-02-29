import { useNavigation } from '@react-navigation/native'
import { Container, Logo, BackButton, BackIcon } from './styles'
import logoImg from '@/assets/logo.png'

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton }: HeaderProps) {
  const { navigate } = useNavigation()

  function handleGoHome() {
    navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoHome}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  )
}
