import { DefaultContainer } from './styles'
import { Platform, KeyboardAvoidingView } from 'react-native'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <DefaultContainer>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled={Platform.OS === 'ios'}
        behavior='padding'
      >
        {children}
      </KeyboardAvoidingView>
    </DefaultContainer>
  )
}
