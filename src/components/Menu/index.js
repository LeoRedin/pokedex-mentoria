import React from 'react'
import {Button} from 'components/Button'

import {Container} from './styles'

function Menu() {
  const buttons = [
    {
      name: 'Home',
    },
    {
      name: 'Gerações',
    },
    {
      name: 'Sobre',
    },
    {
      name: 'Logout',
    },
  ]

  return (
    <Container>
      {buttons.map(button => (
        <Button key={button.name}>{button.name}</Button>
      ))}
    </Container>
  )
}

export {Menu}
