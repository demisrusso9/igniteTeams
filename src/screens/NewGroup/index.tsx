import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Highlight } from '@/components/Highlight'
import { Input } from '@/components/Input'
import { Content, Icon } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { createGroup } from '@/storage/group/createGroup'
import { Layout } from '@/layout'
import { AppError } from '@/utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
  const [group, setGroup] = useState('')
  const { navigate } = useNavigation()

  async function handleNewGroup() {
    try {
      if (group.trim() === '') {
        return Alert.alert('Novo Grupo', 'Informe o nome do grupo')
      }

      await createGroup(group)
      navigate('players', { group })

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível o novo grupo')
        console.log(error)
      }
    }
  }

  return (
    <Layout>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title='Nova Turma'
          subtitle='crie uma turma para adicionar pessoas'
        />

        <Input
          placeholder='Nome da turma'
          value={group}
          onChangeText={setGroup}
        />

        <Button title='Criar' variant='primary' onPress={handleNewGroup} />
      </Content>
    </Layout>
  )
}
