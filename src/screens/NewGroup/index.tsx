import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Highlight } from '@/components/Highlight'
import { Input } from '@/components/Input'
import { Content, Icon } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { createGroup } from '@/storage/group/createGroup'
import { Layout } from '@/layout'

export function NewGroup() {
  const [group, setGroup] = useState('')
  const { navigate } = useNavigation()

  async function handleNewGroup() {
    try {
      await createGroup(group)
      navigate('players', { group })
    } catch (error) {
      console.log(error)
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
